function ColorPair() {
  this.majorColor;
  this.minorColor;
}
ColorPair.prototype.toString = function () {
  return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
};

module.exports = new export_file_ColorPair();
function export_file_ColorPair() {
  return {
    ColorPair: ColorPair
  };
}
