//Bug at this.state.isFavouriate
//How to render single component price value ,Quantity

// items: [
//     { id: 1, name: 'Dahivada', category: "dessert", price: 45, image: 'https://i.ndtvimg.com/i/2018-02/dahi-bhalla_650x400_61519796037.jpg',quantity: 0, smalldisc: 'this is dahi wada', largedisc: "", showItemQtyBar: false },

//     { id: 2, name: 'Sandwich',quantity: 0, category: "snacks", price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi-pcmPUSXX_lShEsi4UB32Nu_gZhyZSuHKtRsX9tiHh1z4WtnQ&s', smalldisc: 'this is a sandwich', largedisc: "", showItemQtyBar: false },

//     { id: 3, name: 'Vada Pav',quantity: 0, category: "snacks", price: 40, image: 'https://c8.alamy.com/comp/P79NX5/vada-pav-from-maharashtra-india-P79NX5.jpg', smalldisc: ' Fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun (pav) sliced almost in half through the middle.', largedisc: "", showItemQtyBar: false },

// ]

import React from 'react'
import axios from 'axios'

export default class Menu extends React.Component {
    constructor() {
        super()
        this.state = {



            isFavourite: false,
            items: []




        }

        this.incrementHandle = this.incrementHandle.bind(this)
        this.decrementHandle = this.decrementHandle.bind(this)
        this.resetHandle = this.resetHandle.bind(this)
        this.CartHandle = this.CartHandle.bind(this)
        this.CartRemoveHandle = this.CartRemoveHandle.bind(this)
        this.favouriteHandle = this.favouriteHandle.bind(this)
    }

    incrementHandle() {
        console.log('+ button was clicked!')
        this.setState({ num: this.state.num + 1 })
    }

    CartHandle() {
        console.log('Add to cart button was clicked!')
        console.log('state now :', this.state)
        console.log('state.items[0] now :', this.state.items[0])
        console.log('state.items[0].showItemQtyBar now :', this.state.items[0].showItemQtyBar)

        this.setState((prevState) => {
            console.log('prevState items[0]', prevState.items[0].showItemQtyBar = true)
            // prevState.showItemQtyBar=true

            // return {
            //     showItemQtyBar: true
            // }
        })



        // this.setState(prevState => ({
        //     guests: [newPerson, ...prevState.guests],
        //     pendingGuest: ""
        //   }));


        console.log('state.items[0].showItemQtyBar after setState :', this.state.items[0].showItemQtyBar)

        console.log('Crossed setstate!')


    }


    favouriteHandle() {
        this.setState({
            isFavourite: true
        })
        console.log('Favourite button was clicked!')


        console.log("I got updated! ")

        console.log("Favourite :", this.state.isFavourite)
    }
    CartRemoveHandle() {
        console.log('Remove from Cart button was clicked!')

        this.setState({
            showItemQtyBar: false
        })

    }


    componentDidMount() {
        axios.get('http://localhost:3001/Menu', {
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






    decrementHandle(i) {
        console.log('- button was clicked!')
        // this.setState((prevState) => {
        //     return {
        //         quantity: this.state.items[i].quantity - 1
        //     }
        // }
        // )
        console.log('clicked item is :', this.state.items[i])
        console.log('items :', this.state.items)

    }

    resetHandle() {
        console.log('reset button was clicked!')
        this.setState({ num: 0 })
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map((item, i) => {
                        return (
                            <div key={item.id} className="card" style={{ "display": "inline-block", "backgroundColor": "#c3b091 ", "width": "500px", "borderWidth": "5px", "margin": "20px" }}>

                                <div key={item.id} className='card body'  >
                                    <img src={item.imgUrl} alt="" width="450px" height="300px" />


                                    <h1>{item.name}</h1>
                                    <h4>{item.smalldisc}</h4>
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={this.CartHandle}> Add </button>
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={this.CartRemoveHandle}> Remove </button>
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={this.favouriteHandle}> Favoirate </button>

                                    {
                                        this.state.items[i].showItemQtyBar ?
                                            <div style={{ "display": "inline-block" }} >
                                                <div>
                                                    <h1>Quantity :</h1>
                                                    <h1>{this.state.items[i].quantity}</h1>
                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={this.incrementHandle}> + </button>

                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={this.decrementHandle}>  - </button>
                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={this.resetHandle}> Reset </button>
                                                </div>
                                                <div>
                                                    <h1>Price :</h1>
                                                    <h1>{this.state.items[i].price * this.state.items[i].quantity}</h1>
                                                    {/* how to get id which is clicked? */}
                                                </div>

                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
} 