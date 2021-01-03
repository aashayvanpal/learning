import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer style={{ "width": "1275px", "marginLeft": "-15px" }}>
            <div id="left-bottom-cut"> </div>
            <div style={{ "display": "inline-flex", "width": "1275px" }}>
                <div style={{ "marginTop": "50px", "marginLeft": "64px" }}>
                    <h2>Order Now!</h2>
                    <h2>Deals</h2>
                </div>
                <h2 style={{ "marginTop": "90px" }}><Link to=
                    "/aboutus">About Us</Link></h2>

                <div style={{ "marginTop": "50px" }}>
                    <h2>Connect with us on :-</h2>
                    <h2>Facebook</h2>
                    <h2>Write to us on :-
                    varsha.vanpal@gmail.com
                    </h2>
                </div>
            </div>
        </footer>
    )
}