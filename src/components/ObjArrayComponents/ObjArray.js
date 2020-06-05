import React from "react";
import Heading from "../Heading";
import ExpDiv from "./ExpDiv";

function createExpDiv(params) {
    return (
        <ExpDiv 
            name = {params.Name}
            location = {params.Location}
            time = {params.Time}
            position = {params.Position}
            innerClass = "innerExpDiv"
            responsibility = {params.Responsibility}
        />
    );
}

function createSkillDiv(params) {
    return (
        <p></p>
    );
}

function Exp(params) {
    let [func, setFunc] = React.useState(null);

    function setRightFunc(title) {
        switch(title){
            case "Techincal Skills":
                func = createSkillDiv;
                break;
            case "Work Experiance":
                func = createExpDiv;
                break;
            default:
                console.log(title)

        }
    }
    return (
        <div className={params.className}>
            <Heading title = {params.title}/>
            {setRightFunc(params.title)}
            <hr></hr>
            {params.aboutme.map(func)}
        </div>
    );
}

export default Exp;