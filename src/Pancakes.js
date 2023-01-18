import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pancake from "./Images/pancakes.jpeg"

export default function Pancakes() {
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
                    <center> <h1 className="h" onMouseOver={Show}>BECCA RECIPES<span className="com">.COM</span></h1></center>
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
                        <h2> Recipes for Pancakes </h2>
                        <img alt="" src={pancake} id="PancakeImage" />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 3 cup of Flour </p>
                                <p> 5 tablespoons of sugar</p>
                                <p>3 tablespoons of powder Milk </p>
                                <p>2  Eggs</p>
                                <p> 1 teaspoon of dry Pepper</p>
                                <p> Vegetable oil</p>



                            </div>

                        </div>
                        <h2> Direction for Dough</h2>
                        <ul>
                            <li> Add the flour to a  bowl</li>
                            <li> Add the Sugar to the bowl</li>
                            <li> Add the Pepper to the bowl</li>
                            <li> whisk the eggs with the milk in a seperate bowl </li>
                            <li> Mix the above all together </li>
                            <li> Then add some water until the mixture is semi-liquid and allow it to rest for 2 minutes</li>
                        </ul>
                        <h2> Direction for making Pancakes</h2>
                        <ul>
                            <li>Heat a Frying Pan for a minute</li>
                            <li> Add 1 teaspoon of oil to the Frying pan and spread it round the frying pan with a brush</li>
                            <li>Add appropriate amount of the dough that was prepared earlier in the pan</li>
                            <li> When bubbles starts to form ontop and the edge look dry flip the pancakes to other side</li>
                            <li> After filping Wait for two minutes then remove the pancake from the pan</li>
                            <li> Repeat the above process until the dough is finished</li>
                        </ul>
                    </center>
                </div>
            </div>
        </>
    )
}