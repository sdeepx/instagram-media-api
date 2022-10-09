<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/W6kWLOR.png" alt="Project logo"></a>
</p>

<h3 align="center">instagram-media-api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
<!-- [![Download](https://npm.im/instagram-media-api)](/Download) -->

</div>

---

<p align="center"> Instagram Media API - Get APIs From Instagram Posts.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## 🧐 About <a name = "about" id="about"></a>

This a NodeJs module to scrap public posts. 

## 🏁 Getting Started <a name = "getting_started" id="getting_started"></a>

A step by step series of examples that tell you how to use this module to your project.

### Installing


Install `instagram-media-api` using `npm` or `yarn`.

```
yarn add instagram-media-api
```

or
```
npm i instagram-media-api
```


## 🎈 Usage <a name="usage" id="usage"></a>

### Example:
 ```
    const { getMediaApis } = require("instagram-media-api")
```
```
getMediaApis("https://www.instagram.com/p/B0sfkX_Hwgo/")
  .then((res) => console.log("media apis", res))
  .catch((err) => console.log("err", err));
```

Response:
```
 {
  img: [
    'https://scontent.cdninstagram.com/v/t51.2885-15/67352992_353826605542134_8396874187403409963_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=i03fQwMdHX8AX9sTaIh&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AT9vKhnm-BEElELZEoadE2IdekfXSTvznZJbRZHVojENGA&oe=6344E414&_nc_sid=78c662'
  ],
  video: [
    'https://scontent.cdninstagram.com/v/t50.2886-16/68505662_495786021230635_533610235851624227_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=z2ptGnJXoz8AX8FFkmR&edm=AJBgZrYBAAAA&vs=17881019206403118_1535603319&_nc_vs=HBksFQAYJEdENVFGUVFyR0s0dDZzSUJBQ1BQY3F5dXcyY0hia1lMQUFBRhUAAsgBABUAGCRHSXNXR1FUSUFzdUZCX1VFQU5KQTB1dVdGUTBNYmtZTEFBQUYVAgLIAQAoABgAGwAVAAAm3O3kmKaswz8VAigCQzMsF0Aju2RaHKwIGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHXqBwA%3D&ccb=7-5&oe=6344B2BB&oh=00_AT_ES6r5IVNrL2qR3NshgMpa_M5e1iD6jIfKxL7x_DAF8Q&_nc_sid=78c662'
  ],
  showImg: [],
  showVideo: [],
  owner: [
    {
      profilePic: 'https://scontent.cdninstagram.com/v/t51.2885-19/42330748_167443990843489_7154877939849363456_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=101&_nc_ohc=GtmraA-hw0AAX_GGu3s&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AT9h2a0gWB0AP3V-6OuUN9p4mdoVhBPK-1h7j1Uw2aD8Og&oe=634994B1&_nc_sid=78c662',
      username: 'danceplus_official',
      showImg: false
    }
  ]
}
```