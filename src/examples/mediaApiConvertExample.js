const { getMediaApis, convertApiUrlToBase64 } = require("../../app");

getMediaApis("https://www.instagram.com/p/B0sfkX_Hwgo/")
  .then((res) => console.log("media apis", res))
  .catch((err) => console.log("err", err));
