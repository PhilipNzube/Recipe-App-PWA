import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Beanssoup() {
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
                                <a id="Contact" href={url}>CONTACT</a>

                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="wh">
                    <center>
                        <h1> Contacts </h1>
                        <fieldset id="first">
                            <legend > Instagram</legend>
                            <p> Contact us on Instagram at</p><br />
                            <p><a href={url}>  @Becca Recipies</a></p>
                        </fieldset>
                        <fieldset id="second">
                            <legend > Gmail </legend>
                            <p> Contact us on Gmail at</p><br />
                            <p><a href="beccarecipies@gmail.com"> beccarecipies@gmail.com</a></p>
                        </fieldset>
                    </center>
                </div>
            </div>
        </>
    )
}