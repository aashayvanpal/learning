import React from 'react'
import { Link } from 'react-router-dom'


export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
    }

    // componentDidMount() {
    //     console.log('inside componentdidmount')
    //     var filteredItems = this.props.items.filter(item => item.isSelected === true)
    //     this.setState({ cartItems: filteredItems })
    // }


    render() {
        // console.log("check props for cart items to show :", this.props.items.length)
        console.log("check props for cart items to show :", this.props.items)
        return (
            <div className="inner-Cart" style={{
                "backgroundColor": "#DBC268"
            }}>
                <h1 style={{
                    "backgroundColor": "rgb(245, 237, 192)",
                    "border": "2px solid black",
                    "textAlign": "center",
                    "width": "240px",
                    "height": "72px",
                    "paddingTop": "10px",
                    "marginTop": "-32px",
                    "marginLeft": "20px",
                    "marginRight": "20px",
                    "boxShadow": "6px 6px 6px"
                }}> Cart :</h1>
                {
                    this.props.items.filter(item => item.isSelected === true).length === 0 ? (
                        <h1 style={{
                            "margin": "30px",
                            "textAlign": "center"
                        }}>No items in cart</h1>
                    )
                        :
                        (
                            <div style={{ "width": "280px" }}>
                                {
                                    this.props.items.filter(item => item.isSelected === true).map((item, i) => {
                                        return (
                                            <div key={item._id} style={{ "display": "flex", "margin-left": "20px" }}>
                                                <h2 style={{ "padding": "5px" }}>{i + 1}. {item.name}</h2>
                                                <button onClick={() => {
                                                    this.props.resetIsSelected(item._id)
                                                    // this.props.removeItemFromCart(item.id)

                                                }}
                                                    style={{
                                                        "border-radius": "20%",
                                                        "color": "white",
                                                        "background": "red",
                                                        "cursor": "pointer",
                                                        "height": "35px",
                                                        "width": "40px",
                                                        "margin-top": "6px",

                                                    }}><span style={{
                                                        "fontWeight": "bold"
                                                    }}>X</span></button>
                                            </div>
                                        )
                                    })
                                }
                                <Link to='/request'><button
                                    style={{
                                        "padding": "20px",
                                        "marginLeft": "60px",
                                        "marginTop": "20px",
                                        "background": "#f5edc0"
                                    }}
                                    onClick={() => {
                                        // console.log('request button clicked!')
                                        // window.alert('request button clicked')
                                        this.props.requestOrder()
                                    }}>Review Selections</button></Link>
                            </div>
                        )
                }


            </div >
        );
    }
}
