import React from "react";
import SkillCardDiv from "./Skill/SkillDiv";

function createCard(params) {
    return(
        <SkillCardDiv
            key= {params.id}
            id={params.id}
            title = {params.Title}
            list = {params.List}
        />
    );
}

function CardCol(params) {
    return(
        <div className="card-columns" style={{marginTop : "2%"}}>
            {params.skills.map(createCard)}
        </div>
    );
}

export default CardCol;