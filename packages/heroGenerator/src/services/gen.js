const { registerFont } = require('canvas');
const { PADDING } = require('./common/utils');

const generateGreyHeroRandomBonusPoints = () => 30 + Math.floor(Math.random() * 11);

registerFont('./assets/font/Montserrat-Medium.ttf', { family: 'Montserrat-Medium' });
registerFont('./assets/font/Roboto-Medium.ttf', { family: 'Roboto-Medium' });

const Gen = {
  GEN0_GOLD: "Genesis 0 Gold", GEN0_SLIVER: "Genesis 0 Silver", GEN1: "Genesis 1", Heritage: "Heritage"
}

const drawGen = (canvasContext, gen, right) => {
  let content = "";
  if (Gen.GEN0_GOLD === gen || Gen.GEN0_SLIVER === gen) {
    content = "Gen0";
  } else if (Gen.GEN1 === gen) {
    content = "Gen1";
  } else if(Gen.Heritage === gen){
    content = 'Heritage';
  }

  if(content.length > 0){
    canvasContext.fillStyle = 'white';
    canvasContext.font = '36px "Roboto Medium"';
    const textMetrics = canvasContext.measureText(content);
    //calculate the gen's start x
    const x = right - PADDING - textMetrics.width - 10;
    const y = PADDING + textMetrics.emHeightAscent + 5;
    canvasContext.fillText(content, x, y);
  }
};

module.exports = {
  generateGreyHeroRandomBonusPoints,
  drawGen
};
