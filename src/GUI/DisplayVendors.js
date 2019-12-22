import React from 'react'

export default class DisplayVendors extends React.Component {
    _handleDelete(id) {
        console.log("id :", id)
        console.log("Vendors BEFORE []:", this.props.vendor)

        var NewVendor = this.props.vendors.filter(vendor => {
            return vendor !== id
        })

        this.setState({
            vendors: NewVendor
        })
        console.log("Vendors after []:", NewVendor)
        console.log("Vendors deleted :", this.props.vendors.splice(this.props.vendors.indexOf(id), 1))
    }
    render() {
        return (
            <table style={{ "border": "2px solid black" }}>
                <thead style={{ "border": "2px solid black" }}>
                    <tr>
                        <td style={{ "border": "2px solid black" }}>Name</td>
                        <td style={{ "border": "2px solid black" }}>Type</td>
                        <td style={{ "border": "2px solid black" }}> Phone Number</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.vendors.map((vendor, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ "border": "2px solid black" }}>{vendor.name}</td>
                                    <td style={{ "border": "2px solid black" }}>{vendor.type}</td>
                                    <td style={{ "border": "2px solid black" }}>{vendor.phoneno}</td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, vendor)} > Remove</button>
                                    </td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, vendor)} > Update</button>
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