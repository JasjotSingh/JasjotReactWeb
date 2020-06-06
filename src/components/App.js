import React from "react";
import Intro from "./Intro/Intro";
import Obj, {createEducationDiv, createInfoDiv} from "./Info/InfoDiv";
import ObjArrayToRegDiv, {ObjArrayToCardCol,ObjArrayToProjDiv} from "./ObjArray"
import profile from "../data/aboutMe";
import Nav from "./Nav/Nav";




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

                <ObjArrayToRegDiv 
                    
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