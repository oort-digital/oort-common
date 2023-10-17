const {Image} = require('canvas');
const {PADDING, MARGIN_SKILL_LEFT, getRandom} = require('./common/utils');
const {initData, generateItemRandomly} = require('./common/probability');
const {getSkillAsset,getClanAsset} = require("./assets");


const SKILL_SIZE = 60;
const EMPTY = "EMPTY";
let skillsMap = new Map();

const dualWieldConditions = ["Knives", "Swords", "Ranged", "Blunt&Slash", "Wands"];
const skills = {
    protection: {
        name: "Protection",
        items: [
            {name: "Light Armor", probability: 65, asset: 'light_armor.png'},
            {name: "Heavy Armor", probability: 35, asset: 'heavy_armor.png'}
        ]
    },
    cleave: {
        name: "Cleave",
        items: [
            {name: "Blunt&Slash", probability: 40, asset: 'blunt_slash.png'},
            {name: "Pole Arms", probability: 20, asset: 'pole_arms.png'},
            {name: EMPTY, probability: 40},
        ]
    },
    blades: {
        name: "Blades",
        items: [
            {name: "Knives", probability: 60, asset: 'knives.png'},
            {name: "Swords", probability: 30, asset: 'swords.png'},
            {name: EMPTY, probability: 10},
        ]
    },
    magic: {
        name: "Magic",
        items: [
            {name: "Wands", probability: 10, asset: 'wands.png'},
            {name: "Staves", probability: 5, asset: 'staves.png'},
            {name: EMPTY, probability: 85},
        ]
    },
    distance: {
        name: "Distance",
        items: [
            {name: "Longbow", probability: 20, asset: 'longbow.png'},
            {name: "Ranged", probability: 10, asset: 'ranged.png'},
            {name: EMPTY, probability: 70},
        ]
    },
    unarmed: {
        name: "Unarmed",
        items: [
            {name: "Close Quarter", probability: 100, asset: 'close_quarter.png'},
        ]
    }
};

const specialSkills = {
    //Note:if we add new skill in Agility,there will be a big issue!
    agility: {
        name: "Agility",
        items: [
            {name: "Dual Wield", probability: 5, asset: 'dual_wield.png'},
            {name: EMPTY, probability: 95},
        ]
    }
};

let dualWieldTotal = 0;
let dualWieldSkip = 0;
let dualWieldInTokenIds = [];

const initSkillsData = (totalNum) => {
    initData(totalNum, skills, skillsMap);
    dualWieldTotal = Math.round(totalNum * 0.05);
    dualWieldSkip = totalNum / 2 / dualWieldTotal;
};

const generateDualWieldSuccess = () => {
    return dualWieldInTokenIds.length === dualWieldTotal;
};

const generateDualWieldInTokenIds = () => {
    return dualWieldInTokenIds;
};

const drawRandomSkills = (tokenId, canvasContext, dy, clan) => {
    const skillList = generateRandomSkills(tokenId, clan);
    let count = 0;
    skillList[0].forEach((path, index) => {
        if (path) {
            const img = new Image();
            img.onload = () => {
                const dx = PADDING + (MARGIN_SKILL_LEFT + SKILL_SIZE) * count++;
                canvasContext.drawImage(img, dx, dy, SKILL_SIZE, SKILL_SIZE);
            };
            img.src = path;
        }
    });

    return skillList[1];
};

const drawSkills = (canvasContext, dy, skillItems,hairColor) => {
    const skillAssets = [];
    //add hairColor icon
    skillAssets.push(getClanAsset(hairColor));

    skillItems.forEach((sillItem) => {
        for (let key in skills) {
            skills[key].items.forEach((item) => {
                if (item.name.toLowerCase() === sillItem.name.toLowerCase()) {
                    const image = getSkillAsset(skills[key].name.toLowerCase(), item.asset);
                    skillAssets.push(image);
                }
            });
        }
    });

    let count = 0;
    skillAssets.forEach((path, index) => {
        if (path) {
            const img = new Image();
            img.onload = () => {
                const dx = PADDING + (MARGIN_SKILL_LEFT + SKILL_SIZE) * count++;
                canvasContext.drawImage(img, dx, dy, SKILL_SIZE, SKILL_SIZE);
            };
            img.src = path;
        }
    });
};

const generateSkillRandomly = (skill) => {
    let index = generateItemRandomly(skill, skillsMap);

    if (skill.items[index].name === EMPTY) {
        return [];
    }

    /**
     * return array:
     * 1.skill asset path
     * 2.skill metadata
     */
    const assetPath = getSkillAsset(skill.name, skill.items[index].asset);
    const metadata = {
        "trait_type": skill.name,
        "value": skill.items[index].name
    };
    return [assetPath, metadata, skill.items[index].name];
};

function isDualWieldAvailable(dualWieldCheckSkills) {
    const result = dualWieldCheckSkills.filter(item => {
        return dualWieldConditions.indexOf(item) > -1;
    });
    return !!result && result.length > 0;
}

function generateDualWield(tokenId, dualWieldCheckSkills, skillAssets, skillMetadataList) {
    if (tokenId % dualWieldSkip === 0 && dualWieldInTokenIds.length < dualWieldTotal &&
        isDualWieldAvailable(dualWieldCheckSkills)) {
        const asset = getSkillAsset(specialSkills.agility.name, specialSkills.agility.items[0].asset);
        skillAssets.push(asset);
        skillMetadataList.push({
            "trait_type": specialSkills.agility.name,
            "value": specialSkills.agility.items[0].name
        });
        dualWieldInTokenIds.push(tokenId);
    }
}

const generateRandomSkills = (tokenId, clan) => {
    const skillAssets = [];
    const skillMetadataList = [];
    const dualWieldCheckSkills = [];

    // skillAssets.push(`${clan.dirPath}/clan/${clan.clan.image}`);
    skillAssets.push(getClanAsset(clan.hairColor));
    for (let key in skills) {
        const skill = skills[key];
        const array = generateSkillRandomly(skill);
        if (array && array.length === 3) {
            skillAssets.push(array[0]);
            skillMetadataList.push(array[1]);
            dualWieldCheckSkills.push(array[2]);
        }
    }

    generateDualWield(tokenId, dualWieldCheckSkills, skillAssets, skillMetadataList);

    return [skillAssets, skillMetadataList];
};

module.exports = {
    generateRandomSkills,
    SKILL_SIZE,
    drawRandomSkills,
    drawSkills,
    initSkillsData,
    generateDualWieldSuccess,
    generateDualWieldInTokenIds
};
