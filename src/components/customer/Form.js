import React from 'react'

export default class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            queries: '',
            eventName: '',
            numberOfPeople: '',
            eventDate: '',
            eventTime: '',
            homeDelivery: false,
            service: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleCheckboxChangeService = this.handleCheckboxChangeService.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckboxChange = () => {
        console.log('this.state.homeDelivery before:', this.state.homeDelivery)
        let change = !this.state.homeDelivery
        console.log('change:', change)
        this.setState({ homeDelivery: change })
        // console.log('this.state.homeDelivery after:', this.state)
        console.log('this.state.homeDelivery after:', this.state.homeDelivery)
    }

    handleCheckboxChangeService = () => {
        console.log('this.state.homeDelivery before:', this.state.service)
        let change = !this.state.service
        console.log('change:', change)
        this.setState({ service: change })
        // console.log('this.state.homeDelivery after:', this.state)
        console.log('this.state.homeDelivery after:', this.state.service)
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("submit enquiry button clicked! check this ")

        const customer = {
            fullName: this.state.fullName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            queries: this.state.queries,
            eventName: this.state.eventName,
            numberOfPeople: this.state.numberOfPeople,
            eventDate: this.state.eventDate,
            eventTime: this.state.eventTime,
            homeDelivery: this.state.homeDelivery,
            service: this.state.service
        }
        // this.props.item && (item.id = this.props.item._id)

        console.log('props :', this.props)


        console.log("customer Data: ", customer)
        this.props.handleCustomerSubmit(customer)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ "border": "2px solid black", "padding": "50px" }}>
                <h1>Add Your Details </h1><br />
                <label>
                    <input name="fullName" value={this.state.fullName} onChange={this.handleChange} placeholder="Full Name" />
                </label><br />
                <label>
                    <input name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Phone Number" />
                </label><br />
                <label>
                    <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                </label><br />
                <label>
                    <input name="address" value={this.state.address} onChange={this.handleChange} placeholder="Address" />
                </label><br />
                <label>
                    <input name="queries" value={this.state.queries} onChange={this.handleChange} placeholder="Queries" />
                </label><br />
                <label>
                    <input name="eventName" value={this.state.eventName} onChange={this.handleChange} placeholder="Event Name" />
                </label><br />
                <label>
                    <input name="numberOfPeople" value={this.state.numberOfPeople} onChange={this.handleChange} placeholder="Number of people" />
                </label><br />
                <label>
                    <input name="eventDate" value={this.state.eventDate} onChange={this.handleChange} placeholder="Event Date" />
                </label><br />
                <label>
                    <input name="eventTime" value={this.state.eventTime} onChange={this.handleChange} placeholder="Event Time" />
                </label><br />
                <label>
                    Home Delivery<input name="homeDelivery" checked={this.state.homeDelivery} onChange={this.handleCheckboxChange} type="checkbox" />
                </label><br />
                <label>
                    Service<input name="service" checked={this.state.service} onChange={this.handleCheckboxChangeService} type="checkbox" />
                </label><br />
                <input type="submit" value="Submit Enquiry" onClick={this.props.handleSubmit} />

            </form>
        )
    }
}