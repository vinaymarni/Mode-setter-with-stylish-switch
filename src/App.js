import React, { useState } from "react";
import './App.css';

function App() {
  const[position, setPosition] = useState(false)
  const[data, setData] = useState({
    turn : "flex-end",
    dot : "gray",
    name : "STOP",
    upArrow : "block",
    downArrow : "none",
    mode : "light"
  })

  const isSwitch = () => {
    setPosition(!position)
      if(position === true){       
        setData({turn : "flex-end", dot : "gray", name : "STOP", upArrow : "block", downArrow : "none", mode : "light"   })
      }else{
        setData({turn : "flex-start", dot : "#00FF78", name : "START", upArrow : "none", downArrow : "block", mode : "dark"   })   
      }
  }

  return (
    <div className= {`App ${data.mode}`} >   
      <img src="https://res.cloudinary.com/di01osmzz/image/upload/v1668837368/world-map_thhktd.png" alt="" />  
      <div className="switch-outer" style={{justifyContent: data.turn }}>
        <img style={{display: data.upArrow, marginBottom: "20px"}} className="arrow" src="https://res.cloudinary.com/di01osmzz/image/upload/v1668765842/fast-forward-double-right-arrows-symbol_3_gijmts.png" alt="" />
        <div className={`switch-inner ${data.mode}`}  onClick={isSwitch}>
          <div className={`led-${data.mode}`} style={{height: "4px", width: "13px", backgroundColor: data.dot, borderRadius: "5px"}} ></div>
          <h3 style={{color: "white", fontSize: "10px"}}>{data.name}</h3>
          <div className="on-icon-con" >
            <img src="https://cdn-icons-png.flaticon.com/128/4139/4139573.png" alt="" className="onIcon" />
          </div>
        </div> 
        <img style={{display: data.downArrow, marginTop: "20px"}} className="arrow" src="https://res.cloudinary.com/di01osmzz/image/upload/v1668765857/fast-forward-double-right-arrows-symbol_2_kiup4n.png" alt="" />
      </div>
     
    </div>
  );
}

export default App;