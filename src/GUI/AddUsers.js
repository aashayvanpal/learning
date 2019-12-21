// Render transport and vendor components

import React, { Component } from 'react'
import DisplayUsers from './DisplayUsers.js'
import DisplayTransport from './DisplayTransport.js'
import DisplayVendors from './DisplayVendors.js'


export default class AddUsers extends Component {
    constructor() {
        super()
        this.state = {
            users: [

            ],
        }

        this.addClick = this.addClick.bind(this)
        this.delete = this.delete.bind(this)
    }



    addClick = e => {
        e.preventDefault()
        console.log("Add button clicked!")
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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    delete(userToDelete) {
        console.log("remove button clicked!")
        console.log("value of this ", this)
        console.log("value of this.items ", this.state.users)
        console.log("value of itemToDelete ", userToDelete)

        this.setState(
            prevState => ({
                users: prevState.users.filter(user => user !== userToDelete)
            })
        )
    }

    render() {
        return (
            <div style={{"background-color":"blue"}}>
                <h1>Add Customers Component</h1>
                <form onSubmit={this.addClick}>
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
                <form onSubmit={this.addClick}>
                    <label>Name
                        <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Phone Number
                        <input type="text" name="phoneno" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <input type="submit" value="Add Transport" />

                </form> &nbsp;
                <DisplayTransport users={this.state.users} delete={this.delete} />



                <h1>Add Vendors Component</h1>
                <form onSubmit={this.addClick}>
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
                <DisplayVendors vendors={this.state.users} delete={this.delete} />
            </div>
        )
    }


}