import React from "react";

import Intro from "./Intro/Intro";
import Nav from "./Nav/Nav";

//data import:
import profile from "../Data/aboutMe";

//two ways of making a structure: 
//1. about and Education divs.
import {createEducationDiv, createInfoDiv} from "./Info/InfoDiv";
import Obj from "./Obj";
//2.Exp and Proj divs.
import {ObjArrayToExpRegDiv,ObjArrayToCardCol,ObjArrayToProjDiv} from "./ObjArray"




function App(){
    return (
        <div>
            <Nav />
            <Intro/>
            <div id ="profile">
                <Obj 
                    className = "aboutDiv"
                    title = "About Me"
                    id= "About" 
                    aboutme ={profile.info} 
                    func = {createInfoDiv} 
                />

                <ObjArrayToExpRegDiv 
                    
                    className = "expDiv"
                    id= "Experiance" 
                    title = "Work Experiance"
                    aboutme = {profile.exp}
                />

                <Obj 
                    className = "educationDiv"
                    title = "Education" 
                    id= "Education" 
                    aboutme ={profile.education} 
                    func = {createEducationDiv}
                />

                <ObjArrayToCardCol 
                    
                    className = "skillDiv"
                    id= "Skill" 
                    title = "Technical Skills"
                    aboutme = {profile.skill}
                />

                <ObjArrayToProjDiv 
                    
                    className = "projDiv"
                    id= "Project" 
                    title = "Projects"
                    aboutme = {profile.projects}
                />
            </div>
        </div>
    )
}

export default App;