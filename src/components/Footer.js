import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../images/landing-page-images/facebook-logo.png'
import gmail from '../images/landing-page-images/gmail-icon.png'
import whatsApp from '../images/landing-page-images/whatsApp-icon.png'

export default function Footer() {
    return (
        // <footer style={{ "width": "100%", "marginLeft": "-15px" }}>
        //     <div id="left-bottom-cut"> </div>
        //     <div style={{ "display": "inline-flex", "width": "1275px" }}>
        //         <div style={{ "marginTop": "50px", "marginLeft": "64px" }}>
        //             <h2>Order Now!</h2>
        //             <h2>Deals</h2>
        //         </div>
        //         <h2 style={{ "marginTop": "90px" }}><Link to=
        //             "/aboutus">About Us</Link></h2>

        //         <div style={{ "marginTop": "50px" }}>
        //             <h2>Connect with us on :-</h2>
        //             <h2>Facebook</h2>
        //             <h2>Write to us on :-
        //             varsha.vanpal@gmail.com
        //             </h2>
        //         </div>
        //     </div>
        // </footer>
        <footer style={{
            "width": "100%",
            "backgroundColor": "rgb(0,0,0,0.78)",
            "color": "#DBC268",
        }}>
            <div style={{
                "display": "inline-flex",
                "width": "100%"
            }}>
                <div style={{
                    "marginTop": "50px",
                    "width": "30%",
                    "textAlign": "center"
                }}>
                    <h2><Link to="/signin" style={{ "color": "#DBC268", "fontWeight": "bold" }}>Order Now!</Link></h2>
                    <h2><Link to="/" style={{ "color": "#DBC268", "fontWeight": "bold" }}>Deals</Link></h2>
                </div>
                <div style={{
                    "display": "block",
                    "marginTop": "50px",
                    "textAlign": "center",
                    "width": "30%"
                }}>
                    <h2><Link to="/aboutus" style={{ "color": "#DBC268", "fontWeight": "bold" }}>About Us</Link></h2>
                    <h2><Link to="/contactus" style={{ "color": "#DBC268", "fontWeight": "bold" }}>Contact Us</Link></h2>
                </div>

                <div style={{
                    "marginTop": "50px",
                    "textAlign": "center",
                    "width": "40%"
                }}>
                    <h2 style={{ "fontWeight": "bold" }}>Follow us on :-</h2>
                    <div style={{ "display": "flex", "justify-content": "center" }}>
                        <div>
                            <img src={facebook} height="55px" alt="facebook-icon" />
                            <img src={gmail} height="55px" alt="gmail-icon" />
                            <img src={whatsApp} height="55px" alt="whatsApp-icon" />
                        </div>
                    </div>

                </div>

            </div>
            <div style={{ "marginTop": "50px", "textAlign": "center" }}>
                © copyrights reserved 2021
            </div>
        </footer>
    )
}