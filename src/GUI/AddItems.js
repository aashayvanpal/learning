import React, { Component } from 'react'
import DisplayUsers from '../GUI/DisplayUsers.js'
import DisplayItems from './DisplayItems.js'

export default class AddItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [

            ],
            item: ""

        }

        this.addClick = this.addClick.bind(this)
        this.delete = this.delete.bind(this)
        this.delete = this.delete.bind(this)
    }





    addClick = e => {
        console.log("Add button clicked!")
        console.log("item test :", this.state.item)

        this.setState((prevState) => ({ items: [this.state.item, ...prevState.items], }))
        console.log("items array :", this.state.items)

        e.preventDefault()
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        })
    }



    delete(itemToDelete) {
        console.log("remove button clicked!")
        console.log("value of this ", this)
        console.log("value of this.items ", this.state.items)
        console.log("value of itemToDelete ", itemToDelete)

        this.setState(
            prevState => ({
                items: prevState.items.filter(item => item !== itemToDelete)
            })
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addClick}>
                    <input type="text" name="item" onChange={this.handleChange} />&nbsp;&nbsp;
                    <input type="submit" value="Add" />

                </form> &nbsp;
                <DisplayItems items={this.state.items} delete={this.delete.bind(this)} />


            </div>
        )
    }


}