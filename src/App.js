import React, { useState } from 'react';
import './App.css';
import image from './images/Capture.PNG'
import TileComponent from './TileComponent'


function App() {
  const [arrContent, setarrContent] = useState(["vardhan", "karnati"])
  return (
    <React.Fragment>
      <div class="App">
        <div class="main" id="section1">
          <div class="HeaderSection">
            <div class="HeaderContainer">
              <div class="LeftContainer">
                <div class="details-left">Vardhan Karnati</div>
                <div class="details-left">UX/UI Desginer</div>
              </div>
              <div class="RightContainer">
                <div class="details"><a href='#work'>work</a></div>
                <div class="details">vardhanreddy1995@gmail.com</div>
              </div>
            </div>
            <div class="ProfileContent">
              <img src={image} width="200" height="200"></img>
              <div class="AboutMe">
                <h1>Hi, I‘m Vardhan 👋</h1>
              I‘m a UX/UI Designer with over Four years experience at an MNC, trying to improve my knowledge constantly and also trying to improve my analytical thinking 🚀
              At present i am looking for Job change and improve Financially which helps my family and take care of my father.</div>
            </div>
          </div>
        </div>

        <div class="main" id="work">
          <div class="workContainer">
            <h2>My Work</h2>
            {arrContent.map((val) => <TileComponent val={val} />) }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
