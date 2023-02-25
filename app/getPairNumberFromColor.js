const { MajorColorNames, MinorColorNames, majorLen, minorLen } = require("./colors.js");
const ColorPair_file = require("./ColorPair.js");


function getPairNumberFromColor(pair) {
  let majorIndex = -1;
  for (let i = 0; i < majorLen; i++) {
    if (MajorColorNames[i] == pair.majorColor) {
      majorIndex = i;
      break;
    }
  }

  let minorIndex = -1;
  for (let i = 0; i < minorLen; i++) {
    if (MinorColorNames[i] == pair.minorColor) {
      minorIndex = i;
      break;
    }
  }

  if (majorIndex == -1 || minorIndex == -1) {
    throw `Unknown Colors:${pair.toString()}`;
  }

  return majorIndex * minorLen + (minorIndex + 1);
}

module.exports = new export_file_getPairNumberFromColor();
function export_file_getPairNumberFromColor() {
  return {
    getPairNumberFromColor: getPairNumberFromColor,
  };
}
