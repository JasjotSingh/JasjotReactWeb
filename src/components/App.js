import React from "react";
import Intro from "./Intro/Intro";
import Obj, {createEducationDiv, createInfoDiv} from "./Info/InfoDiv";
import ObjArrayToRegDiv, {ObjArrayToCardCol} from "./ObjArray"
import profile from "../data/aboutMe";




function App(){
    return (
        <div>
            <Intro/>
            <div id ="profile">
                <Obj 
                    className = "aboutDiv"
                    title = "About Me" 
                    aboutme ={profile.info} 
                    func = {createInfoDiv} 
                />
                <ObjArrayToRegDiv 
                    
                    className = "expDiv"
                    title = "Work Experiance"
                    aboutme = {profile.exp}
                />
    
                <Obj 
                    className = "educationDiv"
                    title = "Education" 
                    aboutme ={profile.education} 
                    func = {createEducationDiv}
                />

                {/* <ObjArrayToCardCol 
                    
                    className = "skillDiv"
                    title = "Technical Skills"
                    aboutme = {profile.skill}
                />      
                 */}

            </div>
        </div>
    )
}

export default App;