import React from "react";
import classname from "classnames";


function ProjDiv(props){
    const classes = classname(props.innerClass, "col-lg-5", "col-md-12")
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
        
        <div className = {classes} style={hoverStyle} onMouseEnter ={mouseEnter} onMouseLeave={mouseLeave}>
            <span>
                <h4>
                    <span>{props.name}</span> 
                    {(props.link !== "") && <a href={props.link}><i class="fas fa-link"></i></a>}
                </h4> 
                {props.language} 
            </span>
            <p>{props.desp}</p>
        </div>
           
    );
}
export default ProjDiv;