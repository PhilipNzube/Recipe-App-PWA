import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pie from './Images/meatpie.jpeg';

export default function Meatpie() {
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
                            <ul>
                                <a id="Home" href={url} onClick={GoHome}>HOME</a>
                                <a id="About" href={url}>ABOUT </a>
                                <a id="Contact" href={url} onClick={GoToContact}>CONTACT</a>

                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="wh">
                    <center>
                        <h2> Recipes for Meatpies </h2>
                        <img id="MeatpieImage" src={Pie} alt=""/>
                        <div id="main">
                            <p id="in"><input type="checkbox" id="radio"/> Ingredient Required</p>
                            <div id="source">
                                <p> Flour </p>
                                <p> Baking Powder</p>
                                <p> Butter </p>
                                <p> Blended Meat</p>
                                <p> Carrot</p>
                                <p>Onions</p>
                                <p>salt</p>
                                <p> Seasoning</p>


                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}