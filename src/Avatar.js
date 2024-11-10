import React from 'react'

const Avatar = ({body, clothes1, clothes2, clothes3, eyes, mouth, hair, facialHair, eyebrows, earrings, glasses, hats, neckwear}) => {
    return (
      <div className="avatar">
        {/* layer 1 */}
        <img src={`/images/body/${body}.png`} alt="body" style={{ zIndex: 1 }} />
        {/* layer 2 */}
        <img src={`/images/eyes/${eyes}.png`} alt="eyes" style={{ zIndex: 2 }} />
        <img src={`/images/noses/1.png`} alt="nose" style={{ zIndex: 2 }} />
        <img src={`/images/mouths/${mouth}.png`} alt="mouth" style={{ zIndex: 2 }} />
        <img src={`/images/eyebrows/${eyebrows}.png`} alt="eyebrows" style={{ zIndex: 2 }} />
        <img src={`/images/accessories/earrings/${earrings}.png`} alt="earings" style={{ zIndex: 2 }} />
        <img src={`/images/clothes/layer_1/${clothes1}.png`} alt="clothes1" style={{ zIndex: 2 }} />

        {/* layer 3 */}
        <img src={`/images/clothes/layer_2/${clothes2}.png`} alt="clothes2" style={{ zIndex: 3 }} />
        <img src={`/images/accessories/glasses/${glasses}.png`} alt="glasses" style={{ zIndex: 3 }} />
        <img src={`/images/facial_hair/${facialHair}.png`} alt="facialHair" style={{ zIndex: 3 }} />

        {/* layer 4*/}
        <img src={`/images/hair/${hair}.png`} alt="hair" style={{ zIndex: 4 }} />
        <img src={`/images/clothes/layer_3/${clothes3}.png`} alt="clothes3" style={{ zIndex: 4 }} />

        {/* layer 5 */}
        <img src={`/images/accessories/hats/${hats}.png`} alt="hat" style={{ zIndex: 5 }} />
        <img src={`/images/accessories/neckwear/${neckwear}.png`} alt="neckwear" style={{ zIndex: 5 }} />
      </div>
    );
  };

  export default Avatar;