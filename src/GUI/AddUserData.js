// Conditional render for type of user


import React, { Component } from 'react'
import DisplayCustomers from './DisplayCustomers.js'
import DisplayTransport from './DisplayTransport.js'
import DisplayVendors from './DisplayVendors.js'

export default class AddUserData extends Component {
    constructor() {
        super()
        this.state = {
            customers: [

            ],


            vendors:[

            ],
            transports:[

            ]

        }

        this.addClickCustomer = this.addClickCustomer.bind(this)
        this.addClickTransport = this.addClickTransport.bind(this)
        this.delete = this.delete.bind(this)
    }



    addClickCustomer = e => {
        e.preventDefault()
        console.log("Add button clicked on Customer!")
        console.log("Name test :", this.state.name)
        console.log("Email test :", this.state.email)
        console.log("PhonoNumber test :", this.state.phoneno)
        console.log("customers array before:", this.state.customers)

        let customer = {
            name: this.state.name,
            email: this.state.email,
            phoneno: this.state.phoneno
        }

        console.log("customer Object :", customer)

        this.setState((prevState) => ({ customers:[customer,...prevState.customers] }))

        console.log("customers array after:", this.state.customers)
    }




    addClickTransport = e => {
        e.preventDefault()
        console.log("Add button clicked on Transport!")
        console.log("Name test :", this.state.name)
        console.log("PhonoNumber test :", this.state.phoneno)
        console.log("Transport array before:", this.state.transports)

        let transport = {
            name: this.state.name,
            phoneno: this.state.phoneno
        }

        console.log("Transport Object :", transport)

        this.setState((prevState) => ({ transports:[transport,...prevState.transports] }))

        console.log("Transport array after:", this.state.transports)
    }

    addClickVendor = e => {
        e.preventDefault()
        console.log("Add button clicked on Vendor!")
        console.log("Name test :", this.state.name)
        console.log("Type test :", this.state.type)
        console.log("PhonoNumber test :", this.state.phoneno)
        console.log("Vendors array before:", this.state.vendors)

        let vendor = {
            name: this.state.name,
            type: this.state.type,
            phoneno: this.state.phoneno
        }

        console.log("Vendor Object :", vendor)

        this.setState((prevState) => ({ vendors:[vendor,...prevState.vendors] }))

        console.log("Vendor array after:", this.state.vendors)
    }



    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    delete(vendorToDelete) {
        console.log("remove button clicked!")
        console.log("value of this ", this)
        console.log("value of this.items ", this.state.vendors)
        console.log("value of itemToDelete ", vendorToDelete)

        this.setState(
            prevState => ({
                vendors: prevState.vendors.filter(vendor => vendor !== vendorToDelete)
            })
        )
    }

    render() {
        return (
            <div style={{"backgroundColor":"white"}}>
                <h1>Add Customers Component</h1>
                <form onSubmit={this.addClickCustomer}>
                    <label>Name
                        <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Email
                        <input type="text" name="email" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Phone Number
                        <input type="text" name="phoneno" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <input type="submit" value="Add Customer" />

                </form> &nbsp;
                <DisplayCustomers customers={this.state.customers} delete={this.delete} />

                <h1>Add Transport Component</h1>
                <form onSubmit={this.addClickTransport}>
                    <label>Name
                        <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Phone Number
                        <input type="text" name="phoneno" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <input type="submit" value="Add Transport" />

                </form> &nbsp;
                <DisplayTransport transports={this.state.transports} delete={this.delete} />



                <h1>Add Vendors Component</h1>
                <form onSubmit={this.addClickVendor}>
                    <label>Name
                        <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Type
                        <input type="text" name="type" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Phone Number
                        <input type="text" name="phoneno" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <input type="submit" value="Add Vendor" />

                </form> &nbsp;
                <DisplayVendors vendors={this.state.vendors} delete={this.delete} />
            </div>
        )
    }


}