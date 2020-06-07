import React from "react";

import Heading from "./Heading/Heading";
import {Exp, Proj, CardCol} from "./RegDiv";




function ObjArrayToExpRegDiv(params) {
    
    return (
        <div id={params.id} className={params.className}>
            <Heading title = {params.title}/>
            <hr></hr>
            <Exp aboutme = {params.aboutme}/>
        </div>
    );
}

function ObjArrayToProjDiv(params) {
    
    return (
        <div id={params.id} className={params.className} >
            <Heading title = {params.title}/>
            <hr></hr>
            <Proj aboutme = {params.aboutme}/>
        </div>
    );
}

function ObjArrayToCardCol(params) {
    
    return (
        <div id={params.id} className={params.className}>
            <Heading title = {params.title}/>
            <hr></hr>
            <CardCol list = {params.aboutme}/>
        </div>
    );
}


export {ObjArrayToCardCol, ObjArrayToProjDiv, ObjArrayToExpRegDiv};
