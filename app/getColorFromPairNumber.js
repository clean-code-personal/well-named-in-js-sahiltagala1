const { MajorColorNames, MinorColorNames, majorLen, minorLen } = require("./colors.js");
const ColorPair_file = require("./ColorPair.js");

function getColorFromPairNumber(pairNumber) {
  let minorSize = minorLen;
  let majorSize = majorLen;

  if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
    throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
  }
  let zeroBasedPairNumber = pairNumber - 1;
  let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
  let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
  let pair = new ColorPair_file.ColorPair();
  pair.majorColor = MajorColorNames[majorIndex];
  pair.minorColor = MinorColorNames[minorIndex];
  return pair;
}

module.exports = new export_file_getColorFromPairNumber();
function export_file_getColorFromPairNumber() {
  return {
    getColorFromPairNumber: getColorFromPairNumber,
  };
}
