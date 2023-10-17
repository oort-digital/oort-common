const fs = require('fs');
const path = require('path');
const {createCanvas, loadImage, Image} = require('canvas');
const {
    getBiggestElement, PADDING, MARGIN_SKILL_TOP, MARGIN_FIRST_NAME_TOP,
    MARGIN_SECOND_NAME_TOP, MARGIN_SECOND_MARGIN_BOTTOM, MARGIN_SKILL_LEVEL_TOP, SKILL_LEVEL_HEIGHT
} = require('./common/utils');

const {getFirstNameHeight, getSecondNameHeight, drawAndGetNames,drawAndGetRandomNames} = require('./name');
const {SKILL_SIZE, drawRandomSkills} = require('./skills');
const {drawGen} = require('./gen');
const {drawBrand} = require('./brand');
const {colors, hairColors,randomHairColor} = require('./hairColor');
const {generateFacePartRandomly,faceParts} = require('./face-traits-minting-probabilities');
const {generateMetadata} = require('./metadata');
const {generateOffChainData} = require('./offchain-data');
const {clans} = require('./clans');
const {generateBodyRandomly} = require('./body');
const {getBackgroundAsset} = require('./assets');

//If you want to switch heroes,you only need to modify clan
const clan = clans.humanMale.PioneerFarmer;

const drawCharacterPart = (canvasContext, part, x = 0, z = 0) => {
    canvasContext.drawImage(part, x, z, part.width, part.height);
};

const drawBackground = (canvasContext, dx, dy, width, height) => {
    const img = new Image();
    img.onload = ()=>{
        canvasContext.drawImage(img, dx, dy, width, height);
    };
    img.src = getBackgroundAsset(clan.clan.name);
};

const replaceColor = (partFileContent, targetColor) => partFileContent
    .replace(new RegExp(hairColors[colors.default].main, 'gi'), hairColors[targetColor].main)
    .replace(new RegExp(hairColors[colors.default].lower, 'i'), hairColors[targetColor].lower)
    .replace(new RegExp(hairColors[colors.default].upper, 'i'), hairColors[targetColor].upper);

const drawCharacterParts = (parts) => {
    // get max sizes
    const canvasWith = getBiggestElement('width', parts);
    const canvasHeight = getBiggestElement('height', parts);

    // prepare canvas
    const canvas = createCanvas(canvasWith, canvasHeight);
    const canvasContext = canvas.getContext('2d');

    // draw parts
    parts.forEach((part) => drawCharacterPart(canvasContext, part));

    return canvas;
};

const loadCharacterPart = async (partsDirPath, facePart = null, color = null, attemptedPartFiles = []) => {
    let partFilesInDir = [];

    try {
        partFilesInDir = fs.readdirSync(path.resolve(partsDirPath));
    } catch (e) {
        // dir does not exist or failed to read
    }

    if (partFilesInDir.length === attemptedPartFiles.length) {
        // was not able to load any part file or empty dir (both arrays empty)
        return createCanvas(0, 0);
    }

    // filter out unAttempted for faster random value
    const unAttemptedPartFilesInDir = partFilesInDir
        .filter((partFileInDir) => !attemptedPartFiles.includes(partFileInDir));

    // generate random until fair file generated that wasn't failing before
    let partFilePath;
    if(facePart){
        partFilePath = generateFacePartRandomly(unAttemptedPartFilesInDir,facePart);
    }else{
        partFilePath = generateBodyRandomly(unAttemptedPartFilesInDir,clan);
    }
    const fullPartFilePath = `${partsDirPath}/${partFilePath}`;

    let partFile;
    try {
        let rawPartFile = fs.readFileSync(path.resolve(fullPartFilePath), 'utf8');

        if (color && color !== colors.default) {

            rawPartFile = replaceColor(rawPartFile, color);
        }

        partFile = await loadImage(Buffer.from(rawPartFile));
    } catch (e) {
        console.log(e)
        // file not found
    }

    if (!partFile) {
        console.log('part load failed: ', fullPartFilePath);
        // attempt other
        return loadCharacterPart(partsDirPath, color, attemptedPartFiles.concat(partFilePath));
    }

    return partFile;
};

const generateCharacterBodyCanvas = async () => {
    return drawCharacterParts(await Promise.all([
        loadCharacterPart(`${clan.dirPath}/body/body/${clan.body}`, null,clan.hairColor),
        loadCharacterPart(`${clan.dirPath}/body/pants`),
        loadCharacterPart(`${clan.dirPath}/body/belt`),
        loadCharacterPart(`${clan.dirPath}/body/boots`),
    ]));
};

const generateCharacterHeadCanvas = async () => {
    return drawCharacterParts(await Promise.all([
        loadCharacterPart(`${clan.dirPath}/face/ears`, faceParts.ears,null),
        loadCharacterPart(`${clan.dirPath}/face/head`,faceParts.head, clan.hairColor),
        loadCharacterPart(`${clan.dirPath}/face/eyes`, faceParts.eyes,null),
        loadCharacterPart(`${clan.dirPath}/face/beard`,faceParts.beard, clan.hairColor),
        loadCharacterPart(`${clan.dirPath}/face/moustache`,faceParts.moustache, clan.hairColor),
        loadCharacterPart(`${clan.dirPath}/face/nose`, faceParts.nose,null),
        loadCharacterPart(`${clan.dirPath}/face/brow`,faceParts.brow, clan.hairColor),
    ]));
};

const generateRandomCharacterImage = async () => {
    const bodyCanvas = await generateCharacterBodyCanvas();
    const headCanvas = await generateCharacterHeadCanvas();

    // prepare canvas
    const characterCanvas = createCanvas(bodyCanvas.width, bodyCanvas.height + headCanvas.height / 2);
    const characterCanvasContext = characterCanvas.getContext('2d');

    // draw character parts
    drawCharacterPart(
        characterCanvasContext,
        bodyCanvas,
        0,
        headCanvas.height / 2,
    );
    drawCharacterPart(
        characterCanvasContext,
        headCanvas,
        characterCanvas.width / 2 - headCanvas.width / 2,
        10
    );

    return characterCanvas;
};

const generateRandomWholeImage = async (tokenId) => {
    //random hair color
    randomHairColor(clan);
    const characterCanvas = await generateRandomCharacterImage();
    const characterCanvasContext = characterCanvas.getContext('2d');

    const raceWidth = characterCanvas.width * 0.8;
    const raceHeight = characterCanvas.height * 0.65;

    const firstNameHeight = getFirstNameHeight(characterCanvasContext);
    const secondNameHeight = getSecondNameHeight(characterCanvasContext);
    const canvasHeight = raceHeight + SKILL_SIZE + firstNameHeight + secondNameHeight + PADDING * 2 + MARGIN_SKILL_TOP + MARGIN_SKILL_LEVEL_TOP + SKILL_LEVEL_HEIGHT + MARGIN_FIRST_NAME_TOP + MARGIN_SECOND_NAME_TOP + MARGIN_SECOND_MARGIN_BOTTOM;

    const canvas = createCanvas(raceWidth + PADDING * 2, canvasHeight);
    const canvasContext = canvas.getContext('2d');

    // draw background color
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    const dx = PADDING;
    let dy = PADDING;
    //draw background
    drawBackground(canvasContext, dx, dy, raceWidth, raceHeight);
    //draw race
    canvasContext.drawImage(characterCanvas, characterCanvas.width * 0.1, characterCanvas.height * 0.08, raceWidth, raceHeight, dx, dy, raceWidth, raceHeight);

    //draw brand
    drawBrand(canvasContext, clan);

    //draw gen
    drawGen(canvasContext, clan.gen.shortName, canvas.width);

    //draw skills
    dy = dy + raceHeight + MARGIN_SKILL_TOP;
    let skills = drawRandomSkills(tokenId,canvasContext, dy, clan);

    //draw names
    const dy1 = dy + SKILL_SIZE + MARGIN_FIRST_NAME_TOP + firstNameHeight + MARGIN_SKILL_LEVEL_TOP;
    const dy2 = dy1 + MARGIN_SECOND_NAME_TOP + secondNameHeight;
    let nameAndNickName = drawAndGetRandomNames(canvasContext, dx, dy1, dy2, canvas.width);

    //draw stoke
    canvasContext.strokeStyle = 'grey';
    canvasContext.lineWidth = 2;
    canvasContext.strokeRect(0, 0, canvas.width, canvas.height);

    const metadata = generateMetadata(tokenId, nameAndNickName[0], nameAndNickName[1], skills, clan);
    const offChainData = generateOffChainData(clan);

    const data = [];
    data.push(canvas);
    data.push(metadata);
    data.push(offChainData);

    // return data;
    return data;
};

module.exports = {
    generateRandomCharacterImage,
    generateRandomWholeImage,
};
