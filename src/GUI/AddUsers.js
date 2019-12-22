// Render transport and vendor components

import React, { Component } from 'react'
import DisplayUsers from './DisplayUsers.js'
import DisplayTransport from './DisplayTransport.js'
import DisplayVendors from './DisplayVendors.js'

//user is customer (change later)
export default class AddUsers extends Component {
    constructor() {
        super()
        this.state = {
            users: [

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
        console.log("Users array before:", this.state.users)

        let user = {
            name: this.state.name,
            email: this.state.email,
            phoneno: this.state.phoneno
        }

        console.log("User Object :", user)

        this.setState((prevState) => ({ users:[user,...prevState.users] }))

        console.log("Users array after:", this.state.users)
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
                <DisplayUsers users={this.state.users} delete={this.delete} />

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