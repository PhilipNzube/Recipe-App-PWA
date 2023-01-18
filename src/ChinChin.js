import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chin from './Images/chin.jpeg';

export default function ChinChin() {
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
                        <h2> Recipes for Chin-Chin </h2>
                        <img alt="" id="ChinImage" src={Chin} />
                        <div id="main">
                            <p id="in">INGREDIENTS REQUIRED</p>
                            <div id="source">
                                <p> 20g of Flour</p>
                                <p> Sugar</p>
                                <p>Butter</p>
                                <p> Baking Powder</p>
                                <p>Eggs</p>
                                <p> Nut Meg</p>
                                <p> Milk</p>


                            </div>
                            <h2> Direction for making Chin-Chin</h2>
                            <ul>
                                <li> Add flour , baking powder,butter, Nutmeg(optional) and sugar to a bowl and mix it until it looks like a breadcrumbs</li>
                                <li> Crack eggs in to a bowl, whisk it and add to the above  </li>
                                <li> Add little quantity of water to the flour until it is slightly strectchy but not sticky and avoid adding too much water to the dough</li>
                                <li> Cut the dough into smaller chunk and roll out each chunk on a flat surface and cut it to desired shapes</li>
                                <li> Add oil in a pan and allow the oil to preheat until it is hot </li>
                                <li> Then fry the dough unitl it is exhausted</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}