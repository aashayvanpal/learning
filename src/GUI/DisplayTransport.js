import React from 'react'

export default class DisplayTransport extends React.Component {
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
                        <td style={{ "border": "2px solid black" }}> Phone Number</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ "border": "2px solid black" }}>{user.name}</td>
                                    <td style={{ "border": "2px solid black" }}>{user.email}</td>
                                    <td style={{ "border": "2px solid black" }}>{user.phoneno}</td>
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