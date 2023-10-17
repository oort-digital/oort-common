const getRandomValue = (values) => values[Math.floor(Math.random() * values.length)];

const getRandom = (value) => Math.floor(Math.random() * value);

const getBiggestElement = (
    param,
    parts,
) => Math.max(...parts.map((part) => part[param]));

const replaceTheHashCode = (imageUrl, code) => {
    imageUrl.replace('***', code);
}

const PADDING = 15;
const MARGIN_SKILL_LEFT = 5;
const MARGIN_SKILL_TOP = 10;
const MARGIN_SKILL_LEVEL_LEFT = 2;
const MARGIN_SKILL_LEVEL_TOP = 2;
const SKILL_LEVEL_HEIGHT = 10;
const SKILL_LEVEL_WIDTH = SKILL_LEVEL_HEIGHT * 1.2;
const MARGIN_FIRST_NAME_TOP = 20;
const MARGIN_SECOND_NAME_TOP = 0;
const MARGIN_SECOND_MARGIN_BOTTOM = 20;

const GEN_LEVER_NUMBER = 25;

const IMAGE_WIDTH = 480;

const RARITY_NUM = 5;

const ImageType = {
    PNG: "png", JPEG: "jpeg"
};

const N_A = "N/A";

function upperCaseFirst(string) {
    if (string.length <= 1) {
        return string[0].toUpperCase();
    }
    return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
    getRandomValue,
    getRandom,
    getBiggestElement,
    replaceTheHashCode,
    PADDING,
    MARGIN_SKILL_TOP: MARGIN_SKILL_TOP,
    MARGIN_FIRST_NAME_TOP: MARGIN_FIRST_NAME_TOP,
    MARGIN_SECOND_NAME_TOP: MARGIN_SECOND_NAME_TOP,
    MARGIN_SKILL_LEFT: MARGIN_SKILL_LEFT,
    IMAGE_WIDTH,
    MARGIN_SECOND_MARGIN_BOTTOM: MARGIN_SECOND_MARGIN_BOTTOM,
    MARGIN_SKILL_LEVEL_LEFT: MARGIN_SKILL_LEVEL_LEFT,
    SKILL_LEVEL_WIDTH,
    SKILL_LEVEL_HEIGHT,
    MARGIN_SKILL_LEVEL_TOP: MARGIN_SKILL_LEVEL_TOP,
    GEN_LEVER_NUMBER,
    RARITY_NUM,
    ImageType,
    N_A,
    upperCaseFirst
};

