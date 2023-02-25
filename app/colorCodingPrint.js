const { MajorColorNames, MinorColorNames, majorLen, minorLen } = require("./colors.js");
const ColorPair_file = require("./ColorPair.js");

function colorCodingPrint() {
  let minorSize = minorLen;
  let majorSize = majorLen;
  let n = minorSize * majorSize;
  for (let i = 1; i <= n; i++) {
    let zeroBasedPairNumber = i - 1;
    let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
    let pair = new ColorPair_file.ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    console.log(`${i} : ${pair.majorColor}-${pair.minorColor}`);
  }
}

module.exports = new export_file_colorCodingPrint();
function export_file_colorCodingPrint() {
  return {
    colorCodingPrint: colorCodingPrint,
  };
}
