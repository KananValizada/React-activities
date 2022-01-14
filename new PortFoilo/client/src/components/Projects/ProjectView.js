import React, { useState, useEffect} from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./ProjectView.css";

function ProjectView(props) {
  const [chosen, setChosen] = useState(true);

  window.onclick = function(event) {
    const modal = document.getElementById("select");
    if(event.target == modal) 
    {
      props.handleChange();
    }
  }
  
  const options = {
    buttons: {
      backgroundColor: "rgb(88 73 71 / 80%)",
      iconColor: "rgb(255 255 255 / 70%)",
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
    },
    settings: {
      overlayColor: "rgb(81 76 73)",
      transitionSpeed: 1000,
      transitionTimingFunction: "linear"
    },
    thumbnails: {
      thumbnailsSize: ["120px", "100px"],
      thumbnailsOpacity: 0.4
    },
    caption: {
      captionColor: "rgba(241, 191, 152, 1)"
    },
    progressBar: {
      size: "4px",
      backgroundColor: "rgba(255, 237, 225, 1)",
      fillColor: "#AF9AB2"
    }
  };
  
  return (
     
    <div className={props.display ? "project_view" : "project_views_close"} id="select">
       
      <div className="project_view_container">
     
        <div className="project_view_header">
          <div className="project_view_header_1">
            <div className="project_view_name">{props.title}</div>
            <div
              className="project_view_close"
              onClick={() => props.handleChange()}
            >
              <i
                className="fa fa-times"
                style={{ fontSize: "25px", color: "red" }}
              ></i>
            </div>
          </div>
          <div className="project_view_button">
            <h5
              onClick={() => setChosen(true)}
              className={chosen ? "project_view_button_active" : ""}
            >
              overview
            </h5>
            <h5
              className={chosen ? "" : "project_view_button_active"}
              onClick={() => setChosen(false)}
            >
              screenshot
            </h5>
          </div>
        </div>
        
        <div className="project_view_body">
          {chosen ? (
            <div>
              <div className="project_view_lang">
                <div className="lang_heading">Used by </div>
                <div className="dot">:</div>
                <div className="lang_list">
                 <p>{props.lang}</p>
                </div>
              </div>
              <div className="project_view_desc">
                <div className="desc_heading">Description</div>
                <div className="dot">:</div>
                <div className="desc_list">
                 <p> {props.desc} </p>
                </div>
              </div>
            </div>
          ) : (
            <SRLWrapper options={options}>
      
            <div className="project_view_screenshot" id="style-5">
             {
                
                props.list.map((val, index) => (
                  
                 
                  <div className="screenshot_container" key={index}>
                       <a href={val}>
                
                         <img src={val} alt="" />
                        </a>
                </div>
            
            ))
              
               }
             
            </div>
            </SRLWrapper>
          )}
        </div>
      </div>
     
    </div>
   
  );
}

export default ProjectView;
