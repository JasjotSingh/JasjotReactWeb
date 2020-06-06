import React from "react";
import Heading from "./Heading";
import RegDiv,{Proj} from "./RegDiv";
import CardColDiv from "./CardCol";



function ObjArrayToRegDiv(params) {
    
    return (
        <div id={params.id} className={params.className}>
            <Heading title = {params.title}/>
            <hr></hr>
            <RegDiv aboutme = {params.aboutme}/>
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
            <CardColDiv skills = {params.aboutme}/>
        </div>
    );
}

export default ObjArrayToRegDiv;
export {ObjArrayToCardCol, ObjArrayToProjDiv};
