import React from "react";
import ListItem from "../ListItem";


function liItems(item){
    return(
        <ListItem 
          key = {item.id}
          item = {item.item}
        />
    );
}


function SkillCard(param){
  let[mouseOver, getMouseOver] = React.useState(false);

  function setMouseOver() {
    getMouseOver(!mouseOver);
  }

  let style ={
    backgroundColor : mouseOver ? "cadetblue" : "aliceblue",
    color : mouseOver ? "white": "black",
    marginBottom: "0",
    padding:" 5% 5%",
  }


  return(
    <div className="card">
     
        <h5 
        style ={style} 
        onMouseOver={setMouseOver} 
        onMouseLeave={setMouseOver}
        >
          {param.title}
        </h5>
      
        <div className="card-body">
          <ul className="card-text" >
              {param.list.map(liItems)}
          </ul>
        </div>
    </div>
  );
}

export default SkillCard;