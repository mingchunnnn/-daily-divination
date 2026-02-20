function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('魔法占卜抽籤')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
