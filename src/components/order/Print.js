import React from 'react'

// Displaying image to center css :
// display: block;
//   margin-left: auto;
//   margin-right: auto;
//   width: 50%;


export default class OrderPrint extends React.Component {
    constructor() {
        super()
        this.state = {
            order: {},
            total: 0
        }

    }


    componentDidMount() {
        console.log("inside component did mount")
        // const order = JSON.parse(localStorage.getItem('order'))
        // console.log("Print order :", order)
        // console.log("order items :", order.items)
        // this.setState({ order })
        // console.log("state order :", this.state.order)
        // console.log("state order fullname :", this.state.order.fullName)
        // this.setState({
        //     fullName: this.state.order.fullName
        // })

        let order = JSON.parse(localStorage.getItem('order'))
        this.setState({ order })
        console.log("order :", order)
        console.log("state of order :", this.state.order)

    }

    render() {
        // const header = document.getElementsByClassName("header")
        // // header.remove()
        // console.log("header :", header)
        const { fullName, items, eventDate, phoneNumber, id } = JSON.parse(localStorage.getItem('order'))

        console.log("items", items)
        console.log("isArray items", Array.isArray(items))
        console.log("this.state.order", this.state.order)
        return (

            <div style={{
                "border": "5px solid black",
                "padding": "30px",
                "height": "1400px",
                "float": "right",
                "backgroundColor": "#f5edc0",
                "pageBreakAfter": "always",
                "marginTop": "20px",
                "marginBottom": "120px"

            }}>
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap" rel="stylesheet" />
                <h1 style={{ "fontFamily": " 'Lato' , sans-serif", "fontSize": "60px", "textAlign": "center", "marginTop": "25px", "marginBottom": "25px" }}>Aaswad Caterers</h1>

                <h4 style={{ "marginBottom": "50px" }}>
                    In an attempt to go paperless, we are sending all the billing estimates over WhatsApp.<br />
                    Your estimate is as follows : -
                </h4>
                <h3>Name   : {fullName}</h3>
                <h3>Mobile : {phoneNumber}</h3>
                <h3>Date   : {eventDate}</h3>
                <h3>
                    <table
                        style={{
                            "border": "1px solid black",
                            "border - collapse": "collapse",
                            "textAlign": "center",
                            "width": "90%",
                            "margin": "50px 0px 50px 50px",
                            "padding": "20px"
                        }}>
                        <thead style={{
                            "fontWeight": "bold",
                            "border": "1px solid black",
                            "border-collapse": "collapse"
                        }}>
                            <td style={{
                                "border": "1px solid black",
                                "border-collapse": "collapse"
                            }}>Sl No.</td>
                            <td style={{
                                "border": "1px solid black",
                                "border-collapse": "collapse"
                            }}>Particulars</td>
                            <td style={{
                                "border": "1px solid black",
                                "border-collapse": "collapse"
                            }}>Quantity</td>
                            <td style={{
                                "border": "1px solid black",
                                "border-collapse": "collapse"
                            }}>Rate</td>
                            <td style={{
                                "border": "1px solid black",
                                "border-collapse": "collapse"
                            }}>Amount (in INR)</td>
                        </thead>
                        <tbody>
                            {
                                items.map((item, i) => {
                                    return (
                                        <tr>
                                            <td style={{
                                                "border": "1px solid black",
                                                "border-collapse": "collapse"
                                            }}>{i + 1}</td>
                                            <td style={{
                                                "border": "1px solid black",
                                                "border-collapse": "collapse",
                                                "textAlign": "left",
                                                "paddingLeft": "20px"
                                            }}>{item.name}</td>
                                            <td style={{
                                                "border": "1px solid black",
                                                "border-collapse": "collapse"
                                            }}>{item.quantity} {item.measured}.</td>
                                            <td style={{
                                                "border": "1px solid black",
                                                "border-collapse": "collapse"
                                            }}>&#x20B9; {item.price}/-</td>
                                            <td style={{
                                                "border": "1px solid black",
                                                "border-collapse": "collapse"
                                            }}>&#x20B9; {item.price * item.quantity}/-</td>

                                        </tr>)
                                })
                            }
                            <tr>
                                <td style={{
                                    "border": "1px solid black",
                                    "textAlign": "right",
                                    "paddingRight": "80px"
                                }} colspan="5"><b>Total:
                        &#x20B9; {this.state.order.total}/-</b></td>
                            </tr>
                        </tbody>
                    </table >
                </h3>



                <h4 style={{ "fontFamily": "'Lato' , sans-serif" }}>Contact :-<br />
                        Varsha Vanpal <br /> Mobile : 9742814239<br />
                        Email : varsha.vanpal@gmail.com <br /></h4><br />


                <br />
                {/* <img src="https://static.toiimg.com/photo/msid-66475760/66475760.jpg?952246" alt="" width="45%" height="300px"
                    style={{
                        "marginRight": "50px", "marginLeft": "30px"
                    }} />

                <img src="https://i.pinimg.com/originals/8f/f5/ec/8ff5ec000c3b3ac91d12f88a6d0fd39c.jpg" alt="" width="45%" height="300px"
                    style={{ "marginLeft": "auto", "marginRight": "auto" }} /><br /> */}
                <br />
                <br />
                {/* <h3 style={{ "textAlign": "center" }}><b>
                    Happy Diwali</b>
                </h3><br /> <br /> */}


                <img src={require("../../images/food-items-images/3.jpg")} alt="" width="45%" height="300px"
                    style={{
                        "marginRight": "50px", "marginLeft": "30px"
                    }} />

                <br /> <br /><br /> <br />
                <h5 style={{ "textAlign": "right" }}><b>
                    OrderID :{id}</b>
                </h5><br /> <br />

            </div >
        )
    }
}