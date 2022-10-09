const cheerio = require("cheerio");
const {
  convertToUrl,
  convertBase64,
  get_str_between,
} = require("./src/services/converter");
const http = require("./src/services/http");

/**
 *
 * @param {string} url
 * @param {boolean} base64
 * @returns {Promise<object | Error>}
 */
const getMediaApis = async (url, base64 = false) => {
  try {
    const result = {
      img: [],
      video: [],
      showImg: [],
      showVideo: [],
      owner: [],
    };

    let img64, video64, ownImg64;

    url = convertToUrl(url);
    if (!url) return result;

    let data = await http(url, "GET", "text");
    const $ = cheerio.load(data);

    if (
      $(".EmbeddedMediaImage").attr("src") &&
      data.indexOf("shortcode_media") < 1
    ) {
      result.img.push($(".EmbeddedMediaImage").attr("src"));
      base64 && result.showImg.push(ownImg64);
      ownImg64 =
        base64 &&
        (await convertBase64($(".HoverCardProfile").find("img").attr("src")));

      result.owner.push({
        profilePic: $(".HoverCardProfile").find("img").attr("src"),
        username: $(".HoverCardUserName > .Username").text(),
        showImg: base64 && ownImg64,
      });
    } else {
      data = JSON.parse(get_str_between(data));
      if (!data && !data.shortcode_media)
        return next(new AppError("No video or image found!", 404));

      if (data.shortcode_media.edge_sidecar_to_children) {
        if (data.shortcode_media.edge_sidecar_to_children.edges.length > 0) {
          for (const i of data.shortcode_media.edge_sidecar_to_children.edges) {
            if (i.node.is_video) {
              result.video.push(i.node.video_url);
              video64 = base64 && (await convertBase64(i.node.video_url));
              base64 && result.showVideo.push(video64);
            }
            result.img.push(i.node.display_url);
            img64 = base64 && (await convertBase64(i.node.display_url));
            base64 && result.showImg.push(img64);
          }
        } else {
          if (data.shortcode_media.is_video) {
            result.video.push(data.shortcode_media.video_url);
            video64 =
              base64 && (await convertBase64(data.shortcode_media.video_url));
            base64 && result.showVideo.push(video64);
          }
          result.img.push(data.shortcode_media.display_url);
          img64 =
            base64 && (await convertBase64(data.shortcode_media.display_url));
          base64 && result.showImg.push(img64);
        }

        ownImg64 =
          base64 &&
          (await convertBase64(data.shortcode_media.owner.profile_pic_url));
        result.owner.push({
          profilePic: data.shortcode_media.owner.profile_pic_url,
          username: data.shortcode_media.owner.username,
          showImg: base64 && ownImg64,
        });
      } else if (
        (data.shortcode_media && data.shortcode_media.display_resources) ||
        data.shortcode_media.video_url
      ) {
        if (data.shortcode_media.is_video) {
          result.video.push(data.shortcode_media.video_url);
          video64 =
            base64 && (await convertBase64(data.shortcode_media.video_url));
          base64 && result.showVideo.push(video64);
        }
        result.img.push(data.shortcode_media.display_url);
        img64 =
          base64 && (await convertBase64(data.shortcode_media.display_url));
        base64 && result.showImg.push(img64);

        ownImg64 =
          base64 &&
          (await convertBase64(data.shortcode_media.owner.profile_pic_url));
        result.owner.push({
          profilePic: data.shortcode_media.owner.profile_pic_url,
          username: data.shortcode_media.owner.username,
          showImg: base64 && ownImg64,
        });
      }
    }
    return result;
  } catch (error) {
    return "Error while getting APIs.";
  }
};

/**
 *
 * @param {string} url
 * @returns
 */
const convertApiUrlToBase64 = async (url) => convertBase64(url);

module.exports = {
  getMediaApis,
  convertToUrl,
  convertBase64,
  convertApiUrlToBase64,
};
