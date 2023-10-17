const express = require('express');
const bodyParser = require('body-parser');
const {createCanvas} = require('canvas');
const {generateRandomWholeImage} = require('./services/generateRandomHero');
const {generateSpecificWholeImage} = require('./services/generateSpecificHero');
const {IMAGE_WIDTH,ImageType} = require('./services/common/utils');
const {writeJsonFile, writeImageBuffer, initGenerateDirs,getImageSavePath,checkImageExist} = require('./services/common/fileUtils');
const {initFacePartsData} = require('./services/face-traits-minting-probabilities');
const {initSkillsData, generateDualWieldSuccess,generateDualWieldInTokenIds} = require('./services/skills');
const {handleNoClan} = require("./services/clans");

const appPort = process.env.PORT || 3000;

const ejs = require('ejs');
const app = express();

//create the server
//setting receive all type request data
app.use(bodyParser.json());
app.use('public', express.static('public'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.get('/heroList.html', async (req, res) => {
    res.sendFile('./html/heroList.html', {root: __dirname});
});

app.get('/downloadFile', async function (req, res) {
    let response = {
        'first_number': parseInt(req.query.first_number),
        'second_number': parseInt(req.query.second_number),
    };

    //init directory
    const dirs = await initGenerateDirs();
    //init data
    const totalNum = response.second_number - response.first_number + 1;
    initFacePartsData(totalNum);
    initSkillsData(totalNum);


    for (let i = response.first_number; i <= response.second_number; i++) {
        const tokenId = parseInt(i).toString();
        const array = await generateRandomWholeImage(tokenId);

        if (array && array.length === 3) {
            const imagePath  = dirs[0] + tokenId + '.' + ImageType.PNG;
            generateImage(array[0], imagePath,ImageType.JPEG);
            generateJsons(tokenId, array[1], array[2], dirs[1], dirs[2]);
        }
    }

    let dualWieldResult = '';
    if (generateDualWieldSuccess()) {
        dualWieldResult = `<p><span style="color: green">Generate DualWield Successfully,with tokenIds=${generateDualWieldInTokenIds()}</span></p>`;
    } else {
        dualWieldResult = `<p><span style="color: red">Generate DualWield Failed,with tokenIds=${generateDualWieldInTokenIds()}</span><p>`;
    }

    const result = 'Export data successfully！' + '</br>' + 'if you want see json document please go to the catalogue ===>  ' + dirs[1] + '</br>'
        + 'if you want see image document please go to the catalogue ===> ' + dirs[0] + dualWieldResult;
    res.send(result);

});

/**
 * generate hero image
 * @param characterImage
 * @param tokenId
 * @param imagePath
 */
function generateImage(characterImage, imagePath,imageType) {
    //compress image
    const width = IMAGE_WIDTH;
    const height = characterImage.height * (width / characterImage.width);
    const canvas = createCanvas(width, height);
    const context2D = canvas.getContext('2d');
    context2D.drawImage(characterImage, 0, 0, characterImage.width, characterImage.height, 0, 0, width, height);

    // create image buffer
    const imageBuffer = canvas.toBuffer(`image/${imageType}`, {
        compressionLevel: 6,
        filters: canvas.PNG_FILTER_NONE,
    });

    writeImageBuffer(imageBuffer, imagePath);
}

/**
 * generate all json files
 * @param tokenId
 * @param metadata
 * @param offChainData
 * @param metadataPath
 * @param offChainDataPath
 */
function generateJsons(tokenId, metadata, offChainData, metadataPath, offChainDataPath) {
    writeJsonFile(tokenId, metadata, metadataPath);
    writeJsonFile(tokenId, offChainData, offChainDataPath);
}


app.post('/generateHeroImage', async function (req, res) {
    try{
        let hero = req.body.hero;
        // console.log("hero",hero);
       // let hero = "{\n" +
       //     "  \"tokenId\": 100000010,\n" +
       //     "  \"bodyParts\": {\n" +
       //     "    \"beard\": 12,\n" +
       //     "    \"body\": 2,\n" +
       //     "    \"brow\": 12,\n" +
       //     "    \"ears\": 3,\n" +
       //     "    \"eyes\": 8,\n" +
       //     "    \"head\": 8,\n" +
       //     "    \"moustache\": 2,\n" +
       //     "    \"nose\": 3\n" +
       //     "  },\n" +
       //     "  \"clan\": \"NoClan\",\n" +
       //     "  \"dexterity\": 9,\n" +
       //     "  \"endurance\": 5,\n" +
       //     "  \"gen\": \"NoClan\",\n" +
       //     "  \"gender\": \"Male\",\n" +
       //     "  \"hairColor\": \"brown\",\n" +
       //     "  \"id\": 1,\n" +
       //     "  \"intelligence\": 7,\n" +
       //     "  \"name\": \"Christopher\",\n" +
       //     "  \"nickName\": \"The Impudent Wolf\",\n" +
       //     "  \"planet\": \"Earth\",\n" +
       //     "  \"race\": \"Human\",\n" +
       //     "  \"skills\": [\n" +
       //     "    {\n" +
       //     "      \"id\": 2,\n" +
       //     "      \"name\": \"Heavy Armor\",\n" +
       //     "      \"type\": \"Protection\"\n" +
       //     "    },\n" +
       //     "    {\n" +
       //     "      \"id\": 21,\n" +
       //     "      \"name\": \"Knives\",\n" +
       //     "      \"type\": \"Blades\"\n" +
       //     "    }\n" +
       //     "  ],\n" +
       //     "  \"strength\": 7\n" +
       //     "}\n";
       hero = JSON.parse(hero);

        const imagePath = await getImageSavePath(hero.tokenAddress,hero.tokenId,ImageType.JPEG);
        if(!imagePath){
            res.send(200,{resultValue:null,resultCode:10002,resultMessage:"create image save dir failed"});
            return;
        }

        if(checkImageExist(imagePath)){
            res.send(200,{resultValue:imagePath,resultCode:10000,resultMessage:"Success"});
            return;
        }

        handleNoClan(hero);
        //test
        // hero.clan = "NoClan";
        const characterImage = await generateSpecificWholeImage(hero);
        generateImage(characterImage,imagePath,ImageType.JPEG);
        res.status(200).send({resultValue:imagePath,resultCode:10000,resultMessage:"Success"});
    }catch (e) {
        res.status(200).send({resultValue:null,resultCode:10001,resultMessage:e.message});
    }
});

app.listen(appPort, () => {
    console.log(`service started at port: ${appPort}`);
});
