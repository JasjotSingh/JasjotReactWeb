import React from "react";
import Heading from "./Heading";
import RegDiv from "./RegDiv";
import CardColDiv from "./CardCol";



function ObjArrayToRegDiv(params) {
    
    return (
        <div className={params.className}>
            <Heading title = {params.title}/>
            <hr></hr>
            <RegDiv workexp = {params.aboutme}/>
        </div>
    );
}

function ObjArrayToCardCol(params) {
    
    return (
        <div className={params.className}>
            <Heading title = {params.title}/>
            <hr></hr>
            <CardColDiv skills = {params}/>
        </div>
    );
}

export default ObjArrayToRegDiv;
export {ObjArrayToCardCol};
