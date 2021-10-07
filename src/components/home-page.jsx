import React, { useState, useRef } from "react";
import Dice from "./dice/dice";

const HomePage = () => {
  const diceNumber = [1,2,3,4,5,6];
  const diceSelector = useRef(null);

  var [throws, setThrows] = useState(0);
  var [won, setWon] = useState(false);
  var [currentDiceGoal, setCurrentDiceGoal] = useState(1)
  let [activeDiceThrow, setActiveDiceThrow] = useState(undefined)
  // let activeDiceThrow = undefined




  function increaseThrows() {
    setThrows(throws + 1);
  }

  function playerThrow() {
    increaseThrows()
    setActiveDiceThrow(activeDiceThrow = Math.floor(Math.random()*(6)+1));
    
    if(activeDiceThrow === currentDiceGoal) {
      console.log(`${activeDiceThrow} === ${currentDiceGoal}`);
      setCurrentDiceGoal(currentDiceGoal + 1);
      diceSelector.current.children[activeDiceThrow - 1].classList.remove("fade")
      if(currentDiceGoal === 6) {
        setWon(won = true);
      }
    } 
  }

  function resetGame() {
    setThrows(throws = 0);
    setCurrentDiceGoal(currentDiceGoal = 1);
    setActiveDiceThrow(activeDiceThrow = undefined);
    for(let itteration = 0; (diceSelector.current.children.length) > itteration; itteration++) {
      diceSelector.current.children[itteration].classList.add("fade");
    }
    setWon(won = false);
  }

  return (
    <div className="homePage">
      <div className='topDiceRow' ref={diceSelector}>
        { diceNumber.map((index, i) => (
          <Dice id={i} diceNumber={index} key={i}></Dice>
        ))}
      </div>
      
      {won ? 
          <div>
            <h2>Grattis, Du klarade det på {throws} kast</h2>
            <button onClick={resetGame}>Börja om?</button>
          </div>
        :
        <>
          <div onClick={playerThrow} className="diceThowContainer">
            {activeDiceThrow !== undefined ? 
              <div className={`dice bigDice dice-${activeDiceThrow - 1}`}>
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className='dotContainer'>
                    <div className='dot'></div>
                  </div>
                ))}
              </div> 
            :
              <div className={`dice bigDice`}></div>
            }
            <div style={{marginLeft: "1rem"}}>Antal kast: {throws}</div>
          </div>
        </> 
      }
      
      
    </div>
  );
}


export default HomePage