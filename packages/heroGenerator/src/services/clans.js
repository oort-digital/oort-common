const {N_A} = require("./common/utils.js");

//Clans
const PIONEER_BUILDER = "PioneerBuilder";
const PIONEER = "Pioneer";
const SABLIER = "Sablier";
const OCEAN_PROTOCOL = "OceanProtocol";
const PIONEER_FARMER = "PioneerFarmer";
const ENVELOP = "Envelop";
const PLACE_WAR = "PlaceWar";
const NO_CLAN = "NoClan";

const handleNoClan = (hero)=>{
    if(hero.clan === N_A){
        hero.clan = NO_CLAN;
    }
};

const clans = {
    humanMale: {
        PioneerBuilder: {
            clan: {
                name: 'PioneerBuilder',
            },
            gen: {
                shortName: "Gen0",
                fullName: "Gen0 Golden"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "pioneer_builder.svg",
            body: PIONEER_BUILDER,
            abilities: {
                total: 25,
                min: 4
            },
            brand: './assets/brand/silver.png'
        },
        Pioneer: {
            clan: {
                name: 'Pioneer',
            },
            gen: {
                shortName: "Gen1",
                fullName: "Gen1"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "pioneer.svg",
            body: PIONEER,
            abilities: {
                total: 20,
                min: 3
            }
        },
        OceanProtocol: {
            clan: {
                name: 'OceanProtocol',
            },
            gen: {
                shortName: "Gen1",
                fullName: "Gen1"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "ocean_protocol.svg",
            body: OCEAN_PROTOCOL,
            abilities: {
                total: 20,
                min: 3
            }
        },
        Sablier: {
            clan: {
                name: 'Sablier',
            },
            gen: {
                shortName: "Gen1",
                fullName: "Gen1"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "sablier.svg",
            body: SABLIER,
            abilities: {
                total: 20,
                min: 3
            }
        },
        PioneerFarmer: {
            clan: {
                name: 'PioneerFarmer',
            },
            gen: {
                shortName: "Gen0",
                fullName: "Gen0 Sliver"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "pioneer_farmer.svg",
            body:PIONEER_FARMER,
            abilities: {
                total: 25,
                min: 4
            },
            brand: './assets/brand/silver.png'
        },
        Envelop: {
            clan: {
                name: 'Envelop',
            },
            gen: {
                shortName: "Gen1",
                fullName: "Gen1"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "envelop.svg",
            body: ENVELOP,
            abilities: {
                total: 20,
                min: 3
            }
        },
        PlaceWar: {
            clan: {
                name: 'PlaceWar',
            },
            gen: {
                shortName: "Gen1",
                fullName: "Gen1"
            },
            race: 'Human',
            gender: 'Male',
            planet: 'Earth',
            dirPath: "./assets/human/male",
            bg: "placewar.svg",
            body: PLACE_WAR,
            abilities: {
                total: 20,
                min: 3
            }
        },
    },
    humanFemale: {},
    orc: {
        OrcGen0: {
            clan: {
                name: 'OrcGen0',
                image: 'orc_gen0.png'
            },
            gen: 'Gen0',
            race: 'Orc',
            gender: 'Male',
            planet: 'Mars',
            dirPath: "./assets/orc/male",
            bg: "orc_gen0.svg",
            body: "orc_gen0",
            abilities: {
                total: 25,
                min: 4
            }
        }
    },
};

module.exports = {
    clans,
    PIONEER_BUILDER,
    PIONEER,
    SABLIER,
    OCEAN_PROTOCOL,
    PIONEER_FARMER,
    ENVELOP,
    PLACE_WAR,
    handleNoClan
};
