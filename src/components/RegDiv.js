import React from "react";
import ExpDiv from "./Exp/ExpDiv";


function createExpDiv(params) {
    return (
        <ExpDiv 
            key = {params.id}
            name = {params.Name}
            location = {params.Location}
            time = {params.Time}
            position = {params.Position}
            innerClass = "innerExpDiv"
            responsibility = {params.Responsibility}
        />
    );
}

function RegDiv(params) {
    return(
        <div>
            {params.workexp.map(createExpDiv)}
        </div>
    );
}

export default RegDiv;