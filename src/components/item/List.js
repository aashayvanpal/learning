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
        this.updateCheckbox = this.updateCheckbox.bind(this)
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
        console.log("inside update item check here")
    }

    updateCheckbox = (itemToToggle) => {
        console.log('inside the toggle checkbox')
        console.log("itemToToggle id:", itemToToggle)
        // you have found the id, you have to get the whole item 
        const foundItem = this.state.items.find(item => item._id == itemToToggle)
        console.log('Item found :', foundItem)
        console.log('Item found\'s display before:', foundItem.display)

        // this.setState(prevState => ({
        //     display: !prevState.display
        //   }));

        // console.log('current state id',this.state.items.id[itemToToggle])
        console.log('Edit item : ', foundItem)


        const index = this.state.items.findIndex(item => item._id == itemToToggle)
        console.log('the index is :', index)

        console.log('state of items :', this.state.items)
        console.log('spread :', ...this.state.items)
        console.log('spread index 2:', this.state.items[2])
        console.log('spread index 2 display before:', this.state.items[2].display)
        console.log('spread index 2 display after:', !this.state.items[2].display)

        var changedItems = this.state.items
        changedItems[index].display = !changedItems[index].display

        this.setState({ items: changedItems })

        // this.setState(prevState => ({
        //     items: [
        //         prevState.items[index].display = !prevState.items[index].display,
        //         ...prevState.items
        //     ]
        // }))


        axios.put(`/items/edit/${foundItem._id}`, foundItem, {
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
                    // window.location.href = '/items'

                }
            })

        console.log('Item found\'s display after:', this.state.items)
        // console.log('Item found\'s display after:', foundItem.display)

    }

    render() {
        return (
            <div className="content-primary">
                <div className="search-align">
                    <h2>Listing items - {this.state.items.length}</h2>
                    <SearchItem handleItemSubmit={this.handleFormSubmit} />
                </div>
                <Link to='/items/add'> <button className="button-color3">Add new items</button></Link>


                <table className="listing-table" >
                    <thead className="listing-table" style={{ "fontWeight": "bold" }}>
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
                                        updateCheckbox={this.updateCheckbox}
                                        id={item._id}
                                        display={item.display}
                                        i={i}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}