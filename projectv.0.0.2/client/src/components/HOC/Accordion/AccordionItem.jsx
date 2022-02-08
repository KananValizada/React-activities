import { useRef } from "react";
import classes from "./Accordion.module.css";

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`${classes.accordionItem} ${active ? classes.active : ""}`}>
      <button className={classes.button} onClick={onToggle}>
        {question}
        <span className={classes.button}>{active ? "—" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className={classes.answerWrapper}
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className={classes.answer}>
          {answer[0] !== "price"
            ? answer.map((ass) => (
                <button className={classes.filterBTN}>{ass}</button>
              ))
            : answer[0]}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
