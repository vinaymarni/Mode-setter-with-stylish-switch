import React, { useState } from "react";
import './App.css';

function App() {
  const[position, setPosition] = useState(false)
  const[turn, setTurn] = useState("flex-end")
  const[dot, setDot] = useState("gray")
  const[name, setName] = useState("STOP")
  const[upArrow, setUpArrow] = useState("block")
  const[downArrow, setDownArrow] = useState("none")
  const[mode, setMode] = useState("light")
  
  const isSwitch = () => {
    setPosition(!position)
    if(position === true){
      setTurn("flex-end")
      setDot("gray")
      setName("STOP")
      setUpArrow("block")
      setDownArrow("none")
      setMode("light")
    }else{
      setTurn("flex-start")
      setDot("#00FF78")
      setName("START")
      setUpArrow("none")
      setDownArrow("block")
      setMode("dark")
    }

  }
  return (
    <div className= {`App ${mode}`} >     
      <div className="switch-outer" style={{justifyContent: turn }}>
        <img style={{display: upArrow, marginBottom: "20px"}} className="arrow" src="https://res.cloudinary.com/di01osmzz/image/upload/v1668765842/fast-forward-double-right-arrows-symbol_3_gijmts.png" alt="" />
        <div className={`switch-inner ${mode}`}  onClick={isSwitch}>
          <div style={{height: "4px", width: "13px", backgroundColor: dot, borderRadius: "5px"}}></div>
          <h3 style={{color: "white", fontSize: "10px"}}>{name}</h3>
          <div className="on-icon-con" >
            <img src="https://cdn-icons-png.flaticon.com/128/4139/4139573.png" alt="" className="onIcon" />
          </div>
        </div> 
        <img style={{display: downArrow, marginTop: "20px"}} className="arrow" src="https://res.cloudinary.com/di01osmzz/image/upload/v1668765857/fast-forward-double-right-arrows-symbol_2_kiup4n.png" alt="" />
      </div>
    </div>
  );
}

export default App;
