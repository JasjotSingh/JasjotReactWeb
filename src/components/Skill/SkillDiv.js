import React from "react";
import ListItem from "../ListItm/ListItem";
import classnames from "classnames";

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
    backgroundColor : mouseOver ? "gray" : "white",
    color : "black",
    marginBottom: "0",
    padding:" 5% 5%",
  }

  const cardClass = classnames("card");
  const cardTextClass = classnames("card-body");

  return(
    <div className={cardClass}>
     
        <h5 
        style ={style} 
        onMouseOver={setMouseOver} 
        onMouseLeave={setMouseOver}
        >
          {param.title}
        </h5>
      
        <div className={cardTextClass}>
          <ul className="card-text" >
              {param.list.map(liItems)}
          </ul>
        </div>
    </div>
  );
}

export default SkillCard;