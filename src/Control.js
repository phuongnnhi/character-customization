import React from 'react'

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

const Control = ({setBody, setClothes1, setClothes2, setClothes3, setEyebrows, setEyes, setHair, setMouth, setEarrings, setGlasses, setHats, setNeckwear, setFacialHair}) => {
    const randomizeCharacter = () => {
        setBody(Math.floor(Math.random() * total.body) + 1)
        setClothes1(Math.floor(Math.random() * total.clothes1) + 1)
        setClothes2(Math.floor(Math.random() * total.clothes2) + 1)
        setClothes3(Math.floor(Math.random() * total.clothes3) + 1)
        setEyebrows(Math.floor(Math.random() * total.eyebrows) + 1)
        setEyes(Math.floor(Math.random() * total.eyes) + 1)
        setHair(Math.floor(Math.random() * total.hair) + 1)
        setMouth(Math.floor(Math.random() * total.mouth) + 1)
        setEarrings(Math.floor(Math.random() * total.earrings) + 1)
        setGlasses(Math.floor(Math.random() * total.glasses) + 1)
        setHats(Math.floor(Math.random() * total.hats) + 1)
        setNeckwear(Math.floor(Math.random() * total.neckwear) + 1)
        setFacialHair(Math.floor(Math.random() * total.facialHair) + 1)
      }

    return (
        <div id="control">
            <button onClick={randomizeCharacter}>Randomize</button>
        </div>
    )
}

export default Control;