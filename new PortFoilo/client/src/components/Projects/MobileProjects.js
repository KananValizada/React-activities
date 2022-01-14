import mct from "../../assets/projects/mobile/covid19_tracker/2.jpg";
import wt from "../../assets/projects/mobile/weather_app/2.jpg";

import mct1 from "../../assets/projects/mobile/covid19_tracker/1.jpg";
import mct2 from "../../assets/projects/mobile/covid19_tracker/2.jpg";
import mct3 from "../../assets/projects/mobile/covid19_tracker/3.jpg";
import mct4 from "../../assets/projects/mobile/covid19_tracker/4.jpg";
import mct5 from "../../assets/projects/mobile/covid19_tracker/5.jpg";
import mct6 from "../../assets/projects/mobile/covid19_tracker/6.jpg";
import mct7 from "../../assets/projects/mobile/covid19_tracker/7.jpg";
import mct8 from "../../assets/projects/mobile/covid19_tracker/8.jpg";
import mct9 from "../../assets/projects/mobile/covid19_tracker/9.jpg";
import mct10 from "../../assets/projects/mobile/covid19_tracker/10.jpg";
import mct11 from "../../assets/projects/mobile/covid19_tracker/11.jpg";
import mct12 from "../../assets/projects/mobile/covid19_tracker/12.jpg";
import mct13 from "../../assets/projects/mobile/covid19_tracker/13.jpg";

import wt1 from "../../assets/projects/mobile/weather_app/1.jpg";
import wt2 from "../../assets/projects/mobile/weather_app/2.jpg";
import wt3 from "../../assets/projects/mobile/weather_app/3.jpg";

const MobileProjects = [
  {
    title: "covid19 tracker (mobile app)",
    img: mct,
    desc:
      "t help to find the covid-19 cases(district,state,country wise) (API provided by: covid19india.org). Push notifications using firebase",
    lang: "flutter,dart,rest api, firebase",
    path: "../../assets/projects/mobile/covid19_tracker/",
    list: [
      mct1,
      mct2,
      mct3,
      mct4,
      mct5,
      mct6,
      mct7,
      mct8,
      mct9,
      mct10,
      mct11,
      mct12,
      mct13
    ]
  },
  {
    title: "weather tracker (mobile app)",
    img: wt,
    desc:
      "Find out the weather details at current location and other location (API provided by: openweatherapi.com) Push notifications using firebase",
    lang: "flutter,dart,rest api, firebase",
    path: "../../assets/projects/mobile/weather_app/",
    list: [wt1, wt2, wt3]
  }
];

export default MobileProjects;
