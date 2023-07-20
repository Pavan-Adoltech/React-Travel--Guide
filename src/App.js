import React from "react";
import Navbar from "./cmponents/Navbar";
import Card from "./cmponents/Card";
import Data from "./Data";

export default function App() {
  const cards=Data.map(item =>{
    return(
      <Card
    key={item.id}
    item={item}
    />
    )
  })


  return (
    <div className="App">
         <Navbar/>
         {cards}
    </div>
  )
  };


