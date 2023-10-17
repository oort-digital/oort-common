const fs = require('fs');
const path = require('path');
const {createCanvas, loadImage, Image} = require('canvas');
const {
    getBiggestElement, PADDING, MARGIN_SKILL_TOP, MARGIN_FIRST_NAME_TOP,
    MARGIN_SECOND_NAME_TOP, MARGIN_SECOND_MARGIN_BOTTOM, MARGIN_SKILL_LEVEL_TOP, SKILL_LEVEL_HEIGHT
} = require('./common/utils');

const {getFirstNameHeight, getSecondNameHeight, drawAndGetNames} = require('./name');
const {SKILL_SIZE, drawSkills} = require('./skills');
const {colors, hairColors} = require('./hairColor');
const {drawGen} = require('./gen');
const {
    getBackgroundAsset,
    getBodyAsset,
    getBeltAsset,
    getPantsAsset,
    getBeardAsset,
    getBrowAsset,
    getEarsAsset,
    getEyesAsset,
    getHeadAsset,
    getMoustacheAsset,
    getNoseAsset,
    getLogoAsset
} = require('./assets');

const {
    PIONEER_BUILDER,
} = require('./clans');
const { log } = require('console');

const drawCharacterPart = (canvasContext, part, x = 0, z = 0) => {
    canvasContext.drawImage(part, x, z, part.width, part.height);
};

const drawBackground = (canvasContext, dx, dy, width, height,clan,customBrand) => {
    const img = new Image();
    img.onload = () => {
        canvasContext.drawImage(img, dx, dy, width, height);
    };
    img.src = getBackgroundAsset(clan,customBrand);
};

const replaceColor = (partFileContent, targetColor) => partFileContent
    .replace(new RegExp(hairColors[colors.default].main, 'gi'), hairColors[targetColor].main)
    .replace(new RegExp(hairColors[colors.default].lower, 'i'), hairColors[targetColor].lower)
    .replace(new RegExp(hairColors[colors.default].upper, 'i'), hairColors[targetColor].upper);

const replaceBrandBodyColor = (partFileContent,targetColor) => partFileContent
    .replace(new RegExp('#00000000', 'gi'), targetColor);

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

const loadCharacterPart = async (fullPartFilePath, color = null,customBrand=false,brandColor=null) => {
    let partFile;
    try {
        let rawPartFile = fs.readFileSync(path.resolve(fullPartFilePath), 'utf8');

        if (color && color !== colors.default) {
     
            if(customBrand){
                rawPartFile = replaceBrandBodyColor(rawPartFile, brandColor);
            }else{
                rawPartFile = replaceColor(rawPartFile, color);
            }
        }

        partFile = await loadImage(Buffer.from(rawPartFile));
    } catch (e) {
        console.log(e)
    }

    if (!partFile) {
        console.log('part load failed: ', fullPartFilePath);
    }

    return partFile;
};

const loadCustomImage = (path) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
        const width = img.width;
        const height = img.height;

        const result = {
            width: width,
            height: height,
            image: img
        };
        resolve(result)
    };
    img.src = path;
    img.onerror = function (ev) {
        reject(new Error(`Image load error`))
    }
});

const generateCharacterBodyCanvas = async (clan,bodyNum, beltNum,hairColor,customBrand,brandColor) => {
    let color;
    if(customBrand){
        color = brandColor;
    }else{
        color = hairColor;
    }

    return drawCharacterParts(await Promise.all([
        loadCharacterPart(getBodyAsset(bodyNum,clan,customBrand),color,customBrand,brandColor),
        loadCharacterPart(getPantsAsset(beltNum)),
        loadCharacterPart(getBeltAsset(beltNum))
    ]));
};

const generateCharacterHeadCanvas = async (earsNum, headNum, eyesNum, beardNum, moustacheNum, noseNum, browNum,hairColor) => {
    return drawCharacterParts(await Promise.all([
        loadCharacterPart(getEarsAsset(earsNum)),
        loadCharacterPart(getHeadAsset(headNum), hairColor),
        loadCharacterPart(getEyesAsset(eyesNum)),
        loadCharacterPart(getBeardAsset(beardNum), hairColor),
        loadCharacterPart(getMoustacheAsset(moustacheNum), hairColor),
        loadCharacterPart(getNoseAsset(noseNum)),
        loadCharacterPart(getBrowAsset(browNum), hairColor),
    ]));
};

const generateCharacterImage = async (hero) => {
    const bodyCanvas = await generateCharacterBodyCanvas(hero.clan,hero.bodyParts.body,1,hero.hairColor,hero.customBrand,hero.brandColor);
    const headCanvas = await generateCharacterHeadCanvas(hero.bodyParts.ears,hero.bodyParts.head,hero.bodyParts.eyes,hero.bodyParts.beard,
        hero.bodyParts.moustache,hero.bodyParts.nose,hero.bodyParts.brow,hero.hairColor);

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

    //draw logo
    if(hero.customBrand){
        const logoPath = getLogoAsset(hero.clan);
        const result = await loadCustomImage(logoPath);
        let proportion = 8;
        //as some logos provided by brands are not good,there some gaps in logo,
        //so we have to larger these logo when generate heroes
        if(hero.smallLogo){
            proportion = 4;
        }
        const dw = characterCanvas.width / proportion;
        const dh = result.height / result.width * dw;
        const dx = (characterCanvas.width - dw) / 2;
        const dy = (characterCanvas.height - dh) / 1.6;
    
        characterCanvasContext.drawImage(result.image, dx, dy, dw, dh);
    }

    drawCharacterPart(
        characterCanvasContext,
        headCanvas,
        characterCanvas.width / 2 - headCanvas.width / 2,
        10
    );

    return characterCanvas;
};

const generateSpecificWholeImage = async (hero) => {
    // hero = {skills:["Light Armor","Blunt&Slash"],firstName:"111",nickName:"222",hairColor:"grey",clan:"PioneerBuilder"};
    const characterCanvas = await generateCharacterImage(hero);
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
    drawBackground(canvasContext, dx, dy, raceWidth, raceHeight,hero.clan,hero.customBrand);
    //draw race
    canvasContext.drawImage(characterCanvas, characterCanvas.width * 0.1, characterCanvas.height * 0.08, raceWidth, raceHeight, dx, dy, raceWidth, raceHeight);
    //draw gen
    drawGen(canvasContext, hero.gen, canvas.width);

    //draw skills
    dy = dy + raceHeight + MARGIN_SKILL_TOP;
    drawSkills(canvasContext, dy,hero.skills,hero.hairColor);

    //draw names
    const dy1 = dy + SKILL_SIZE + MARGIN_FIRST_NAME_TOP + firstNameHeight + MARGIN_SKILL_LEVEL_TOP;
    const dy2 = dy1 + MARGIN_SECOND_NAME_TOP + secondNameHeight;
    drawAndGetNames(canvasContext, dx, dy1, dy2, canvas.width,hero.name,hero.nickName);

    //draw stoke
    canvasContext.strokeStyle = 'grey';
    canvasContext.lineWidth = 2;
    canvasContext.strokeRect(0, 0, canvas.width, canvas.height);

    // return data;
    return canvas;
};

module.exports = {
    generateSpecificWholeImage
};
