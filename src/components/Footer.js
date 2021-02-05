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
        <footer className="footer">
            <div style={{
                "display": "flex"
            }}>
                <div className="footer-c1" >
                    <div className="footer-c1-box1">
                        <h2><Link to="/" >Order Now!</Link></h2>
                        <h2><Link to="/" >Deals</Link></h2>
                    </div>

                    <div className="footer-c1-box2">
                        <h2><Link to="/aboutus"   >About Us</Link></h2>
                        <h2><Link to="/contactus" >Contact Us</Link></h2>
                    </div>

                </div>
                <div className="footer-c2">

                    <h2 style={{ "fontWeight": "bold", "width": "100%" }}>Follow us on :-</h2>
                    <div style={{ "display": "flex", "justify-content": "center" }}>
                        <div>
                            <img src={facebook} height="55px" />
                            <img src={gmail} height="55px" />
                            <img src={whatsApp} height="55px" />
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