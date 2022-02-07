import classes from "./ChallangesItem.module.css";
import pingpong from "../../../assets/pingpong4.png";
import Navbar from "../../Navbar/Navbar";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useEffect } from "react";

const ChallangesItem = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Navbar bckC="#060506" />
      <div className={classes.challangeItem}>
        <div className={classes.challangeItemInfo}>
          <div className={classes.challangeItemInfoNav}>
            <button className={classes.challangeItemInfoNavActive}>Home</button>
            /
            <button className={classes.challangeItemInfoNavPassive}>
              Content
            </button>
          </div>
          <div className={classes.challangeItemInfoImg}>
            <img alt="itemImg" src={pingpong}></img>
          </div>
          <p>
            I'm a product description. This is a great place to "sell" your
            product and grab buyers' attention. Describe your product clearly
            and concisely. Use unique keywords. Write your own description
            instead of using manufacturers' copy.
          </p>
          <div className={classes.challangeItemInfoText}></div>
        </div>
        <div className={classes.challangeItemDesc}>
          <div className={classes.challangeItemDescPage}>
            <span className={classes.challangeItemDescPage1}>Əvvəlki </span>
            &nbsp; | &nbsp;
            <span className={classes.challangeItemDescPage2}> Sonraki</span>
          </div>
          <div className={classes.challangeItemDescPageTitle}>
            <h1>Stolüstü tennis</h1>
            <p>Qeydiyyat başlayıb</p>
            <p>Qeydiyyatın bitməyinə qalıb: </p>
            <p>Qeydiyyatdan keçənləri sayı: </p>
            <p>Yekun mükafat: (Yenilənir)</p>
            <p>Qatılma haqqı: 10 AZN</p>
          </div>
          <Accordion allowZeroExpanded className={classes.acordion}>
            <AccordionItem className={classes.acordionItem}>
              <AccordionItemHeading>
                <AccordionItemButton>Oyunun şərtləri</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={classes.acordionItem}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <button className={classes.challangeItemButton}>
            Qeydiyyatdan keç
          </button>
        </div>
      </div>
      <div className={classes.participantsCont}>
        <h1>Qeydiyyatdan keçənlər</h1>
        <div className={classes.participants}>
          <div className={classes.participantsItem}>
            <div alt="userLogo" className={classes.userImg}></div>
            <h4>KANAN VALIZADA</h4>
          </div>
          <div className={classes.participantsItem}>
            <div alt="userLogo" className={classes.userImg2}></div>
            <h4>LALA MALIKLI</h4>
          </div>
          <div className={classes.participantsItem}>
            <div alt="userLogo" className={classes.userImg2}></div>
            <h4>LALA MALIKLI</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallangesItem;
