const {getRandom} = require("./common/utils");
const {upperCaseFirst} = require("./common/utils");

const colors = {
    default: 'default',
    black: 'black',
    brown: 'brown',
    hazel: 'hazel',
    red: 'red',
    orange: 'orange',
    ginger: 'ginger',
    yellow: 'yellow',
    grey: 'grey'
};

const hairColors = {
    [colors.default]: {
        main: '#634C54',
        upper: '#896E6B',
        lower: '#4b3446',
        pr:0
    },
    [colors.black]: {
        main: '#634C54',
        upper: '#896E6B',
        lower: '#4b3446',
        pr: 28
    },
    [colors.brown]: {
        main: '#AA665A',
        upper: '#C89A77',
        lower: '#81424B',
        pr: 22
    },
    [colors.hazel]: {
        main: '#DBC9A0',
        upper: '#896E6B',
        lower: '#81535C',
        pr: 17
    },
    [colors.red]: {
        main: '#E94D5B',
        upper: '#F4A079',
        lower: '#A72145',
        pr: 13
    },
    [colors.orange]: {
        main: '#FF7D63',
        upper: '#FFBB81',
        lower: '#CB3C50',
        pr: 10
    },
    [colors.ginger]: {
        main: '#CC8C64',
        upper: '#DFB67B',
        lower: '#A25A51',
        pr: 6
    },
    [colors.yellow]: {
        main: '#FFC57B',
        upper: '#FFEE9B',
        lower: '#DD765F',
        pr: 3
    },
    [colors.grey]: {
        main: '#d9ceb9',
        upper: '#f8f3df',
        lower: '#a38a84',
        pr: 1
    }
};

const randomHairColor = (clan)=>{
    const pr = getRandom(100);
    let start = 0;
    for (let key in colors) {
        let end = start + hairColors[colors[key]].pr - 1;
        if (pr >= start && pr <= end) {
            clan.hairColor = colors[key];
            clan.colorHair = upperCaseFirst([colors[key]]);
            break;
        }
        start = end + 1;
    }
};

module.exports = {
    colors,
    hairColors,
    randomHairColor
};
