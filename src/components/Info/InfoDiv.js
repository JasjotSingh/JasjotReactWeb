import React from "react";
import classnames from "classnames";

function createInfoDiv(props){
    //classes for LinkedIn and Github icons
    const linkClass= classnames("fab", "fa-linkedin", "Icon")
    const ghClass= classnames("fab", "fa-github", "Icon")

    
    const style ={
        marginTop : "5%",
    }

    const aboutstyle={color: "darkslategray", fontSize: "1.1rem", marginTop : "5%"}
    return(
        <div style={style}>
            <h3><q style={{color: "darkslategray"}}>{props.Quote}</q></h3>
            <p>{props.Quoteby}</p>
            <p style={aboutstyle} ><em>{props.Description}</em></p>
            <p><span>Location: </span>{props.Location}</p>
            <p><span>Things i love: </span>{props.Love}</p>
            <p style={style}>
                <a href = {props.Linkedin}><i className= {linkClass}></i></a> 
                <a href = {props.Github}><i className={ghClass}></i></a>
            </p>
            
            
           
        </div>
    );
}

function createEducationDiv(props){

    const style ={
        marginTop : "5%",
    }

    return(
        <div style={style}>
            <h4><q style={{color: "darkslategray"}}>{props.Quote}</q></h4>
            <p>{props.Quoteby}</p>
            <p style={style}><span>{props.Degree}</span> {props.Time}</p>
            <p><span>{props.School}</span></p>
            <p>{props.Location}</p>
        </div>
    );
}

export {createInfoDiv, createEducationDiv};