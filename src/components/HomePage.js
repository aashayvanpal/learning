import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../components/Footer.js'
import Carousel from './Carousel.js'
import orderfood from '../images/landing-page-images/order-food.svg'
import cook from '../images/landing-page-images/cook.svg'
import deliver from '../images/landing-page-images/deliver.svg'
// import right from '../images/landing-page-images/right.svg'
// import left from '../images/landing-page-images/left.svg'
import designLeft from '../images/landing-page-images/left-design.png'
import vegImage from '../images/landing-page-images/Veg-image.png'




// <div style={{ "margin": "auto" }}>
// <h1 style={{ "textAlign": "center", "marginTop": "50px", "marginRight": "200px", "fontSize": "70px", "fontFamily": 'Playball' }}>Home is where,</h1>
// <h1 style={{ "textAlign": "center", "fontSize": "70px", "fontFamily": 'Playball', "marginBottom": "200px", "marginLeft": "150px" }}>I'm with food</h1>
// </div>
// <div style={{ "display": "flex", "height": "1000px", "width": "100%", "backgroundColor": "#F5EDC0" }}>

// {/* <h1 style={{ "position": "relative", "width": "100%", "textAlign": "center", "marginTop": "35%" }}>Order now</h1> */}
// <Link to='/Register'
//     style={{
//         "padding": "25px", "width": "350px", "borderRadius": "50px", "color": " white",
//         "backgroundColor": "#dbc268", "fontSize": "32px", "boxShadow": "5px", "margin": "auto",
//         "display": "block", "marginTop": "395px", "textAlign": "center",
//         "border": "2px solid black", "fontFamily": "Old Standard TT", "fontWeight": "bold"
//     }}>ORDER NOW !</Link>
// <img src={designLeft} style={{ "float": "right", "position": "absolute", "left": "0px", "width": "100%" }} />

// {/* <img src={right} style={{ "position": "absolute", "right": "0px" }} />
// <img src={left} style={{ "float": "right", "position": "absolute", "left": "0px" }} /> */}

// </div >


// <div>
// <img style={{
//     "display": "block",
//     "marginLeft": "auto",
//     "marginRight": "auto"
// }} src={require("../images/landing-page-images/Veg-image.png")} alt="veg image" />
// <h3 style={{ "textAlign": "center", "marginBottom": "250px" }}>Pure Vegetarian</h3>
// </div>


// making responsive: 
// problem with footer
export default function HomePage() {
    return (
        <Container fluid>
            <Row>
                <Col>

                    <div className="homepage" style={{ "width": "100%" }}>
                        {/* <div id="gold-cut-top"> </div> */}

                        {/* <div id="splash-img"> </div>
            <div id="splash-img2"> </div>
            <div id="splash-img3"> </div> */}

                        {/* <div id="gold-right-cut"> </div> */}
                        <Carousel />
                        {/* <div id="bottom-right-cut"> </div> */}
                        {/* <h1 style={{ "textAlign": "center", "marginTop": "50px", "fontSize": "70px", "fontFamily": 'Playball' }}>Home is where,</h1>
            <h1 style={{ "textAlign": "center", "fontSize": "70px", "fontFamily": 'Playball', "marginBottom": "200px" }}>I'm with food</h1>

            <div style={{ "display": "flex", "margin": "auto" }}>

                <img src={left} />

                <div >
                    <Link to='/Register'
                        style={{
                            "padding": "25px", "width": "350px", "borderRadius": "50px", "color": " white",
                            "backgroundColor": "#dbc268", "fontSize": "32px", "boxShadow": "5px", "margin": "auto",
                            "display": "block", "marginTop": "50px", "marginBottom": "100px", "textAlign": "center",
                            "border": "2px solid black", "fontFamily": "Old Standard TT", "fontWeight": "bold"
                        }}>ORDER NOW !</Link>
                </div>
                <img src={right} />
            </div> */}

                        {/* <div>
                            <div style={{ "position": "relative" }}>
                                <img src={designLeft} alt="designleft" style={{ "position": "absolute", "left": "0px", "zIndex": "2", "width": "100%", "height": "100%" }} />

                                <div style={{ "display": "block", "height": "1000px", "width": "100%", "backgroundColor": "#F5EDC0" }}>
                                    <div style={{ "margin": "auto", "display": "block", "position": "absolute", "left": "25%", "right": "auto" }}>
                                        <h1 style={{ "textAlign": "center", "marginTop": "50px", "marginRight": "200px", "fontSize": "70px", "fontFamily": 'Playball' }}>Home is where,</h1>
                                        <h1 style={{ "textAlign": "center", "fontSize": "70px", "fontFamily": 'Playball', "marginBottom": "200px", "marginLeft": "150px" }}>I'm with food</h1>
                                    </div>

                                    <Link to='/Register' id="OrderNow"
                                    >ORDER NOW !</Link>
                                    <div style={{
                                        "position": "absolute",
                                        "left": "40%",
                                        "top": "55%"
                                    }}>
                                        <img style={{
                                            "display": "block",
                                            "marginLeft": "auto",
                                            "marginRight": "auto"

                                        }} src={vegImage} alt="veg-img" />
                                        <h3 style={{ "textAlign": "center", "marginBottom": "250px" }}>Pure Vegetarian</h3>
                                    </div>
                                </div >
                            </div >

                        </div > */}

                        <div style={{ "position": "relative" }}>
                            <img src={designLeft} alt="designleft" id="designLeft" />
                            <div style={{ "display": "block", "height": "1000px", "width": "100%", "backgroundColor": "#F5EDC0" }}>
                                <div className="center-align">
                                    <h1 className="h1-heading" id="txt1">Home is where,</h1>
                                    <h1 className="h1-heading" id="txt2">I'm with food</h1>
                                    <Link to='/Register' id="OrderNow"
                                    >ORDER NOW !</Link>
                                </div>
                                <div id="vegImg-placement">
                                    <img id="vegImg" src={vegImage} alt="veg-img" />
                                    <h3 style={{ "textAlign": "center", "marginBottom": "250px" }}>Pure Vegetarian</h3>
                                </div>
                            </div >
                        </div >


                        <div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#dbc268" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
                            <div style={{
                                "position": "relative",
                            }}>
                                <h1 style={{
                                    "textAlign": "center",
                                    "marginBottom": "80px",
                                    "fontFamily": 'Playball',
                                    "fontSize": "90px"
                                }}>Benefits and Features</h1>
                                {/* <div style={{ "height": "400px", "width": "30%", "margin": "10px", "backgroundColor": "#DDB24C", "textAlign": "center", "borderRadius": "15px" }}>
                            <img width="120px" height="120px" />
                            <h2>ORDER YOUR FOOD</h2>
                            Fully Customized delicasies according to your taste
                            </div>
                            <div style={{ "height": "400px", "width": "30%", "margin": "10px", "backgroundColor": "#DDB24C", "textAlign": "center", "borderRadius": "15px" }}>
                            <img width="120px" height="120px" />
                            <h2>DELIVER OR PICKUP</h2>
                            Services that we provide depend on the type of event and are fullfilled according to your convinience
                            </div>
                            <div style={{ "height": "400px", "width": "30%", "margin": "10px", "backgroundColor": "#DDB24C", "textAlign": "center", "borderRadius": "15px" }}>
                            <img width="120px" height="120px" />
                            <h2>DELICIOUS RECIPIE</h2>
                            
                            Homely, hygenic and tasty food is superwised by our expert chef Varsha Vanpal
                        </div> */}

                                {/* <div style={{ "display": "flex" }}>
                                    <div style={{ "display": "flex", "backgroundColor": "#F5EDC0", "marginBottom": "50px" }}>

                                        <div className="realCard">
                                            <img src={orderfood} alt="orderfoodImage" />
                                            <div className="card1">
                                                <h2>ORDER YOUR FOOD</h2>
                                                <h4>Fully Customized delicasies according to your taste</h4>
                                            </div>
                                        </div>

                                        <div className="realCard">
                                            <img src={deliver} alt="deliverIcon" />
                                            <div className="card2">
                                                <h2>DELIVER  OR  PICKUP</h2>
                                                <h4>Services that we provide depend on the type of event and are fullfilled according to your convinience</h4>
                                            </div>
                                        </div>

                                        <div className="realCard">
                                            <img src={cook} alt="cookImage" />
                                            <div className="card1">
                                                <h2 >DELICIOUS RECIPIE</h2>
                                                <h4>Homely, hygenic and tasty food is superwised by our expert chef Varsha Vanpal</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#dbc268" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg> */}


                                <div className="container">
                                    <div className="realCard">
                                        <img src={orderfood} />
                                        <div className="card1">
                                            <h2>ORDER YOUR FOOD</h2>
                                            <h4>Fully Customized delicasies according to your taste</h4>
                                        </div>
                                    </div>

                                    <div className="realCard">
                                        <img src={deliver} />
                                        <div className="card2">
                                            <h2>DELIVER  OR  PICKUP</h2>
                                            <h4>Services that we provide depend on the type of event and are fullfilled according to your convinience</h4>
                                        </div>
                                    </div>

                                    <div className="realCard">
                                        <img src={cook} />
                                        <div className="card1">
                                            <h2 >DELICIOUS RECIPIE</h2>
                                            <h4>Homely, hygenic and tasty food is superwised by our expert chef Varsha Vanpal</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>




                        {/* </div> */}

                        {/* <div style={{
                "height": "650px", "backgroundColor": "rgb(216 216 216 / 1)", "paddingTop": "50px", "position": "relative"
            }}>
                <h1 style={{ "textAlign": "center", "marginBottom": "50px" }}>Recent Events</h1>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#dbc268" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,74.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg> */}



                        <Footer />
                    </div>
                </Col>
            </Row>
        </Container>

    )
} 