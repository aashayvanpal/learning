import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class ItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            name: props.item ? props.item.name : "",
            price: props.item ? props.item.price : "",
            category: props.item ? props.item.category : "",
            imgUrl: props.item ? props.item.imgUrl : "",
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("Add item button clicked!")

        const item = {
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            imgUrl: this.state.imgUrl
        }
        this.props.item && (item.id = this.props.item._id)


        console.log("item Data: ", item)

        axios.post('http://localhost:3001/items/add', item, {
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


        this.setState((prevState) => ({ items: [item, ...prevState.items], }))
        console.log("items array :", this.state.items)

        // window.location.href = '/items'

    }

    render() {
        return (
            <div className="content-primary">
                <h2>Add Item details</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />&nbsp;&nbsp;
                    </label><br />
                    <label>Price
                        <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />&nbsp;&nbsp;
                    </label><br />
                    <label>Category
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />&nbsp;&nbsp;
                    </label><br />
                    <label>Image-URL
                        <input type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} />&nbsp;&nbsp;
                    </label><br />

                    <Link to='/items'><button>Back</button></Link>

                    <input type="submit" value="Add Item" />

                </form>

            </div>
        )
    }
}