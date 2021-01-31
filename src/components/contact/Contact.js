import React from 'react'
import MessageForm from './Form.js'
import Footer from '../Footer.js'

export default class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <div style={{ "height": "366px", "backgroundColor": "#e8d793" }}>
                    <img src={require("../../images/Contact image.svg")} alt="" width="100%" height="366px" />

                    <h1 style={{
                        "textAlign": "center",
                        "color": "white",
                        "marginTop": "-115px",
                        "fontSize": "100px",
                        "fontWeight": "bold"
                    }}>Contact Us</h1>
                </div>
                <div style={{ "height": "133px", "marginBottom": "20px" }}>
                    <img src={require("../../images/curve-top.svg")}
                        style={{
                            "width": "100%",
                            "position": "relative",
                            "left": "-12px"
                        }}
                        alt="" />
                    <h1 style={{
                        "textAlign": "center",
                        "position": "relative",
                        "top": "-100px"
                    }}>Get in Touch</h1>
                </div>

                <div style={{
                    "display": "flex"
                }}>
                    <div
                        style={{
                            "width": "565px",
                            "height": "567px",
                            "backgroundColor": "#E8D794",
                            "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            "borderRadius": "200px 200px 41px 41px",
                            "margin": "10px",
                            "marginTop": "150px"
                        }}
                    >
                        <h1 style={{
                            "marginBottom": "60px",
                            "marginTop": "50px",
                            "textAlign": "center"
                        }}>Contact Details</h1>
                        <div>
                            <div style={{ "display": "flex" }}>
                                <img src={require("../../images/map-image.png")} alt="" width="60px" height="60px" style={{ "margin": "20px" }} />
                                <h1 style={{
                                    "fontSize": "30px"
                                }}>#34 Soundarya, 1st Main ,            4th Cross, GMR Layout , Geddalahalli, Sanjaynagar, Bangalore -560094</h1>
                            </div>
                            <p style={{ "textAlign": "center", "fontSize": "22px" }}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/33,+3rd+Main+Rd,+Geddalahalli,+KEB+Layout,+GMR+Layout,+Bengaluru,+Karnataka+560094/@13.0316457,77.5764478,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae17c22c50239b:0x9595acf3f2c457cc!8m2!3d13.0316405!4d77.5786365">Get Directions</a>
                            </p>

                        </div>

                        <div style={{ "display": "flex" }}>

                            <img src={require("../../images/whatsApp-image.png")} alt="" width="60px" height="60px" style={{ "margin": "20px" }} />
                            <h1 style={{
                                "fontSize": "30px",
                                "marginTop": "30px"
                            }}>+91 9743419673</h1>
                        </div>

                        <div style={{ "display": "flex" }}>
                            <img src={require("../../images/Email-icon.png")} alt="" width="60px" height="60px" style={{ "margin": "20px" }} />
                            <h1 style={{
                                "fontSize": "30px",
                                "marginTop": "30px"
                            }}>varsha.vanpal@gamil.com</h1>
                        </div>
                    </div>

                    <img src={require("../../images/division.png")} alt="" style={{ "margin": "10px 10px 20px 10px" }} />
                    <MessageForm />
                </div>

                <div style={{
                    "position": "relative",
                    "width": "1264px",
                    "height": "850px",
                    "left": "-10px",
                    "backgroundColor": "rgb(219, 194, 104)"
                }}>
                    <h1 style={{ "textAlign": "center" }}>Our Location</h1>
                    <img src={require("../../images/map-location.png")} alt="" style={{ "display": "block", "marginLeft": "auto", "marginRight": "auto" }} />

                </div>
                <Footer />
            </div>
        )
    }
}

