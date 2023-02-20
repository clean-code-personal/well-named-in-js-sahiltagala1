const ColorPair_file = require("./ColorPair");
// import MajorColorNames from './colorCoders';
// import MinorColorNames from './colorCoders';
var MajorColorNames = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
var MinorColorNames = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];
function getColorFromPairNumber(pairNumber) {
  let minorSize = MajorColorNames.length;
  let majorSize = MinorColorNames.length;

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
    getColorFromPairNumber:getColorFromPairNumber
  };
};