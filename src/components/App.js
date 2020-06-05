import React from "react";
import Intro from "./Intro/Intro";
import About, {createEducationDiv, createInfoDiv, createSkillDiv} from "./ObjComponents/ObjDiv";
import Exp from "./ObjArrayComponents/ObjArray"
import profile from "../data/aboutMe";




function App(){
    return (
        <div>
            <Intro/>
            <div id ="profile">
                <About 
                    className = "aboutDiv"
                    title = "About Me" 
                    aboutme ={profile.info} 
                    func = {createInfoDiv} 
                />
                <Exp 
                    
                    className = "expDiv"
                    title = "Work Experiance"
                    aboutme = {profile.exp}
                />
    
                <About 
                    className = "educationDiv"
                    title = "Education" 
                    aboutme ={profile.education} 
                    func = {createEducationDiv}
                />

                

            </div>
        </div>
    )
}

export default App;