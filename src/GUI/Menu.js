//Bug at this.state.isFavouriate
//How to render single component price value ,Quantity

import React from 'react'

export default class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            // num: 0,

            showItemQtyBar: false,
            isFavourite: false,
            items: [
                { id: 1, name: 'Dahivada', Quantity: 0, price: 45, image: 'https://i.ndtvimg.com/i/2018-02/dahi-bhalla_650x400_61519796037.jpg', disc: 'this is dahi wada' },

                { id: 2, name: 'Sandwich', Quantity: 0, price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQi-pcmPUSXX_lShEsi4UB32Nu_gZhyZSuHKtRsX9tiHh1z4WtnQ&s', disc: 'this is a sandwich' },

                { id: 3, name: 'Vada Pav', Quantity: 0, price: 40, image: 'https://c8.alamy.com/comp/P79NX5/vada-pav-from-maharashtra-india-P79NX5.jpg', disc: ' Fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun (pav) sliced almost in half through the middle.' },

            ]




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

        this.setState({
            showItemQtyBar: true
        })

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









    decrementHandle() {
        console.log('- button was clicked!')
        this.setState({ Quantity: this.state.items.Quantity - 1 })
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
                                    <img src={item.image} alt="" width="450px" height="300px" />


                                    <h1>{item.name}</h1>
                                    <h4>{item.disc}</h4>
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={this.CartHandle}> Add </button>
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={this.CartRemoveHandle}> Remove </button>
                                    <button type="button" className="btn btn-outline-primary"
                                        onClick={this.favouriteHandle}> Favoirate </button>

                                    {
                                        this.state.showItemQtyBar ?
                                            <div style={{ "display": "inline-block" }} >
                                                <div>
                                                    <h1>Quantity :</h1>
                                                    <h1>{this.state.items[i].Quantity}</h1>
                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={this.incrementHandle}> + </button>

                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={this.decrementHandle}>  - </button>
                                                    <button type="button" className="btn btn-outline-primary"
                                                        onClick={this.resetHandle}> Reset </button>
                                                </div>
                                                <div>
                                                    <h1>Price :</h1>
                                                    <h1>{this.state.items[i].price * this.state.items[i].Quantity}</h1>
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