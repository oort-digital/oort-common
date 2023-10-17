const {generateItemRandomly, initData} = require('./common/probability');

let facePartsMap = new Map();
let facePartMetadataList = [];

const beards = [
    {name: "", probability: 0},
    {name: "", probability: 0},
    {name: "Hipster", probability: 5},
    {name: "Scarred", probability: 5},
    {name: "Dutch", probability: 6},
    {name: "Side Braids", probability: 6},
    {name: "Viking Braid", probability: 7},
    {name: "Burns", probability: 7},
    {name: "Chops", probability: 8},
    {name: "Woodsman", probability: 8},
    {name: "Braided", probability: 10},
    {name: "Braclet", probability: 10},
    {name: "Shadow", probability: 14},
    {name: "Trimmed", probability: 14},
];

const noses = [
    {name: "Freckled", probability: 1},
    {name: "BruteForce", probability: 1},
    {name: "Eastwood", probability: 4},
    {name: "BloodHound", probability: 4},
    {name: "ColdBlooded", probability: 6},
    {name: "StoneCold", probability: 6},
    {name: "Brickwall", probability: 7},
    {name: "Button", probability: 7},
    {name: "Chiselled", probability: 8},
    {name: "Stitches", probability: 8},
    {name: "Baldur", probability: 10},
    {name: "Dewdrop", probability: 10},
    {name: "Rounded", probability: 14},
    {name: "Hero", probability: 14},
];

const heads = [
    {name: "", probability: 0},
    {name: "", probability: 0},
    {name: "The Swoosh", probability: 2.5},
    {name: "The Swoosh", probability: 2.5},
    {name: "Metal", probability: 8.5},
    {name: "Mushroom", probability: 8.5},
    {name: "Messenger", probability: 7},
    {name: "Haphazard", probability: 7},
    {name: "Swoop", probability: 8},
    {name: "Veteran", probability: 8},
    {name: "Elvis", probability: 10},
    {name: "Clean-Cut", probability: 10},
    {name: "City", probability: 14},
    {name: "Gifted", probability: 14},
];

const brows = [
    {name: "Prof", probability: 1},
    {name: "Elder", probability: 1},
    {name: "Wonderstruck", probability: 4},
    {name: "Electric", probability: 4},
    {name: "Furrowed", probability: 6},
    {name: "Cunning", probability: 6},
    {name: "Fleeced", probability: 7},
    {name: "Villainous", probability: 7},
    {name: "Snicked", probability: 8},
    {name: "Corporal", probability: 8},
    {name: "Floppy", probability: 10},
    {name: "Trepidatious", probability: 10},
    {name: "Hedges", probability: 14},
    {name: "Chic", probability: 14},
];

const ears = [
    {name: "Shanty", probability: 1},
    {name: "Shanty", probability: 1},
    {name: "Looped", probability: 4},
    {name: "Prowess", probability: 4},
    {name: "Curved", probability: 6},
    {name: "Flappers", probability: 6},
    {name: "Verdict", probability: 7},
    {name: "Eavesdrop", probability: 7},
    {name: "Tuned", probability: 8},
    {name: "Shrew", probability: 8},
    {name: "Scrappy", probability: 10},
    {name: "Feline", probability: 10},
    {name: "Tone Deaf", probability: 14},
    {name: "Knife Fight", probability: 14},
];

const moustaches = [
    {name: "", probability: 0},
    {name: "", probability: 0},
    {name: "Dense", probability: 2.5},
    {name: "Dense", probability: 2.5},
    {name: "Hunter", probability: 8.5},
    {name: "The Odin", probability: 8.5},
    {name: "Walrus", probability: 7},
    {name: "Handelbar", probability: 7},
    {name: "Fu Manhu", probability: 8},
    {name: "Chevron", probability: 8},
    {name: "Beady", probability: 10},
    {name: "Tyr", probability: 10},
    {name: "Twirler", probability: 14},
    {name: "Thor", probability: 14},
];

const eyes = [
    {name: "", probability: 0},
    {name: "", probability: 0},
    {name: "Rogue", probability: 2.5},
    {name: "Rogue", probability: 2.5},
    {name: "Iron Sights", probability: 8.5},
    {name: "Seer", probability: 8.5},
    {name: "Sleepless", probability: 7},
    {name: "Sunrise", probability: 7},
    {name: "Lucid", probability: 8},
    {name: "Ragnarok", probability: 8},
    {name: "Fury", probability: 10},
    {name: "Spicy", probability: 10},
    {name: "Dreamer", probability: 14},
    {name: "Survivor", probability: 14},
];

const faceParts = {
    beard: {name: "Beard", items: beards},
    nose: {name: "Nose", items: noses},
    head: {name: "Head", items: heads},
    brow: {name: "Brow", items: brows},
    ears: {name: "Ears", items: ears},
    moustache: {name: "Moustache", items: moustaches},
    eyes: {name: "Eyes", items: eyes}
};

const initFacePartsData = (totalNum) => {
    //add probability
    initData(totalNum, faceParts, facePartsMap);
};

const generateFacePartRandomly = (values, facePart) => {
    let facePartIndex = generateItemRandomly(facePart, facePartsMap);

    const metadata = {
        "trait_type": facePart.name,
        "value": facePart.items[facePartIndex].name
    };
    facePartMetadataList.push(metadata);

    //return body part asset path
    const image = facePart.items[facePartIndex].name + '.svg';
    return image;
};


const getFacePartMetadataList = () => {
    const list = facePartMetadataList;
    facePartMetadataList = [];
    return list;
};


module.exports = {
    initFacePartsData,
    generateFacePartRandomly,
    getFacePartMetadataList,
    generateItemRandomly,
    faceParts,
    initData
};
