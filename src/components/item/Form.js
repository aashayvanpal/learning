import React, { Component } from 'react'

export default class ItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item?props.item.name:""
        }
    }


    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = e => {
        console.log("Add button clicked!")
        console.log("item test :", this.state.item)
        const item = { "name": this.state.item }

        // axios.post('/add/items', item, {
        //     headers: {
        //         "x-auth": localStorage.getItem('token')
        //     }
        // })
        //     .then(response => {
        //         if (response.data.errors) {
        //             console.log('Validation Error : ', response.data.errors)
        //             window.alert(response.data.message)
        //         }
        //         else {
        //             console.log('success', response.data)
        //             // this.props.history.push('/Customers')
        //         }
        //     })


        // this.setState((prevState) => ({ items: [item, ...prevState.items], }))
        // console.log("items array :", this.state.items)

        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" onChange={this.handleChange} />&nbsp;&nbsp;
                <input type="submit" value="Add" />
            </form>
        )
    }
}