import React from "react";
import classnames from "classnames";

function createRespDiv (params) {
    return(
            <li>
                <p>{params}</p>
            </li>
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

    return(
        <div className={localClass}  style= {hoverStyle} onMouseEnter ={mouseEnter} onMouseLeave={mouseLeave}>
            <div className= "row">
                <div className = "col-4">
                    <p><span>{props.name}</span> {props.location} </p>
                    <p><span>{props.position}</span></p>
            </div>
            <div className = "col-8">
                    <ul>
                        {props.responsibility.map(createRespDiv)} 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExpDiv;