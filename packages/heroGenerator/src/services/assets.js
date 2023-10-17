//todo:Must Separator for distinguishing Linux and windows!!!
const PROJECT_ROOT_DIR = "./assets";
const HUMAN_MALE_DIR = PROJECT_ROOT_DIR + "/human/male";
const BACKGROUND_DIR = HUMAN_MALE_DIR + "/bg";
const BODY_DIR = HUMAN_MALE_DIR + "/body";
const BODY_BODY_DIR = BODY_DIR + "/body";
const PANTS_DIR = BODY_DIR + "/pants";
const BELT_DIR = BODY_DIR + "/belt";
const CLAN_DIR = HUMAN_MALE_DIR + "/clan";
const FACE_DIR = HUMAN_MALE_DIR + "/face";
const BEARD_DIR = FACE_DIR + "/beard";
const BROW_DIR = FACE_DIR + "/brow";
const EARS_DIR = FACE_DIR + "/ears";
const EYES_DIR = FACE_DIR + "/eyes";
const HEAD_DIR = FACE_DIR + "/head";
const MOUSTACHE_DIR = FACE_DIR + "/moustache";
const NOSE_DIR = FACE_DIR + "/nose";
const LOGO_DIR = PROJECT_ROOT_DIR + "/logo";
const IMAGE_SUFFIX = ".svg";


const BEARDS = ["Woodsman", "Braided", "Hipster", "Viking Braid", "Shadow", "Scarred", "Burns", "Braclet", "Side Braids", "Trimmed", "Dutch", "Chops"];
const NOSES = ["ColdBlooded", "Brickwall", "Dewdrop", "StoneCold", "BloodHound", "Eastwood", "Stitches", "Chiselled", "Freckled", "Rounded", "Button", "BruteForce", "Hero", "Baldur"];
const HEADS = ["Veteran", "Elvis", "The Swoosh", "Messenger", "Clean-Cut", "Mushroom", "Haphazard", "Gifted", "Metal", "City", "Swoop"];
const BROWS = ["Prof", "Floppy", "Elder", "Snicked", "Cunning", "Wonderstruck", "Hedges", "Villainous", "Fleeced", "Corporal", "Trepidatious", "Chic", "Electric", "Furrowed"];
const EARS = ["Tone Deaf", "Eavesdrop", "Verdict", "Tuned", "Feline", "Knife Fight", "Shrew", "Curved", "Scrappy", "Flappers", "Shanty", "Looped", "Prowess"];
const MOUSTACHE = ["Beady", "Thor", "Fu Manhu", "Tyr", "The Odin", "Twirler", "Chevron", "Handelbar", "Hunter", "Dense", "Walrus"];
const EYES = ["Spicy", "Dreamer", "Survivor", "Sleepless", "Sunrise", "Lucid", "Iron Sights", "Seer", "Ragnarok", "Fury", "Rogue"];

const SKILL_DIR_PATH = PROJECT_ROOT_DIR + '/skill';

function getBackgroundAsset(clan,customBrand) {
    if(customBrand){
        return BACKGROUND_DIR + "/NoClan" + IMAGE_SUFFIX;
    }

    return BACKGROUND_DIR + "/" + clan + IMAGE_SUFFIX;
}

function getBodyAsset(num, clan,customBrand) {
    if(customBrand){
        return BODY_BODY_DIR + "/custom_brand" + IMAGE_SUFFIX;
    }

    return BODY_BODY_DIR + "/" + clan + "/" + +num + IMAGE_SUFFIX;
}

function getLogoAsset(clan) {
    return LOGO_DIR + "/" + clan.toLowerCase() + ".png";
}

function getBeltAsset(num) {
    return BELT_DIR + "/" + num + IMAGE_SUFFIX;
}

function getPantsAsset(num) {
    return PANTS_DIR + "/" + num + IMAGE_SUFFIX;
}

function getBeardAsset(num) {
    return BEARD_DIR + "/" + BEARDS[num - 1] + IMAGE_SUFFIX;
}

function getBrowAsset(num) {
    return BROW_DIR + "/" + BROWS[num - 1] + IMAGE_SUFFIX;
}

function getEarsAsset(num) {
    return EARS_DIR + "/" + EARS[num - 1] + IMAGE_SUFFIX;
}

function getEyesAsset(num) {
    return EYES_DIR + "/" + EYES[num - 1] + IMAGE_SUFFIX;
}

function getHeadAsset(num) {
    return HEAD_DIR + "/" + HEADS[num - 1] + IMAGE_SUFFIX;
}

function getMoustacheAsset(num) {
    return MOUSTACHE_DIR + "/" + MOUSTACHE[num - 1] + IMAGE_SUFFIX;
}

function getNoseAsset(num) {
    return NOSE_DIR + "/" + NOSES[num - 1] + IMAGE_SUFFIX;
}

function getSkillAsset(skillType, skill) {
    return `${SKILL_DIR_PATH}/${skillType}/${skill}`
}

function getClanAsset(hairColor) {
    return `${CLAN_DIR}/${hairColor}.png`
}

module.exports = {
    getSkillAsset,
    getBackgroundAsset,
    getBodyAsset,
    getPantsAsset,
    getBeltAsset,
    getBeardAsset,
    getBrowAsset,
    getEarsAsset,
    getEyesAsset,
    getHeadAsset,
    getMoustacheAsset,
    getNoseAsset,
    getClanAsset,
    getLogoAsset
};
