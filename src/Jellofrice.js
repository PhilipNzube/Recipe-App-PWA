import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import jellof from "./Images/jollof.jpeg";

export default function Jellofrice() {
    useEffect(() => {
        setTimeout(() => {
            document.body.style.overflowY = "hidden";
            document.getElementById("Container").style.display = "block";
            document.getElementById("Loader").style.display = "none";
            setTimeout(() => {
                document.body.style.overflowY = "visible";
            }, 1500);
        }, 1000);
    }, []);
    let url = null;
    const Navigate = useNavigate();
    const GoHome = () => {
        Navigate("/");
    }
    const GoToContact = () => {
        Navigate("/Contact");  
    }
    const Show = () => {
        document.getElementById("NAVIGATION").style.display = "block";
    }
    const Hide = () => {
        document.getElementById("NAVIGATION").style.display = "none";
    }

    return (
        <>
            <div id="Loader"><center>LOADING...</center></div>
            <div id="Container">
                <header onMouseLeave={Hide}>
                    <center> <h1 className="h" onMouseOver={Show}>BECCA RECIPIES<span className="com">.COM</span></h1></center>
                    <nav id="NAVIGATION">
                        <div id="div">
                            <ul id="HAC">
                                <a id="Home" href={url} onClick={GoHome}>HOME</a>
                                <a id="About" href={url}>ABOUT </a>
                                <a id="Contact" href={url} onClick={GoToContact}>CONTACT</a>

                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="wh">
                    <center>
                        <h2> Recipes for Jollof Rice </h2>
                        <img id="JellofImage" src={jellof} alt=""/>
                        <div id="main">
                            <p id="in"><input type="checkbox" id="radio"/> Ingredient Required</p>
                            <div id="source">
                                <p> 2 Cups of Rice</p>
                                <p> Tomato paste </p>
                                <p> Vegetable Oil </p>
                                <p> Seasoning </p>
                                <p> Salt </p>
                                <p>jollof rice spices</p>
                                <p> Carrot (optional) </p>
                                <p> onion (optional)</p>


                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}