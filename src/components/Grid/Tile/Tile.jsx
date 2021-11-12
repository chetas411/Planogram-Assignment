import React, { useState,useContext, useEffect } from "react";
import { SelectedCellsContext } from "../../../context/SelectedCellsContextProvider";
import "./Tile.css";

const Tile = ({ color, position }) => {
  const [selected, setSelected] = useState(false);
  const [noToggle,setNoToggle] = useState(false);
  const [selectedColor,setSelectedColor] = useState("gray")
  let {shouldSelect,data} = useContext(SelectedCellsContext)
  useEffect(()=>{
    if(shouldSelect && selected){
      data.push(`(${position.x},${position.y})`)
      setNoToggle(true)
      setSelectedColor(color)
      setSelected(false);
    }
  },[shouldSelect])
  const { x, y } = position;
  const selectHandler = () => {
      setSelected((prev) => {
          return noToggle? false : !prev
      })
  }
  return (
    <div
      onClick={selectHandler}
      className="tile-box"
      style={{ backgroundColor: selected ? color : selectedColor }}
    >
      <h1>{`${x},${y}`}</h1>
    </div>
  );
};

export default Tile;
