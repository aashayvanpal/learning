import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../images/landing-page-images/facebook-logo.png'
import gmail from '../images/landing-page-images/gmail-icon.png'
import whatsApp from '../images/landing-page-images/whatsApp-icon.png'

export default function Footer() {
    return (
        <footer style={{ "height": "auto" }} >
            <div style={{ "display": "block" }}>
                <div className="footer">
                    <div className="footer-c1" >
                        <div className="footer-c1-box1">
                            <h2><Link to="/register" >Order Now!</Link></h2>
                            <h2><Link to="/Deals" >Deals</Link></h2>
                        </div>

                        <div className="footer-c1-box2">
                            <h2><Link to="/aboutus"   >About Us</Link></h2>
                            <h2><Link to="/contactus" >Contact Us</Link></h2>
                        </div>


                    </div>
                    <div className="footer-c2">
                        <h2>Follow us on :-</h2>
                        <div style={{ "display": "flex", "justifyContent": "center" }}>
                            <img alt="facebook-img" src={facebook} height="55px" />
                            <img alt="gmail-img" src={gmail} height="55px" />
                            <img alt="whatsApp-img" src={whatsApp} height="55px" />
                        </div>
                    </div>
                </div>

                <div style={{
                    "marginTop": "50px",
                    "textAlign": "center",
                    "color": "#dbc268",
                }}>
                    © Copyrights Reserved 2021
                    </div>
            </div>
        </footer>
    )
}