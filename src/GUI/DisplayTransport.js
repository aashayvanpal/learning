import React from 'react'

export default class DisplayTransport extends React.Component {
    _handleDelete(id) {
        console.log("id :", id)
        console.log("transports BEFORE []:", this.props.transports)

        var NewTransport = this.props.transports.filter(transport => {
            return transport !== id
        })

        this.setState({
            transports: NewTransport
        })
        console.log("Transports after []:", NewTransport)
        console.log("transport deleted :", this.props.transports.splice(this.props.transports.indexOf(id), 1))
    }
    render() {
        return (
            <table style={{ "border": "2px solid black" }}>
                <thead style={{ "border": "2px solid black" }}>
                    <tr>
                        <td style={{ "border": "2px solid black" }}>Name</td>
                        <td style={{ "border": "2px solid black" }}> Phone Number</td>
                        <td style={{ "border": "2px solid black" }}> Remove</td>
                        <td style={{ "border": "2px solid black" }}> Update</td>
                        <td style={{ "border": "2px solid black" }}> Copy to clipboard</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.transports.map((transport, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ "border": "2px solid black" }}>{transport.name}</td>
                                    <td style={{ "border": "2px solid black" }}>{transport.phoneno}</td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, transport)} > Remove</button>
                                    </td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, transport)} > Update</button>
                                    </td>
                                    <td style={{ "border": "2px solid black" }}>
                                        < button onClick={this._handleDelete.bind(this, transport)} > Copy</button>
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