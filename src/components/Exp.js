import React from "react";
import Heading from "./Heading";
import ExpDiv from "./ExpDiv";

function createExpDiv(params) {
    return (
        <ExpDiv 
            name = {params.Name}
            location = {params.Location}
            time = {params.Time}
            position = {params.Position}
            responsibility = {params.Responsibility}
        />
    );
}

function Exp(params) {
    return (
        <div className={params.className}>
            <Heading title = {params.title}/>
            <hr></hr>
            {params.aboutme.map(createExpDiv)}
        </div>
    );
}

export default Exp;