const generateBodyRandomly = (values,clan) => {
    const random = Math.floor(Math.random() * values.length);
    clan.bodyNum = random + 1;
    return values[random];
};

module.exports = {
    generateBodyRandomly
};
