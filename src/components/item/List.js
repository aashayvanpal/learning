// fix url config (store in folder)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DisplayItems from './Item.js'
import SearchItem from './Search.js'
import axios from '../../config/axios.js'

export default class AddItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [

            ],

        }

        this.deleteItem = this.deleteItem.bind(this)
    }


    componentDidMount() {
        axios.get('/items', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('Data : ', response.data)
                const items = response.data
                console.log('items after request :', items)
                this.setState({ items })
            })
            .catch(err => {
                console.log(err)
            })
    }


    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }



    deleteItem = (itemToDelete) => {
        console.log('called parent component delete id', itemToDelete)
        // console.log("remove button clicked!")
        // console.log("value of this ", this)
        // console.log("value of this.items ", this.state.items)
        // console.log("value of itemToDelete ", itemToDelete)

        axios.delete(`/items/${itemToDelete}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log('response data', response.data)
                this.setState((prevState) => ({
                    items: prevState.items.filter(item => item._id !== response.data._id)
                }))

                // var NewItems = this.props.items.filter(item => {
                //     return item !== itemToDelete
                // })

                // this.setState({
                //     items: NewItems
                // })
                // console.log("items after []:", NewItems)
                // console.log("item deleted :", this.props.items.splice(this.props.items.indexOf(itemToDelete), 1))


            })
            .catch((err) => {
                console.log(err)
            })

        // this.setState(
        //     prevState => ({
        //         items: prevState.items.filter(item => item !== itemToDelete)
        //     })
        // )
    }


    updateItem = (itemtoUpdate) => {
        console.log("inside update item")
    }

    render() {
        return (
            <div className="content-primary">
                <h2>Listing items - {this.state.items.length}</h2>
                <SearchItem handleItemSubmit={this.handleFormSubmit} />

                <table className="listing-table" >
                    <thead className="listing-table">
                        <tr>
                            <td className="listing-table">Sl No</td>
                            <td className="listing-table">Name</td>
                            <td className="listing-table"> Update</td>
                            <td className="listing-table"> Display on Menu</td>
                            <td className="listing-table"> Remove</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.items.map((item, i) => {
                                return (
                                    <DisplayItems
                                        key={i}
                                        name={item.name}
                                        deleteItem={this.deleteItem}
                                        updateItem={this.updateItem}

                                        id={item._id}
                                        i={i}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to='/items/add'> Add new items</Link>

            </div>
        )
    }
}