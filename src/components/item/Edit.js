import React from 'react'
import axios from '../../config/axios'
import ItemForm from './Form.js'

export default class EditItem extends React.Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        console.log('this.props:', this.props)
        console.log('id to edit', window.location.href.split('/')[5])
        const id = window.location.href.split('/')[5]

        axios.get(`http://localhost:3001/items/edit/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const item = response.data
                this.setState({ item })

                console.log('Edit :', this.state.item)
            })
            .catch(err => {
                console.log(err)
            })
    }


    handleItemSubmit = (item) => {
        console.log('Edit item : ', item)
        axios.put(`/items/edit/${item.id}`, item, {
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
                    // this.props.history.push(`/items/show/${response.data._id}`)
                    window.location.href = '/items'

                }
            })
    }


    render() {
        return (
            <div>
                <h1>Edit Item</h1>
                <h1>{this.state.item.name} same screen</h1>
                {this.state.item.name && <ItemForm item={this.state.item} handleItemSubmit={this.handleItemSubmit} />}


            </div>
        )

    }
}