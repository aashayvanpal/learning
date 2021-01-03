import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'

export default class ItemShow extends React.Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        console.log('Item Show component mounted !')
        console.log('this.params', this.params)
        console.log('id to show', window.location.href.split('/')[5])
        const id = window.location.href.split('/')[5]
        axios.get(`http://localhost:3001/items/show/${id}`, {
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

    render() {
        const { display, name, price, category, imgUrl, measured, ingredients, recipie } = this.state.item
        console.log("display item? :", display)
        console.log("category isArray? :", Array.isArray(category))
        return (
            <div>
                <h1>Showing item details</h1>
                <h1>Item Name :{name}</h1>
                <h1>Price :{price}</h1>
                <h1>Category :{category}</h1>
                <h1>Measured in :{measured}</h1>
                <h1>Image-URL :{imgUrl}</h1>
                <h1>Display :{display ? ('True') : ('False')}</h1>
                <hr/>
                <h1>Ingredients :{ingredients}</h1>
                <h1>Recipie :{recipie}</h1>
                <Link to='/items'><button>Back</button></Link>

            </div>
        )
    }
}