const {getFacePartMetadataList} = require('./face-traits-minting-probabilities');

const generateMetadata = (tokenId, name, nick_name, skills, clan) => {
    const data = {
        'name': name,
        'external_url': 'https://oort.digital',
        'description': 'I am a ' + clan.clan.name + ' with ' + clan.gen.fullName + '.' + 'My name is ' + name + ' The ' + nick_name + ' from ' + clan.planet,
        'image': 'ipfs://***/' + tokenId,
        'attributes': [
            {
                'trait_type': 'Nick Name',
                'value': 'The ' + nick_name
            },
            {
                'trait_type': 'Gen',
                'value': clan.gen.fullName
            },
            {
                'trait_type': 'Clan',
                'value': clan.clan.name
            },
            {
                'trait_type': 'Color Hair',
                'value': clan.colorHair
            },
            {
                'trait_type': 'Gender',
                'value': clan.gender
            },
            {
                'trait_type': 'Race',
                'value': clan.race
            },
            {
                'trait_type': 'Planet',
                'value': clan.planet
            },
        ]
    };
    data.attributes.push(...skills);
    data.attributes.push(...getFacePartMetadataList());
    return data;
};

module.exports = {
    generateMetadata
};

