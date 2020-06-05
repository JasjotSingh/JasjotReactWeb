import React from "react";
import classnames from "classnames";
import ListItem from "../ListItem";

function createRespDiv (item) {
    return(
        <ListItem 
          key = {item.id}
          item = {item.item}
        />
    );
}

function ExpDiv(props){
    const localClass = classnames("container", props.innerClass );
    const [mouseover, setMouseOver] = React.useState(false);

    function mouseLeave(){
        setMouseOver(!mouseover);
    }

    function mouseEnter(){
        setMouseOver(!mouseover);
    }
    let hoverStyle = {
        top : mouseover && "-20px",
        left: mouseover && "-20px",
        boxShadow: mouseover && "5px 10px 8px #888888"
    }
    const classTitle = classnames("col-lg-4", "col-sm-12");
    const classDescp = classnames("col-lg-8", "col-sm-12");
    return(
        <div className={localClass}  style= {hoverStyle} onMouseEnter ={mouseEnter} onMouseLeave={mouseLeave}>
            <div className= "row">
                <div className = {classTitle}>
                    <p><span>{props.name}</span> {props.location} </p>
                    <p><span>{props.position}</span></p>
                </div>
                <div className ={classDescp}>
                    <ul>
                        {props.responsibility.map(createRespDiv)} 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExpDiv;