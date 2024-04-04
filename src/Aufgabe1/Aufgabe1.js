import React, { useState, useEffect } from 'react';
import './Aufgabe1.css';

const Aufgabe1 = () => {
  const [flashlightOn, setFlashlightOn] = useState(false);

  useEffect(() => {
    let intervalId;

    if (flashlightOn) {
      intervalId = setInterval(() => {
        setFlashlightOn(true);
      }, 500); // Blinken alle 500 Millisekunden (0,5 Sekunden)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [flashlightOn]);

  const handleFlashlightChange = (value) => {
    setFlashlightOn(value === 'on');
  };

  return (
    <div className="flashlight-container">
      <div className={`flashlight ${flashlightOn ? 'on' : 'off'}`}></div>
      <div className="flashlight-options">
        <label className="flashlight-option">
          <input
            type="radio"
            value="on"
            checked={flashlightOn}
            onChange={() => handleFlashlightChange('on')}
          />
          <span>Blitz ein</span>
        </label>
        <label className="flashlight-option">
          <input
            type="radio"
            value="off"
            checked={!flashlightOn}
            onChange={() => handleFlashlightChange('off')}
          />
          <span>Blitz aus</span>
        </label>
      </div>
    </div>
  );
};

export default Aufgabe1;
