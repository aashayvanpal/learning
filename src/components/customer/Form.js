import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
            service: false,
            startDate: new Date(),
            nameError: "",
            phoneNumberError: "",
            emailError: "",
            noOfPeopleError: "",
            addressError: '',
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


    validate = () => {
        let nameError = ""
        let emailError = ""
        let phoneNumberError = ""
        let noOfPeopleError = ""
        let addressError = ""


        let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '_', '`', '(', ')', '+', '-', '/', '.', ',', '[', ']', '{', '}', '?', ':', ';', '\'', '"', "|", ">", "<"]
        let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        if (this.state.fullName.length < 5) {
            nameError = "Error: The full name cannot be less than 5 characters"
        }

        if (specialChars.some(char => this.state.fullName.includes(char))) {
            nameError = "Error: The full name cannot contain special characters"
        }
        if (digits.some(digit => this.state.fullName.includes(digit))) {
            nameError = "Error: The full name cannot contain numbers 0-9 "
        }

        if (this.state.email.length < 5) {
            emailError = "Error: The email addess cannot be less than 5 characters"
        }

        if (!this.state.email.includes('@')) {
            emailError = "Error: The email address should contain @ symbol"
        }

        if (this.state.phoneNumber.length !== 10) {
            phoneNumberError = "Error: There must be 10 digits in your number !"
        }

        let regex = /[a - z]{ 1, 10}/
        if (regex.test(this.state.phoneNumber)) {
            phoneNumberError = "Error: The phone number cannot contain alphabets !"

        }

        // if (regex.test(this.state.numberOfPeople)) {
        //     noOfPeopleError = "Error: Number of People cannot contain alphabets !"
        // }

        if (!digits.some(digit => this.state.numberOfPeople.includes(digit))) {
            noOfPeopleError = "Error: Number of people cannot contain alphabets"
        }


        if (digits.some(digit => this.state.fullName.includes(digit))) {
            nameError = "Error: The Full Name  should not contain any numbers between 0-9 "
        }

        if (this.state.address.length === 0) {
            addressError = "Error: The addresss cannot be left blank "

        }


        if (emailError || nameError || phoneNumberError || noOfPeopleError) {
            this.setState({ emailError, nameError, phoneNumberError, noOfPeopleError, addressError })
            return false
        }

        return true

    }


    handleSubmit = e => {
        e.preventDefault()
        console.log("submit enquiry button clicked! check this ")

        // Write validate() and pass the condition form information is valid 

        // validation
        const isValid = this.validate()

        if (isValid) {


            const customer = {
                fullName: this.state.fullName,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                address: this.state.address,
                queries: this.state.queries,
                eventName: this.state.eventName,
                numberOfPeople: this.state.numberOfPeople,
                eventDate: this.state.startDate,
                eventTime: this.state.eventTime,
                homeDelivery: this.state.homeDelivery,
                service: this.state.service
            }
            // this.props.item && (item.id = this.props.item._id)

            console.log('props :', this.props)


            console.log("customer Data: ", customer)
            this.props.handleCustomerSubmit(customer)
        }
    }

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ "border": "2px solid black", "padding": "50px", "width": "36%" }}>
                <h1 style={{ "marginTop": "-30px" }}>Add Your Details </h1><br />
                <input name="fullName" className="form-input" value={this.state.fullName} onChange={this.handleChange} placeholder="Full Name" />
                <br />
                {this.state.nameError ? (<div style={{ "color": "red", "marginLeft": "10px" }}>{this.state.nameError}</div>) : null}

                <input name="phoneNumber" pattern="[1-9]{1}[0-9]{9}" title="The phone number must contain 10 digit numbers only" className="form-input" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Phone Number" />
                <br />
                {this.state.phoneNumberError ? (<div style={{ "color": "red", "marginLeft": "10px" }}>{this.state.phoneNumberError}</div>) : null}


                <input name="email" className="form-input" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                <br />
                {this.state.emailError ? (<div style={{ "color": "red", "marginLeft": "10px" }}>{this.state.emailError}</div>) : null}


                <textarea style={{ "width": "280px", "height": "250px" }} name="address" className="form-input" value={this.state.address} onChange={this.handleChange} placeholder="Address" />
                <br />
                {this.state.addressError ? (<div style={{ "color": "red", "marginLeft": "10px" }}>{this.state.addressError}</div>) : null}


                <input name="queries" className="form-input" value={this.state.queries} onChange={this.handleChange} placeholder="Queries" />
                <br />

                <input name="eventName" className="form-input" value={this.state.eventName} onChange={this.handleChange} placeholder="Event Name" />
                <br />

                <input name="numberOfPeople" className="form-input" value={this.state.numberOfPeople} onChange={this.handleChange} placeholder="Number of people" />
                <br />
                {this.state.noOfPeopleError ? (<div style={{ "color": "red", "marginLeft": "10px" }}>{this.state.noOfPeopleError}</div>) : null}

                {/* <input name="eventDate" className="form-input" value={this.state.eventDate} onChange={this.handleChange} placeholder="Event Date" />
                <br /> */}

                {/* date start */}
                <DatePicker className="form-input"
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    dateFormat="Pp"
                    showTimeSelect
                />
                {/* date end */}

                <input name="eventTime" className="form-input" value={this.state.eventTime} onChange={this.handleChange} placeholder="Event Time" />
                <br />
                <label>
                    <span className="form-input">Home Delivery</span><input name="homeDelivery" className="form-input" checked={this.state.homeDelivery} onChange={this.handleCheckboxChange} type="checkbox" />
                </label><br />
                <label >
                    <span className="form-input">Service</span><input name="service" className="form-input" checked={this.state.service} onChange={this.handleCheckboxChangeService} type="checkbox" />
                </label><br />
                <input type="submit" style={{ "padding": "20px", "width": "300px", "background": "#DBC283" }} className="form-input" value="Submit Enquiry" onClick={this.props.handleSubmit} />

            </form>
        )
    }
}