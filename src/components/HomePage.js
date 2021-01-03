import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Footer from '../components/Footer.js'
import Carousel from './Carousel.js'

export default function HomePage() {
    return (
        <div style={{
            "display": "initial"
        }}>
            {/* <div id="gold-cut-top"> </div> */}

            {/* <div id="splash-img"> </div>
      <div id="splash-img2"> </div>
    <div id="splash-img3"> </div> */}

            {/* <div id="gold-right-cut"> </div> */}
            <Carousel />
            {/* <div id="bottom-right-cut"> </div> */}
            <h1 style={{ "textAlign": "center", "marginTop": "50px" }}>Heading</h1>
            <h2 style={{ "textAlign": "center" }}>Supporting sub-heading</h2>

            <div>
                <Link to='/Register'
                    style={{
                        "padding": "25px", "width": "350px", "borderRadius": "50px", "color": " white",
                        "backgroundColor": "#dbc268", "fontSize": "32px", "boxShadow": "5px", "margin": "auto",
                        "display": "block", "marginTop": "50px", "marginBottom": "50px", "textAlign": "center",
                        "border": "2px solid black"
                    }}>Order Now !</Link>
            </div>

            {/* <div style={{
                "height": "650px", "backgroundColor": "#dbc268", "paddingTop": "50px", "position": "relative"
            }}> */}

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#dbc268" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <div style={{
                    "position": "relative",
                    "top": "-100px"
                }}>
                    <h1 style={{
                        "background": "#dbc268",
                        "textAlign": "center",
                        "marginBottom": "0px",
                    }}>Features and benefits</h1>
                    <div style={{ "display": "flex", "background": "#dbc268" }}>
                        <div style={{ "height": "400px", "width": "30%", "margin": "10px", "backgroundColor": "red", "textAlign": "center", "borderRadius": "15px" }}>
                            <img width="120px" height="120px" />
                            <h2>ORDER YOUR FOOD</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet varius metus. In feugiat, lacus sit
                            amet posuere porttitor, nisl ipsum varius risus, eget varius quam est at orci. Integer magna lectus,
                             imperdiet nec lectus eu, tristique tincidunt sem. Mauris nibh neque, congue ac est ut, suscipit mattis mi.
                        </div>
                        <div style={{ "height": "400px", "width": "30%", "margin": "10px", "backgroundColor": "red", "textAlign": "center", "borderRadius": "15px" }}>
                            <img width="120px" height="120px" />
                            <h2>DELIVER OR PICKUP</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet varius metus. In feugiat, lacus sit
                            amet posuere porttitor, nisl ipsum varius risus, eget varius quam est at orci. Integer magna lectus,
                             imperdiet nec lectus eu, tristique tincidunt sem. Mauris nibh neque, congue ac est ut, suscipit mattis mi.
                        </div>
                        <div style={{ "height": "400px", "width": "30%", "margin": "10px", "backgroundColor": "red", "textAlign": "center", "borderRadius": "15px" }}>
                            <img width="120px" height="120px" />
                            <h2>DELICIOUS RECIPIE</h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet varius metus. In feugiat, lacus sit
                            amet posuere porttitor, nisl ipsum varius risus, eget varius quam est at orci. Integer magna lectus,
                             imperdiet nec lectus eu, tristique tincidunt sem. Mauris nibh neque, congue ac est ut, suscipit mattis mi.
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#dbc268" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>
                </div>


            </div>




            {/* </div> */}

            <div style={{
                "height": "650px", "backgroundColor": "rgb(216 216 216 / 1)", "paddingTop": "50px", "position": "relative"
            }}>
                <h1 style={{ "textAlign": "center", "marginBottom": "50px" }}>Recent Events</h1>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#dbc268" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <Footer />
        </div>
    )
} 