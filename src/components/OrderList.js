import React, { Component } from 'react';
import axios from '../config/axios'
import { Link } from 'react-router-dom'


export default class ItemList extends Component {
    constructor() {
        super()
        this.state = {
            approves: [],
            confirms: [],
            completed: []
        }
        this.handleRemoveOrder = this.handleRemoveOrder.bind(this)
        this.handleApproveOrder = this.handleApproveOrder.bind(this)
        this.handleCompleteOrder = this.handleCompleteOrder.bind(this)
    }

    componentDidMount() {
        // get request for all items , filter approves,confirmed and completed
        axios.get('/orders', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log('Data : ', response.data)
                const items = response.data
                console.log('items after request :', items)
                // filter for approve 
                const approves = items.filter(item => item.status === 'approve')
                console.log('approves filtered:', approves)
                this.setState({ approves })

                // filter for confirmed 
                const confirms = items.filter(item => item.status === 'confirmed')
                console.log('confirms filtered:', confirms)
                this.setState({ confirms })

                // filter for completed 
                const completed = items.filter(item => item.status === 'completed')
                console.log('completed filtered:', completed)
                this.setState({ completed })

                console.log('approves state:', this.state.approves)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleRemoveOrder(id) {
        console.log('remove this id:', id)
        // const change = this.state.approves.filter(item => item._id !== id)

        // DELETE Request
        axios.delete(`/orders/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log('response data', response.data)
                this.setState((prevState) => ({
                    approves: prevState.approves.filter(item => item._id !== response.data._id)
                }))
                // remove if not required
                this.setState((prevState) => ({
                    confirms: prevState.confirms.filter(item => item._id !== response.data._id)
                }))

                this.setState((prevState) => ({
                    completed: prevState.completed.filter(item => item._id !== response.data._id)
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

        // this.setState({ approves: change })
    }

    handleApproveOrder(id) {
        console.log('clicked on Approve Button ')
        console.log('Approve this order id: ', id)
        // change status from approve to confirmed
        // you have found the id, you have to get the whole item 
        const foundItem = this.state.approves.find(item => item._id === id)
        console.log('Item found :', foundItem)
        console.log('Item found\'s status before:', foundItem.status)

        // this.setState(prevState => ({
        //     display: !prevState.display
        //   }));

        // console.log('current state id',this.state.items.id[itemToToggle])
        console.log('Edit item : ', foundItem)


        const index = this.state.approves.findIndex(item => item._id === id)
        console.log('the index is :', index)

        console.log('state of approves :', this.state.approves)
        console.log('spread :', ...this.state.approves)
        // console.log('spread index 2:', this.state.items[2])
        // console.log('spread index 2 display before:', this.state.items[2].display)
        // console.log('spread index 2 display after:', !this.state.items[2].display)

        var changedItems = this.state.approves
        changedItems[index].status = 'confirmed'

        this.setState((prevState) => ({
            confirms: [changedItems[index], ...prevState.confirms]
        }))

        this.setState({
            approves: changedItems.filter(item => item.status === 'approve')
        })

        // this.setState(prevState => ({
        //     confirms: [
        //         prevState.confirms[index].status = !prevState.confirms[index].status,
        //         ...prevState.confirms
        //     ]
        // }))
        console.log('put request for /orders')
        console.log('changedItems[index]:', changedItems[index])
        // put request
        axios.put(`/orders/${changedItems[index]._id}`, changedItems[index], {
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
    }

    handleCompleteOrder(id) {
        console.log('clicked on Completed Button ')
        console.log('Approve this order id: ', id)
        // change status from approve to confirmed
        // you have found the id, you have to get the whole item 
        const foundItem = this.state.confirms.find(item => item._id === id)
        console.log('Item found :', foundItem)
        console.log('Item found\'s status before:', foundItem.status)

        // this.setState(prevState => ({
        //     display: !prevState.display
        //   }));

        // console.log('current state id',this.state.items.id[itemToToggle])
        console.log('Edit item : ', foundItem)


        const index = this.state.confirms.findIndex(item => item._id === id)
        console.log('the index is :', index)

        console.log('state of confirms :', this.state.confirms)
        console.log('spread :', ...this.state.confirms)
        // console.log('spread index 2:', this.state.items[2])
        // console.log('spread index 2 display before:', this.state.items[2].display)
        // console.log('spread index 2 display after:', !this.state.items[2].display)

        var changedItems = this.state.confirms
        changedItems[index].status = 'completed'

        this.setState((prevState) => ({
            completed: [changedItems[index], ...prevState.completed]
        }))

        this.setState({
            confirms: changedItems.filter(item => item.status === 'confirmed')
        })

        // this.setState(prevState => ({
        //     confirms: [
        //         prevState.confirms[index].status = !prevState.confirms[index].status,
        //         ...prevState.confirms
        //     ]
        // }))
        console.log('put request for /orders')
        console.log('changedItems[index]:', changedItems[index])
        // put request
        axios.put(`/orders/${changedItems[index]._id}`, changedItems[index], {
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
    }

    render() {
        return (
            <div>
                <div style={{ "backgroundColor": "red" }}>
                    <h1>Approve orders - {this.state.approves.length}</h1>

                    <table className="listing-table" style={{ "fontWeight": "bold" }}>
                        <thead className="listing-table" >
                            <tr>
                                <td className="listing-table" >Sl no</td>
                                <td className="listing-table" >Name</td>
                                <td className="listing-table" >Actions</td>
                                <td className="listing-table" >Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.approves.map((item, i) => {
                                    return (
                                        <tr key={item._id}>
                                            <td className="listing-table" >{i + 1}</td>
                                            <td className="listing-table" style={{ "color": "white" }} ><Link to={`/orders/${item._id}`}>{item.customer.fullName}</Link></td>
                                            <td className="listing-table" >
                                                <button>Update</button>

                                                <button onClick={() => {
                                                    this.handleRemoveOrder(item._id)
                                                }}>Remove</button>
                                                <button onClick={() => {
                                                    this.handleApproveOrder(item._id)
                                                }}>Approve</button>
                                            </td>
                                            <td className="listing-table" >{
                                                item.customer.eventDate.substr(8, 2) + "/" + item.customer.eventDate.substr(5, 2) + "/" + item.customer.eventDate.substr(0, 4)
                                            }</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div style={{ "backgroundColor": "#2eec4e" }}>
                    <h1>Confirmed orders - {this.state.confirms.length}</h1>
                    <input placeholder="Search Order" />
                    <button>Search</button>

                    <button>Add new Order</button>
                    <table className="listing-table" >
                        <thead className="listing-table" >
                            <tr>
                                <td className="listing-table" >Sl no</td>
                                <td className="listing-table" >Name</td>
                                <td className="listing-table" >Update</td>
                                <td className="listing-table" >Date</td>
                                <td className="listing-table" >Remove</td>
                                <td className="listing-table" >Completed</td>
                            </tr>
                        </thead>
                        <tbody className="listing-table" >
                            {
                                this.state.confirms.map((item, i) => {
                                    return (
                                        <tr key={item._id}>
                                            <td className="listing-table" >{i + 1}</td>
                                            <td className="listing-table" ><Link to={`/orders/${item._id}`}>{item.customer.fullName}</Link></td>
                                            <td className="listing-table" ><button>update</button></td>
                                            <td className="listing-table" >{
                                                item.customer.eventDate.substr(8, 2) + "/" + item.customer.eventDate.substr(5, 2) + "/" + item.customer.eventDate.substr(0, 4)
                                            }</td>
                                            <td className="listing-table" ><button onClick={() => {
                                                this.handleRemoveOrder(item._id)
                                            }}>Remove</button></td>
                                            <td className="listing-table" ><button onClick={() => {
                                                this.handleCompleteOrder(item._id)
                                            }}>Completed</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div style={{ "backgroundColor": "yellow" }}>
                    <h1>Completed orders -{this.state.completed.length}</h1>
                    <input placeholder="Search Order" />
                    <button>Search</button>
                    <table>
                        <thead>
                            <tr>
                                <td className="listing-table">Sl no</td>
                                <td className="listing-table">Name</td>
                                <td className="listing-table">Date</td>
                                <td className="listing-table">Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.completed.map((item, i) => {
                                    return (
                                        <tr key={item._id}>
                                            <td className="listing-table" >{i + 1}</td>
                                            <td className="listing-table" ><Link to={`/orders/${item._id}`}>{item.customer.fullName}</Link></td>
                                            <td className="listing-table" >{
                                                item.customer.eventDate.substr(8, 2) + "/" + item.customer.eventDate.substr(5, 2) + "/" + item.customer.eventDate.substr(0, 4)
                                            }</td>
                                            <td className="listing-table" ><button onClick={() => {
                                                this.handleRemoveOrder(item._id)
                                            }}>Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
