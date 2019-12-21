import React, { Component } from 'react'
import DisplayItems from './DisplayItems.js'
import DisplayUsers from './DisplayUsers.js'


export default class AddUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [

            ],
            name: "",
            email: "",
            phoneno: ""


        }

        this.addClick = this.addClick.bind(this)
        this.delete = this.delete.bind(this)
    }





    addClick = e => {
        console.log("Add button clicked!")
        console.log("Name test :", this.state.name)
        console.log("Email test :", this.state.email)

        this.setState((prevState) => ({ users: [this.state.name, ...prevState.users], }))
        console.log("Users array :", this.state.users)

        e.preventDefault()
    }

    handleChange = e => {
        this.setState({
            name: e.target.value,
            email:e.target.value
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
                <h1>Add users Component</h1>
                <form onSubmit={this.addClick}>
                    <label>Name
                        <input type="text" name="name" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Email
                        <input type="text" name="Email" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <label>Phone Number
                        <input type="text" name="phoneno" onChange={this.handleChange} />&nbsp;&nbsp;
                    </label>

                    <input type="submit" value="Add" />

                </form> &nbsp;
                <DisplayUsers users={this.state.users} delete={this.delete} />


            </div>
        )
    }


}