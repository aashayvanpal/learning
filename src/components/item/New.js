import React from 'react'
import ItemForm from './Form.js'
import axios from '../../config/axios.js'


export default class ItemNew extends React.Component {
    constructor() {
        super()
        this.handleItemSubmit = this.handleItemSubmit.bind(this)
    }

    handleItemSubmit(item) {
        console.log('New Component : ', item)
        axios.post('/items/add', item, {
            headers: {
                "x-auth": localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.errors) {
                    console.log('Validation Error : ', response.data.errors)
                    window.alert(response.data.message)
                }
                else {
                    console.log('success', response.data)
                    this.props.history.push('/items')
                }
            })
    }

    render() {
        return (
            <div>
                <h1>Add New Item</h1>
                <ItemForm handleItemSubmit={this.handleItemSubmit} />
            </div>
        )
    }
}