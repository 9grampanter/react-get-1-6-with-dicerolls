import React from "react";

const Dice = (props) => {
  return (
    <div className={`dice smallDice fade dice-${props.id}`}>
      {Array.from({ length: 6 }, (_,i) => (
        <div key={i} className='dotContainer'>
          <div className='dot'></div>
        </div>
      ))}
      
    </div>
  );
}

export default Dice