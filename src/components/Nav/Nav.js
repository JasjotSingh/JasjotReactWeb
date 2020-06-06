import React from "react";
import classnames from "classnames";

function Nav(params) {
    let[scroll, setScroll] = React.useState(false);
    let[largeWindow, setLargeWindow] = React.useState(true);
    let[clicked, setClicked] = React.useState(false);

    if(document.body.clientWidth  < 950){
        largeWindow = false;
    }

    const iconClass = classnames("fa" ,"fa-bars");
    const navClass = classnames({
        navDiv : largeWindow && scroll,
        navBarDiv : largeWindow && !scroll,
        hideLinks: !largeWindow,
        showLinks: !largeWindow && clicked
    })
    const respIconClass = classnames({
        hideIcon : largeWindow,
        showIcon : !largeWindow
    })

    function getScroll(e){
        
        if(e.path[1].scrollY > 100){
            setScroll(true);
        }
        else{
            setScroll(false);
        }
    }

    function dropDown(){
        setClicked(!clicked);
    }

    function getSize(e){
        
        if(e.currentTarget.innerWidth < 950){
            setLargeWindow(false);
        }
        else{
            setLargeWindow(true);
            setClicked(false);
        }
    }
    
    document.onscroll = getScroll;
    window.onresize = getSize;
    window.onreadystatechange = getSize;

    return(
        
        <div id="navbar" onLoad={getSize} className = {navClass}>
            
            <a href="#Home">HI</a>

            <a href="#About">About</a>
        
            <a href="#Experiance">Experiance</a>
        
            <a href="#Education">Education</a>
        
            <a href="#Skill">Skills</a>
        
            <a href="#Project">Projects</a>
        
            <button className = {respIconClass} onClick={dropDown} >
                <i className={iconClass}></i>
            </button>
        </div>
    );
}

export default Nav;