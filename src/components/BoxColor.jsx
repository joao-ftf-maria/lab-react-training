import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const divStyle = {
    backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    mixBlendMode: 'difference',
  };

  //const textColor = r + g +b > (255 * 3)/ 2 ? 'black': 'white'
  return (
    <div className="boxColor" style={divStyle}>
      <h2>
        rgb({props.r}, {props.g}, {props.b})<br />#{rgbToHex(props.r)}
        {rgbToHex(props.g)}
        {rgbToHex(props.b)}
      </h2>
    </div>
  );
}
const rgbToHex = function (rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

export default BoxColor;
