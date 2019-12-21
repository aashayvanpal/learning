import React from 'react'

export default class DisplayList extends React.Component {
    _handleDelete(id) {
        console.log("id :", id)
        console.log("items BEFORE []:", this.props.items)

        var NewItems = this.props.items.filter(item => {
            return item !== id
        })

        this.setState({
            items: NewItems
        })
        console.log("items after []:", NewItems)
        console.log("item deleted :", this.props.items.splice(this.props.items.indexOf(id), 1))
    }
    render() {
        return (
            <table style={{"border":"2px solid black"}}>
                <thead style={{"border":"2px solid black"}}>
                    <tr>
                        <td style={{"border":"2px solid black"}}>Name</td>
                        <td style={{"border":"2px solid black"}}> Delete Item</td>
                        <td style={{"border":"2px solid black"}}> Add Recipie</td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.items.map((item,i) => {
                        return (
                                <tr key={i}>
                                    <td style={{"border":"2px solid black"}}>{item}</td>
                                    <td style={{"border":"2px solid black"}}>
                                        < button onClick={this._handleDelete.bind(this, item)} > Remove</button>
                                    </td>
                                    <td style={{"border":"2px solid black"}}>
                                        < button onClick={this._handleDelete.bind(this, item)} > Add</button>
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