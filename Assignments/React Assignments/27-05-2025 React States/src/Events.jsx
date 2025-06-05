import React from 'react';
import States from './states';

function Events() {
  function handleClick() {
    console.log('Button was clicked');
    alert("Button Daba Diya");
  }

  function handleMouseOver() {
    console.log('Mouse is hovering over the button');
  }

  function doubleClick() {
    console.log('Double click is pressed');
    alert("Double click kar diya");
  }

  return (
    <div>
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onDoubleClick={doubleClick}
        style={{padding:'10px 20px',fontSize:'16px',marginRight:'10px'}}
      >
        Click
      </button>
      <button
        onDoubleClick={doubleClick}
        style={{padding:'20px 30px',fontSize:'20px'}}
      >
        Double Click
      </button>
      <States/>
    </div>
  );
}
export default Events;
