const fs = require('fs');
const path = require('path');
const os = require('os');

const MAC_DOWNLOAD_METDATA_FILE_PATH = '../Downloads/heroes/';
const MAC_DOWNLOAD_IMAGE_FILE_PATH = '../Downloads/heroImage/';
const MAC_DOWNLOAD_OFFCHAIN_DATA_FILE_PATH = '../Downloads/heroImage/offChainData/';

const WINDOW__DOWNLOAD_METADATA_FILE_PATH = 'D:\\hero-workspace\\generate-space\\metadata\\';
const WINDOW_DOWNLOAD_IMAGE_FILE_PATH = 'D:\\hero-workspace\\generate-space\\images\\';
const WINDOW__DOWNLOAD_OFFCHAIN_DATA_FILE_PATH = 'D:\\hero-workspace\\generate-space\\offChainData\\';

const fileStyle = {
    "metadataStyle": "metadata",
    "imageStyle": "image",
    "offChainDataStyle": "offChainData",
};

const getSystemPlateFormPath = (path) => {
    if (os.type() === 'Windows_NT') {
        if (path === fileStyle.metadataStyle) {
            return WINDOW__DOWNLOAD_METADATA_FILE_PATH;
        } else if (path === fileStyle.imageStyle) {
            return WINDOW_DOWNLOAD_IMAGE_FILE_PATH;
        } else if (path === fileStyle.offChainDataStyle) {
            return WINDOW__DOWNLOAD_OFFCHAIN_DATA_FILE_PATH;
        }
    } else if (os.type() === 'Darwin' || os.type() === 'Linux') {
        if (path === fileStyle.metadataStyle) {
            return MAC_DOWNLOAD_METDATA_FILE_PATH;
        } else if (path === fileStyle.imageStyle) {
            return MAC_DOWNLOAD_IMAGE_FILE_PATH;
        } else if (path === fileStyle.offChainDataStyle) {
            return MAC_DOWNLOAD_OFFCHAIN_DATA_FILE_PATH;
        }
    } else {
        // do not support
    }
}

const writeJsonFile = (tokenId, jsonData, path) => {
    fs.writeFileSync(path + tokenId, JSON.stringify(jsonData), err => {
        if (err != null) {
            console.log(err);
            return;
        }
    })
}

const writeImageBuffer = (imageBuffer, imagePath) => {
    fs.writeFileSync(imagePath, imageBuffer, err => {
        if (err != null) {
            console.log(err);
            return;
        }
    });
}

// create the filePath
function mkdir(dir) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, err => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }
        })
    })
}

function getStat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                resolve(false);
            } else {
                resolve(stats);
            }
        })
    })
}

async function delDir(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file, index) => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                delDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
    }
}

async function dirExists(dir) {
    let isExists = await getStat(dir);
    if (isExists) {
        await delDir(dir);
    }
    //if the path exists and not file, return true
    if (isExists && isExists.isDirectory()) {
        return true;
    } else if (isExists) {
        return false;
    }
    //if the path is not exists get the previous path
    let tempDir = path.parse(dir).dir;

    let status = await dirExists(tempDir);
    let mkdirStatus;
    if (status) {
        mkdirStatus = await mkdir(dir);
    }
    return mkdirStatus;
}

/**
 * init all generate directories
 * @returns {Promise<(string|*)[]>}
 */
async function initGenerateDirs() {
    const metadataPath = getSystemPlateFormPath(fileStyle.metadataStyle);
    const imagePath = getSystemPlateFormPath(fileStyle.imageStyle);
    const offChainDataPath = getSystemPlateFormPath(fileStyle.offChainDataStyle);

    await dirExists(metadataPath);
    await dirExists(imagePath);
    await dirExists(offChainDataPath);

    return [imagePath, metadataPath, offChainDataPath];
}

async function getImageSavePath(tokenAddress,tokenId, imageType) {
    const imageDirPath = path.resolve("../image/"  + tokenAddress);
    if(!fs.existsSync(imageDirPath)){
      if(!await mkdir(imageDirPath)){
          return undefined;
      }
    }
    const imagePath = path.resolve("../image/" + tokenAddress + "/" + tokenId + `.${imageType}`);
    return imagePath;
}

function checkImageExist(imagePath) {
    return fs.existsSync(imagePath);
}

module.exports = {
    fileStyle,
    getSystemPlateFormPath,
    dirExists,
    writeJsonFile,
    writeImageBuffer,
    initGenerateDirs,
    getImageSavePath,
    checkImageExist
};
