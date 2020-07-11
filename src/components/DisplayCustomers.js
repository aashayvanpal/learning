import React from 'react'

export default class DisplayCustomers extends React.Component {
    _handleDelete(id) {
        console.log("id :", id)
        console.log("Customers BEFORE []:", this.props.customers)

        var NewCustomer = this.props.customers.filter(customer => {
            return customer !== id
        })

        this.setState({
            customers: NewCustomer
        })
        console.log("customers after []:", NewCustomer)
        console.log("customer deleted :", this.props.customers.splice(this.props.customers.indexOf(id), 1))
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
                        this.props.customers.map((customer, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ "border": "2px solid black" }}>{customer.name}</td>
                                    <td style={{ "border": "2px solid black" }}>{customer.email}</td>
                                    <td style={{ "border": "2px solid black" }}>{customer.phoneno}</td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, customer)} > Remove</button>
                                    </td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, customer)} > Update</button>
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