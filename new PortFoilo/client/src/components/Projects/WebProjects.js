import ct1 from "../../assets/projects/web/memories/pct1.PNG";
import ct2 from "../../assets/projects/web/memories/pct2.PNG";
import ct3 from "../../assets/projects/web/memories/pct3.PNG";

import sm1 from "../../assets/projects/web/chatEngine/pct2.1.PNG";
import sm2 from "../../assets/projects/web/chatEngine/pct2.2.PNG";

import wc1 from "../../assets/projects/web/watchList/wc1.PNG";
import wc2 from "../../assets/projects/web/watchList/wc2.PNG";
import wc3 from "../../assets/projects/web/watchList/wc3.PNG";

import bg1 from "../../assets/projects/web/myBurger/bg1.PNG";
import bg2 from "../../assets/projects/web/myBurger/bg2.PNG";
import bg3 from "../../assets/projects/web/myBurger/bg3.PNG";

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
    path: "../../assets/projects/web/chatEngine/",
    list: [sm1, sm2],
    url: "https://kvchat.netlify.app/",
  },
  {
    title: "kvWatchList",
    img: wc2,
    desc: "kvWatchList is a web based application for adding new movies into your watchlist and watchedlist. It reminds you what movies you wanted to watch in the future and helps you to know what movies you have already watched",
    lang: "React Hooks, Context api, Local storage, TMDB API",
    path: "../../assets/projects/web/watchList/",
    list: [wc1, wc2, wc3],
    url: "https://kvwatchlist.netlify.app/",
  },
  {
    title: "myBurger",
    img: bg1,
    desc: "myBurger is a web based application to order burger choosing ingredients by yourself calculating the price and storing orderslist.",
    lang: "React,Redux, PropTpes,Firebase, Css module",
    path: "../../assets/projects/web/myBurger/",
    list: [bg1, bg2, bg3],
    url: "https://my-react-burger-cf0bc.firebaseapp.com/",
  },
];

export default WebProjects;
