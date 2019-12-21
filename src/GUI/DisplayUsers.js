import React from 'react'

export default class DisplayUsers extends React.Component {
    _handleDelete(id) {
        console.log("id :", id)
        console.log("Users BEFORE []:", this.props.users)

        var NewUser = this.props.users.filter(user => {
            return user !== id
        })

        this.setState({
            users: NewUser
        })
        console.log("users after []:", NewUser)
        console.log("user deleted :", this.props.users.splice(this.props.users.indexOf(id), 1))
    }
    render() {
        return (
            <table style={{ "border": "2px solid black" }}>
                <thead style={{ "border": "2px solid black" }}>
                    <tr>
                        <td style={{ "border": "2px solid black" }}>Name</td>
                        <td style={{ "border": "2px solid black" }}> Email</td>
                        <td style={{ "border": "2px solid black" }}> Phone Number</td>
                        <td style={{ "border": "2px solid black" }}> Delete</td>
                        <td style={{ "border": "2px solid black" }}> Update</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ "border": "2px solid black" }}>{user}</td>
                                    <td style={{ "border": "2px solid black" }}>{}</td>
                                    <td style={{ "border": "2px solid black" }}>{}</td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, user)} > Remove</button>
                                    </td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, user)} > Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
        )
    }
} 