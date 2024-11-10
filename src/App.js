import React, { useState } from 'react'
import Avatar from "./Avatar.js"
import Control from "./Control.js"
import Tabs from "./Tab.js"
import './App.css';



function App() {
  const [body, setBody] = useState(1);
  // const [nose, setNose] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [hair, setHair] = useState(1);
  const [mouth, setMouth] = useState(1);
  const [eyebrows, setEyebrows] = useState(1);
  const [facialHair, setFacialHair] = useState(1);
  
  //clothing
  const [clothes1, setClothes1] = useState(1);
  const [clothes2, setClothes2] = useState(1);
  const [clothes3, setClothes3] = useState(1);

  //accessories
  const [earrings, setEarrings] = useState(1);
  const [glasses, setGlasses] = useState(1);
  const [hats, setHats] = useState(1);
  const [neckwear, setNeckwear] = useState(1);


  
  return (
    <>
    <h1>Character Customization</h1>
    <div className="main">
    <div className="avatar-container">
      <Avatar body={body} clothes1={clothes1} clothes2={clothes2} clothes3 ={clothes3} eyes={eyes} mouth={mouth} hair={hair} facialHair={facialHair} eyebrows={eyebrows} earrings={earrings} glasses={glasses} hats={hats} neckwear={neckwear}/>
      <Control setBody={setBody} setClothes1={setClothes1} setClothes2={setClothes2} setClothes3={setClothes3} setEyebrows={setEyebrows} setEyes={setEyes} setHair={setHair} setMouth={setMouth} setEarrings={setEarrings} setGlasses={setGlasses} setHats={setHats} setNeckwear={setNeckwear} setFacialHair={setFacialHair}/>
    </div>
    <div className="feature-selection">
      <Tabs 
      body={body} setBody={setBody}
      hair={hair} setHair={setHair}
      eyes={eyes} setEyes={setEyes}
      mouth={mouth} setMouth={setMouth}
      eyebrows={eyebrows} setEyebrows={setEyebrows}
      facialHair={facialHair} setFacialHair={setFacialHair}
      clothes1={clothes1} setClothes1={setClothes1}
      clothes2={clothes2} setClothes2={setClothes2}
      clothes3={clothes3} setClothes3={setClothes3}
      earrings={earrings} setEarrings={setEarrings}
      hats={hats} setHats={setHats}
      glasses={glasses} setGlasses={setGlasses}
      neckwear={neckwear} setNeckwear={setNeckwear}/>
    </div>
    </div>
    </>
  );
}

export default App;
