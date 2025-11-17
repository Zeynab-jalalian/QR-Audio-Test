var qrcode = new QRCode("qrcode", {
  text: "https://bit.ly/voiceMp3",
  width: 200,
  height: 200,
  colorDark: "#8020ffff",
  colorLight: "#d2e6ffff",
  correctLevel: QRCode.CorrectLevel.H,
});
