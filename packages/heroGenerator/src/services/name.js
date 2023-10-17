const { getRandomValue } = require('./common/utils');
const { registerFont } = require('canvas');

const firstNames = 
  ['Sugbu', 'Yambul', 'Zalthu', 'Snaglak', 'Noogugh', 'Varbu', 'Podagog', 'Cukgilug', 'Xarpug', 'Jughragh', 'Murbol', 'Bashuk', 'Ugor',
    'Mog', 'Ghak', 'Murob', 'Ulumpha', 'Ushug', 'Sharn', 'Dura', 'Raghat', 'Brokil', 'Pargu', 'Hibub', 'Jughog', 'Nurghed', 'Ditgurat', 'Durz', 'Kurdan', 'Bugdul',
    'Sharamph', 'Homraz', 'Sharn', 'Murob', 'Oghash', 'Shagdub', 'Durgat', 'Atub', 'Bolar', 'Snak', 'Numhug', 'Sulmthu', 'Yakha', 'Urgran', 'Vrothu', 'Sakgu', 'Sahgigoth',
    'Matuk', 'Rodagog', 'Ertguth', 'Sharn', 'Orbul', 'Durgat', 'Gashnakh', 'Kharzug', 'Arob', 'Dura', 'Garakh', 'Shufharz', 'Gul', 'Wegub', 'Eichelberbog', 'Wurgoth', 'Durzol',
    'Wudhagh', 'Digdug', 'Zabub', 'Omogulg', 'Mugdul', 'Jokgagu', 'Borgakh', 'Bulfim', 'Arob', 'Durz', 'Bulfim', 'Snak', 'Atub', 'Bagrak', 'Snak', 'Yazgash', 'Bidgug', 'Slaugh',
    'Farod', 'Hagu', 'Zunuguk', 'Bogrum', 'Oogorim', 'Unrugagh', 'Onugug', 'Omugug', 'Batul', 'Agrob', 'Dura', 'Gluronk', 'Rogbut', 'Durgat', 'Mog', 'Shadbak', 'Bula', 'Durga'];

const secondNames = 
  ['Wild', 'Quick', 'Dexterous', 'Brave', 'Cold', 'Quiet', 'Terrible', 'Sneaky', 'Wood', 'Metallic', 'Impudent', 'Arrogant', 'Tall', 'Fat', 'Thin', 'Old', 'Young',
    'Fatty', 'Slippery', 'Vigilant', 'Stupid', 'Evil', 'Wet', 'Blind', 'Deaf', 'lame', 'White', 'Black', 'Green', 'Blue', 'Red', 'Strong', 'Weak', 'Dead', 'Straight',
    'Crooked', 'Round', 'Solid', 'Soft', 'Snotty', 'Tearful', 'Deadly', 'Famous', 'Scarred', 'Fierce', 'Insane', 'Horny', 'Macho', 'Ruthless', 'Huge', 'Angry', 'Clumsy',
    'Defeated', 'Embarrassed', 'Fierce', 'Grumpy', 'Helpless', 'Itchy', 'Jealous', 'Lazy', 'Mysterious', 'Nervous', 'Obnoxious', 'Panicky', 'Pitiful', 'Repulsive', 'Scary',
    'Uptight', 'Worried', 'Crashing', 'Deafening', 'Faint', 'Harsh', 'Hissing', 'Howling', 'Loud', 'Noisy', 'Quiet', 'Raspy', 'Screeching', 'Shrilling', 'Squeaking', 'Thundering',
    'Wailing', 'Whining', 'Whispering'];

const thirdNames = [
  ['Alligator', 'Dog', 'Goat', 'Worm', 'Anteater', 'Armadillo', 'Hornet', 'Bear', 'Aurochs', 'Badger', 'Whale', 'Spider', 'Owl', 'Barracuda', 'Shark',
    'Bat', 'Beaver', 'Beetle', 'Sturgeon', 'Tiger', 'Bison', 'Marlin', 'Rhinoceros', 'Wasp', 'Octopus', 'Hyena', 'Snake', 'Frog', 'Fish', 'Caiman', 'Lizard', 'Lynx', 'Horse',
    'Lion', 'Ant', 'Cat', 'Catfish', 'Chameleon', 'Cheetah', 'Cockroach', 'Codfish', 'Cougar', 'Coyote', 'Crab', 'Crocodile', 'Deer', 'Locust', 'Tortoise', 'Doodle', 'Dragonfly',
    'Eagle', 'Eel', 'Elk', 'Falcon', 'Ferret', 'Toad', 'Squirrel', 'Fossa', 'Fox', 'Gecko', 'Salamander', 'Gopher', 'Mouse', 'Seal', 'Hamster', 'Hare', 'Crow', 'Hedgehog', 'Monkey',
    'Hyena', 'Iguana', 'Moth', 'Boar', 'Ram', 'Wolf', 'Badger']];

const FIRST_NAME_FONT = '45px "Montserrat SemiBold"';
const SECOND_NAME_FONT = '40px "Montserrat light"';

registerFont('./assets/font/Montserrat-Light.ttf', { family: 'Montserrat-Light' });
registerFont('./assets/font/Montserrat-SemiBold.ttf', { family: 'Montserrat-SemiBold' });

const generateRandomFirstName = () => getRandomValue(firstNames);

const generateRandomSecondAndThirdName = () => `${getRandomValue(secondNames)} ${getRandomValue(thirdNames)}`;

const getFirstNameHeight = (canvasContext) => {
  canvasContext.font = FIRST_NAME_FONT;
  const textMetrics = canvasContext.measureText('A');
  return textMetrics.emHeightDescent + textMetrics.emHeightAscent;
};

const getSecondNameHeight = (canvasContext) => {
  canvasContext.font = SECOND_NAME_FONT;
  const textMetrics = canvasContext.measureText('A');
  return textMetrics.emHeightDescent + textMetrics.emHeightAscent;
};

const drawAndGetRandomNames = (canvasContext, dx, dy1, dy2, width) => {
  let firstName = generateRandomFirstName();
  const secondAndThirdName = generateRandomSecondAndThirdName();
  let nickName = 'The ' + secondAndThirdName;

  drawAndGetNames(canvasContext,dx,dy1,dy2,width,firstName,nickName)

  return [firstName, secondAndThirdName];
};


const drawAndGetNames = (canvasContext, dx, dy1, dy2, width,firstName,nickName) => {
  canvasContext.fillStyle = 'black';
  canvasContext.font = FIRST_NAME_FONT;
  canvasContext.fillText(firstName, dx, dy1);

  canvasContext.font = SECOND_NAME_FONT;
  const textMetrics = canvasContext.measureText(nickName);
  if (textMetrics.width + dx * 2 > width) {
    nickName = nickName.substring(0, nickName.length - 3) + '...';
  }

  canvasContext.fillText(nickName, dx, dy2);
};

module.exports = {
  generateRandomFirstName,
  generateRandomSecondAndThirdName,
  getFirstNameHeight,
  getSecondNameHeight,
  drawAndGetNames,
  drawAndGetRandomNames
};
