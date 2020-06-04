import React from "react";

function createRespDiv (params) {
    return(
            <li>
                <p>{params}</p>
            </li>
        );
}

function ExpDiv(props){
    return(
        <div class="innerExpDiv">
            <div>
                <p><span>{props.name}</span> {props.location} </p>
                <p><span>{props.position}</span></p>
           </div>
           <div>
                <ul>
                    {props.responsibility.map(createRespDiv)} 
                </ul>
            </div>
        </div>
    );
}

export default ExpDiv;