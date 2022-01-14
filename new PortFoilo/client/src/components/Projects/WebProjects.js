import sm from "../../assets/projects/web/social_media_app/2.PNG";

import ct1 from "../../assets/projects/web/memories/pct1.PNG";
import ct2 from "../../assets/projects/web/memories/pct2.PNG";
import ct3 from "../../assets/projects/web/memories/pct3.PNG";

import sm1 from "../../assets/projects/web/chatEngine/pct2.1.PNG";
import sm2 from "../../assets/projects/web/chatEngine/pct2.2.PNG";

const WebProjects = [
  {
    title: "memories",
    img: ct1,
    desc: "Memories is a web based application to share fun pictures and stories about travelling and store great memories",
    lang: "HTML,Css,React,Material UI,Node js,Express,Rest API,Mongo DB",
    path: "../../assets/projects/web/memories/",
    list: [ct1, ct2, ct3],
    url: "https://memorieskv.netlify.app/",
  },
  {
    title: "kvChat",
    img: sm1,
    desc: "kvChat is a web based application to chat with friends, colleagues, relatives like whatsapp you can create chat room add friend and write to them.",
    lang: "React,Axios,javascript",
    path: "../../assets/projects/web/online_quiz/",
    list: [sm1, sm2],
    url: "https://kvchat.netlify.app/",
  },
];

export default WebProjects;
