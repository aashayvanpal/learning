//Render the form correctly!

import React, { Component } from 'react'
import DisplayCustomers from './DisplayCustomers.js'
// import DisplayTransport from './DisplayTransport.js'


export default class AddCustomers extends Component {
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
            <div>
                <h1>Add Details Form :</h1>
                <form onSubmit={this.addClick}>
                    <label>khh
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
                <DisplayCustomers users={this.state.users} delete={this.delete} />
            </div>
        )
    }


}