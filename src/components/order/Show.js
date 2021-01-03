import React from 'react'
import axios from '../../config/axios.js'
import { Link } from 'react-router-dom'

export default class ItemShow extends React.Component {
    constructor() {
        super()
        this.state = {
            order: {},
            id: '',
            fullName: '',
            address: '',
            email: '',
            eventDate: '',
            eventName: '',
            numberOfPeople: '',
            eventTime: '',
            homeDelivery: false,
            phoneNumber: '',
            service: false,
            items: [],
            total: 0
        }

    }

    generateBill() {
        console.log("Print button clicked!")
        window.open(window.location.href + "/print", '_blank')

    }

    componentDidMount() {
        console.log('Order Show component mounted !')
        console.log('this.params', this.params)
        console.log('id to show', window.location.href.split('/')[4])
        const id = window.location.href.split('/')[4]
        axios.get(`/orders/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const order = response.data
                this.setState({ order })

                console.log('Showing :', this.state.order)
                console.log('fullname :', this.state.order.customer.fullName)
                console.log('id :', this.state.order._id)

                let id = this.state.order._id
                let fullName = this.state.order.customer.fullName
                let address = this.state.order.customer.address
                let email = this.state.order.customer.email
                let eventName = this.state.order.customer.eventName
                let numberOfPeople = this.state.order.customer.numberOfPeople
                console.log('numberOfPeople :', this.state.order.customer.numberOfPeople)

                let eventTime = this.state.order.customer.eventTime
                let homeDelivery = this.state.order.customer.homeDelivery
                console.log('homeDelivery', homeDelivery)
                let phoneNumber = this.state.order.customer.phoneNumber
                let service = this.state.order.customer.service
                let items = this.state.order.items
                let status = this.state.order.status
                let eventDate = this.state.order.customer.eventDate.toString()
                // console.log("Event Date check:", eventDate)
                // console.log("Event Date check typeof:", typeof (eventDate))
                // console.log("Event Date check here:", eventDate.substr(8, 2) + "/" + eventDate.substr(5, 2) + "/" + eventDate.substr(0, 4))
                eventDate = eventDate.substr(8, 2) + "/" + eventDate.substr(5, 2) + "/" + eventDate.substr(0, 4)
                // console.log("The Date is :",eventDate.subStr(8, 2) + "/" + eventDate.subStr(5, 2) + "/" + eventDate.subStr(0, 4))
                // console.log("The Date is :",eventDate.subString(0,5))

                // const dateConverted = eventDate.subStr(8, 2) + "/" + eventDate.subStr(5, 2) + "/" + eventDate.subStr(0, 4)
                // console.log("date converted:", dateConverted)

                this.setState({
                    id,
                    fullName,
                    address,
                    email,
                    eventDate,
                    eventName,
                    numberOfPeople,
                    eventTime,
                    homeDelivery,
                    phoneNumber,
                    service,
                    items,
                    status,
                })

                const orderPrint = {
                    fullName: this.state.fullName,
                    eventDate: this.state.eventDate,
                    phoneNumber: this.state.phoneNumber,
                    items: this.state.items,
                    total: this.state.total,
                    id: this.state.id

                }
                localStorage.setItem("order", JSON.stringify(orderPrint))
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        // const { customer.fullName } = this.state.order
        // console.log("state of order :", this.state.order)
        console.log("state of order.customer :", this.state.order.customer)
        let customer = this.state.order.customer
        console.log('customer :', customer)

        // console.log('customer.fullName :', customer.fullName)
        // console.log('customer spread :', ...customer)
        // const { fullName } = customer
        // console.log("this.state.order.customer :", this.state.order.customer)
        // const { fullName } = this.state.order.customer

        // console.log("this.state.order.customer :", this.state.order.customer)
        // this.state.order.customer.fullName
        // console.log(this.state.order)
        // console.log("display item? :", display)
        // <h1>Item Name :{name}</h1>
        //         <h1>Price :{price}</h1>
        //         <h1>Category :{category}</h1>
        //         <h1>Image-URL :{imgUrl}</h1>
        //         <h1>Display :{display?('True'):('False')}</h1>
        //         <Link to='/items'><button>Back</button></Link>

        return (
            <div style={{ "display": "flex" }}>
                <div>
                    <h1>Showing order details:-</h1>
                    <h1>Customer Name : {this.state.fullName}</h1>
                    <h1>Event Name : {this.state.eventName}</h1>
                    <h1>Number of People : {this.state.numberOfPeople}</h1>
                    <h1>Event Date : {this.state.eventDate}</h1>
                    <h1>Event Time : {this.state.eventTime}</h1>
                    <h1>Phone Number : {this.state.phoneNumber}</h1>
                    <h1>Address : {this.state.address}</h1>
                    <h1>Email : {this.state.email}</h1>
                    <h1>Service : {this.state.service ? "Yes" : "No"}</h1>
                    <h1>Home Delivery : {this.state.homeDelivery ? "Yes" : "No"}</h1>
                    <h1>Status : {this.state.status}</h1>
                    <h1>OrderID : {this.state.id}</h1>
                    <h1><Link to="/orders"><button>Back</button></Link></h1>
                </div>

                <div style={{ "border": "2px solid black", "padding": "20px" }}>
                    <h1>Listing Items - {this.state.items.length}</h1>

                    <table style={{ "borderCollapse": "collapse", "border": "2px solid black" }}>
                        <thead style={{ "border": "2px solid black" }}>
                            <tr>
                                <td>Sl No.</td>
                                <td>Item Name</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map((item, i) => {
                                    this.state.total += item.quantity * item.price

                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity} {item.measured}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity * item.price}</td>
                                        </tr>
                                    )

                                    // return <h1 key={item.id}><li>{item.name} - {item.quantity} - {item.price} -{item.quantity * item.price}</li></h1>
                                })
                            }
                        </tbody>
                    </table>
                    <h1>Grand Total = {this.state.total}</h1>
                    <button onClick={this.generateBill}>Generate Bill</button>
                </div>
            </div>
        )
    }
}