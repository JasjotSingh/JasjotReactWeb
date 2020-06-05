import React from "react";
import ListItem from "./ListItem";

function liItems(item){
    return(
        <ListItem 
          key = {item.id}
          item = {item.item}
        />
    );
}

function SkillCard(param){
  return(
      <div className="card">
      <button/>
      <div className="card-body">
        <h5 className="card-title">{param.Title}</h5>
        <ul className="card-text">
          {param.List.map(liItems)}
        </ul>
        
      </div>
    </div>
  );
}

export default SkillCard;