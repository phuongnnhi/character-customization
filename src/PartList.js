import React from 'react'
const PartList = ({ containerName, partName, subFolder, totalParts, selectedPart, setSelectedPart }) => {
    return (
    <div id="selection-part">
      <h2 id='part-container-name'>{containerName}</h2>
      <div className={`part-list`}>
        {[...Array(totalParts).keys()].map((index) => (
          <img
            key={index}
            className={selectedPart === index+1 ? "selected" : ""}
            src={`/images/${partName}/${subFolder ? `${subFolder}/` : ""}${index + 1}.png`}
            alt={`${partName} option`}
            onClick={() => setSelectedPart(index + 1)}
          />
        ))}
      </div>
      </div>
    );
  };

  export default PartList;