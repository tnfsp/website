import React, { useState } from 'react';

function DripCalculator() {
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState('');
  const [dripFactor, setDripFactor] = useState('');
  const [dripRate, setDripRate] = useState('');

  function calculateDripRate() {
    const calculatedDripRate = (volume / time) * dripFactor;
    setDripRate(calculatedDripRate.toFixed(2));
  }

  return (
    <div>
      <h1>點滴滴數計算器</h1>
      <label>
        體積 (mL):
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </label>
      <br />
      <label>
        時間 (分鐘):
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        滴速因子 (滴/毫升):
        <input
          type="number"
          value={dripFactor}
          onChange={(e) => setDripFactor(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateDripRate}>計算點滴速率</button>
      {dripRate && <p>點滴速率: {dripRate} 滴/分鐘</p>}
    </div>
  );
}

export default DripCalculator;
