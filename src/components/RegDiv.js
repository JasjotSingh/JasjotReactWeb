import React from "react";
import ExpDiv from "./Exp/ExpDiv";
import ProjDiv from "./Proj/ProjDiv";
import SkillCardDiv from "./Skill/SkillDiv";


function createSkillCard(params) {
    return(
        <SkillCardDiv
            key= {params.id}
            id={params.id}
            title = {params.Title}
            list = {params.List}
        />
    );
}

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

function Exp(params) {
    return(
        <div>
            {params.aboutme.map(createExpDiv)}
        </div>
    );
}

function Proj(params) {
    return(
        <div className="container" style={{marginTop : "5%"}}>
            <div className="row">
                {params.aboutme.map(createProjDiv)}
            </div>
        </div>
    );
}

function CardCol(params) {
    return(
        <div className="card-columns" style={{marginTop : "2%"}}>
            {params.list.map(createSkillCard)}
        </div>
    );
}

export {Exp, Proj,CardCol};