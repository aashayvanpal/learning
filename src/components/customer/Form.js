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
                <h1 style={{ "marginTop": "-30px" }}>Add Your Details </h1><br />
                <input name="fullName" className="form-input" value={this.state.fullName} onChange={this.handleChange} placeholder="Full Name" />
                <br />

                <input name="phoneNumber" className="form-input" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Phone Number" />
                <br />

                <input name="email" className="form-input" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                <br />

                <input name="address" className="form-input" value={this.state.address} onChange={this.handleChange} placeholder="Address" />
                <br />

                <input name="queries" className="form-input" value={this.state.queries} onChange={this.handleChange} placeholder="Queries" />
                <br />

                <input name="eventName" className="form-input" value={this.state.eventName} onChange={this.handleChange} placeholder="Event Name" />
                <br />

                <input name="numberOfPeople" className="form-input" value={this.state.numberOfPeople} onChange={this.handleChange} placeholder="Number of people" />
                <br />

                <input name="eventDate" className="form-input" value={this.state.eventDate} onChange={this.handleChange} placeholder="Event Date" />
                <br />

                <input name="eventTime" className="form-input" value={this.state.eventTime} onChange={this.handleChange} placeholder="Event Time" />
                <br />
                <label>
                    <span className="form-input">Home Delivery</span><input name="homeDelivery" className="form-input" checked={this.state.homeDelivery} onChange={this.handleCheckboxChange} type="checkbox" />
                </label><br />
                <label >
                    <span className="form-input">Service</span><input name="service" className="form-input" checked={this.state.service} onChange={this.handleCheckboxChangeService} type="checkbox" />
                </label><br />
                <input type="submit" className="form-input" value="Submit Enquiry" onClick={this.props.handleSubmit} />

            </form>
        )
    }
}