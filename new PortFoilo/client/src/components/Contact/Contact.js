import React, { useState } from "react";
import { Element } from "react-scroll";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mssg, setMssg] = useState("");
  const [mssgResult, setMsgResult] = useState("result-message");

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ez9furk",
        "template_hoeave3",
        e.target,
        "user_39n7J6ZIU0blPnJAYJhgJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsgResult("sent-message");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setMail("");
    setMssg("");
  }
  return (
    <Element id="contact">
      <div className="contact-container" data-aos="fade-up">
        <div className="wrapper centered">
          <article
            className={
              mssgResult == "result-message" ? "letter" : "sent-letter"
            }
            id="sent-letter"
          >
            <form onSubmit={handleSubmit}>
              <div className="side" id="side1">
                <br />
                <h1>Contact us</h1>
                <p>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    id="formname"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </p>
                <p>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    id="formmail"
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />
                </p>
              </div>
              <div className="side" id="side2">
                <p>
                  <textarea
                    placeholder="Your message"
                    name="message"
                    id="formmsg"
                    onChange={(e) => setMssg(e.target.value)}
                    required
                  ></textarea>
                </p>
                <p>
                  <button type="submit" className="sent-btn" id="sendbtn">
                    Send
                  </button>
                </p>
              </div>
            </form>
          </article>

          <div id="front"></div>
          <div id="back"></div>
        </div>
        <p className={mssgResult} id="sentmsg">
          <i
            class="fa fa-check-circle"
            style={{ color: "green", fontSize: "20px" }}
          ></i>{" "}
          &nbsp; Thank you for your message
        </p>
      </div>
    </Element>
  );
};

export default Contact;
