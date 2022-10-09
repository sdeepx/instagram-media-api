const validUrl = require("valid-url");
const http = require("./http");

/**
 *
 * @param {string} url
 * @returns
 */
exports.convertToUrl = (url) => {
  if (!validUrl.isUri(url)) return null;
  const rex = [
    /(https?:\/\/(?:www\.)?instagram\.com\/(p|tv|reel)\/([^/?#&]+))/gm,

    /(https?:\/\/(?:www\.)?instagram\.com\/([A-Za-z0-9-_\.]+)\/(p|tv|reel)\/([^/?#&]+))/gm,
  ];

  if (url.match(rex[0])) {
    url = url.match(rex[0])[0];
  }
  if (url.match(rex[1])) {
    url = url.match(rex[1])[0];
    url = url.split("/");
    url = `${url[0]}//${url[2]}/${url[4]}/${url[5]}`;
  }

  if (!url) return null;

  return `${url}/embed/captioned/`;
};

/**
 *
 * @param {string} url
 * @returns {Promise<null | string>}
 */
exports.convertBase64 = async (url) => {
  if (!url) return null;
  const data = await http(url, "GET", "arraybuffer");
  return Buffer.from(data, "binary").toString("base64");
};

/**
 *
 * @param {Text} data
 * @returns {object}
 */
exports.get_str_between = (data) => {
  const start = data.indexOf("shortcode_media") - 2;
  const end = data.indexOf("});</script>") + 1;
  const newData = data.substring(start, end);
  if (newData && newData.length > 0) {
    return newData;
  } else {
    return {};
  }
};
