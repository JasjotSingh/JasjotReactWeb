import React from "react";
import ExpDiv from "./Exp/ExpDiv";
import ProjDiv from "./Proj/ProjDiv"


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

function createProjDiv(params) {
    return (
        <ProjDiv 
            key = {params.id}
            name = {params.ProjectName}
            desp = {params.Description}
            language = {params.LanguageUsed}
            link = {params.link}
            innerClass = "innerProjDiv"
        />
    );
}

function RegDiv(params) {
    return(
        <div>
            {params.aboutme.map(createExpDiv)}
        </div>
    );
}

function Proj(params) {
    return(
        <div className="container">
            <dia className="row">
                {params.aboutme.map(createProjDiv)}
            </dia>
        </div>
    );
}

export default RegDiv;
export {Proj};