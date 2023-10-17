const {generateAbilitiesData} = require('./abilities');

const generateOffChainData = (clan) => {
    const data = {abilities:[],bodyNum:0};
    data.abilities.push(...generateAbilitiesData(clan.abilities));
    data.bodyNum = clan.bodyNum;
    return data;
};

module.exports = {
    generateOffChainData
};

