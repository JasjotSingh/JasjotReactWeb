import React from "react";
import SkillCardDiv from "./Card";

function createCard(params) {
    return(
        <SkillCardDiv
            params = {params}
        />
    );
}

function CardCol(params) {
    return(
        <div className="card-columns">
            {params.map(createCard)}
        </div>
    );
}

export default CardCol;