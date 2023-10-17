const {Image} = require('canvas');

const drawBrand = (canvasContext, clan) => {
    if (clan.brand) {
      const img = new Image();
      img.onload = () => {
        canvasContext.drawImage(img, 20, 20);
      };
      img.src = clan.brand;
    }
};

module.exports = {
    drawBrand
};
