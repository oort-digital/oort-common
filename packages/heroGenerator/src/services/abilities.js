const randomAbilitiesData = (value,total) => Math.floor(Math.random() * (total - value));

/**
 * #taskId=251
 * @param abilities
 * @param min
 * @returns {[{value: *, trait_type: string}, {value: *, trait_type: string}, {value: *, trait_type: string}, {value: number, trait_type: string}]}
 */
const generateAbilitiesData = (abilities) => {
  let strength = abilities.min + randomAbilitiesData(abilities.min * 4,abilities.total );
  let dexterity = abilities.min + randomAbilitiesData(abilities.min * 3 + strength,abilities.total);
  let intelligence = abilities.min + randomAbilitiesData(abilities.min * 2 + strength + dexterity,abilities.total);
  let endurance = abilities.total - strength - dexterity - intelligence;
  const list = [
    {
      'trait_type': 'Initial Strength',
      'value': strength
    },
    {
      'trait_type': 'Initial Dexterity',
      'value': dexterity
    },
    {
      'trait_type': 'Initial Intelligence',
      'value': intelligence
    },
    {
      'trait_type': 'Initial Endurance',
      'value': endurance
    },
  ];

  return list;
};

module.exports = {
  generateAbilitiesData
};
