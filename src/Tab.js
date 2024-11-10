import React, { useState } from 'react'
import PartList from "./PartList";

const total = {
	body: 17,
	eyes: 17,
	hair: 73,
  facialHair: 17,
	mouth: 24,
	eyebrows: 15,
	hats: 28,
	glasses: 17,
	clothes1: 5,
	clothes2: 5,
	clothes3: 9,
  earrings: 32,
  neckwear: 18,
};

const Tabs = ({body, hair, eyebrows, eyes, facialHair, mouth, earrings, glasses, hats, neckwear, clothes1, clothes2, clothes3, setBody, setEyes, setMouth, setHair, setEyebrows, setFacialHair, setClothes1,setClothes2,setClothes3, setEarrings, setHats, setGlasses, setNeckwear}) => {
    const [activeTab, setActiveTab] = useState("Body");
    const renderTabContent = () => {
        switch (activeTab) {
          case 'Body':
            return <PartList containerName="Select Body" partName="body" totalParts={total.body} selectedPart={body} setSelectedPart={setBody}/>;
          case 'Eyes':
            return <PartList containerName="Select Eyes" partName="eyes" totalParts={total.eyes} selectedPart={eyes} setSelectedPart={setEyes}/>;
          case "Mouth":
            return <PartList containerName="Select Mouth" partName="mouths" totalParts={total.mouth} selectedPart={mouth} setSelectedPart={setMouth}/>
          case 'Hair':
            return <PartList containerName="Select Hair" partName="hair" totalParts={total.hair} selectedPart={hair} setSelectedPart={setHair}/>
          case "Eyebrows":
            return <PartList containerName="Select Eyebrows" partName="eyebrows" totalParts={total.eyebrows} selectedPart={eyebrows} setSelectedPart={setEyebrows}/>
          case "Facial Hair":
            return <PartList containerName="Select Facial Hair" partName="facial_hair" totalParts={total.facialHair} selectedPart={facialHair} setSelectedPart={setFacialHair}/>
          case 'Clothes':
            return (
              <div>
                <PartList containerName="Select Clothes 1" partName="clothes" subFolder="layer_1" totalParts={total.clothes1} selectedPart={clothes1} setSelectedPart={setClothes1}/>
                <PartList containerName="Select Clothes 2" partName="clothes" subFolder="layer_2" totalParts={total.clothes2} selectedPart={clothes2} setSelectedPart={setClothes2}/>
                <PartList containerName="Select Clothes 3" partName="clothes" subFolder="layer_3" totalParts={total.clothes3} selectedPart={clothes3} setSelectedPart={setClothes3}/>
              </div>
            );
          case "Accessories": 
          return (
            <div>
              <PartList containerName="Select Earrings" partName="accessories" subFolder="earrings" totalParts={total.earrings} selectedPart={earrings} setSelectedPart={setEarrings}/>
      <PartList containerName="Select Hat" partName="accessories" subFolder="hats" totalParts={total.hats} selectedPart={hats} setSelectedPart={setHats}/>
      <PartList containerName="Select Glasses" partName="accessories" subFolder="glasses" totalParts={total.glasses} selectedPart={glasses} setSelectedPart={setGlasses}/>
      <PartList containerName="Select Neckwear" partName="accessories" subFolder="neckwear" totalParts={total.neckwear} selectedPart={neckwear} setSelectedPart={setNeckwear}/>
            </div>
          );
          default:
            return null;
        }
      };

      return (
        <div className="tabs">
            <div className="tab-buttons">
        <button className={activeTab === 'Body' ? 'active' : ''} onClick={() => setActiveTab('Body')}>Body</button>
        <button className={activeTab === 'Eyes' ? 'active' : ''} onClick={() => setActiveTab('Eyes')}>Eyes</button>
        <button className={activeTab === 'Mouth' ? 'active' : ''} onClick={() => setActiveTab('Mouth')}>Mouth</button>
        <button className={activeTab === 'Hair' ? 'active' : ''}  onClick={() => setActiveTab('Hair')}>Hair</button>
        <button className={activeTab === 'Eyebrows' ? 'active' : ''}  onClick={() => setActiveTab('Eyebrows')}>Eyebrows</button>
        <button className={activeTab === 'Facial Hair' ? 'active' : ''} onClick={() => setActiveTab('Facial Hair')}>Facial Hair</button>
        <button className={activeTab === 'Clothes' ? 'active' : ''} onClick={() => setActiveTab('Clothes')}>Clothes</button>
        <button className={activeTab === 'Accessories' ? 'active' : ''} onClick={() => setActiveTab('Accessories')}>Accessories</button>
        </div>

        <div className="tab-content">
            {renderTabContent()}
        </div>
        </div>
      )
}

export default Tabs;