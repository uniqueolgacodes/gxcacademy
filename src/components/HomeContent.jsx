import React from "react";
import  {network, team, webdev, webdev2 } from "../miscellaneous";

const HomeContent = () => {
  return (
    <>
      <div className="homeContent hidden">
        <div className="contentContainer contentLeft w-full space-x-10">
          <div className="contentPhoto">
          <img className="contentImg img1" src={webdev2} alt="team"/>
          </div>
          <div className="contentTextBox">
            <h1 className="contentHeadText font-extrabold text-5xl">
              WEB COURSES AND DEVELOPMENT
            </h1>
            <p className="contentBodyText">
              Unlock Your Coding Potential. Welcome to GameX Coding Academy
              {"(GXCA)"}, where the journey to becoming a proficient coder
              begins. ARE YOU READY??
            </p>
          </div>

          
        </div>
        <br></br>
        <br></br>

        <div className="contentContainer contentRight w-full space-x-10">
          <div className="contentTextBox">
            <h1 className="contentHeadText font-extrabold text-5xl">
              MEET OUR TEAM OF EXPERTS
            </h1>
            <p className="contentBodyText">
              At the academy, we have experienced software engineers that will
              groom you into the complex world of coding using a step-by-step
              guide.
            </p>
          </div>
          <div className="contentPhoto">
           
            <img className="contentImg img2" src={team} alt="team"/>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="homeContent">
        <div className="contentContainer contentLeft w-full space-x-10">
          <div className="contentPhoto">
          <img className="contentImg img1" src={network} alt="team"/>
          </div>
          <div className="contentTextBox">
            <h1 className="contentHeadText font-extrabold text-5xl uppercase">
            quality facilities and equipment
            </h1>
            <p className="contentBodyText">
              Unlock Your Coding Potential. Welcome to GameX Coding Academy
              {"(GXCA)"}, where the journey to becoming a proficient coder
              begins. ARE YOU READY??
            </p>
          </div>

          
        </div>
        <br></br>
        <br></br>
      </div>
      </div>
    </>
  );
};

export default HomeContent;
