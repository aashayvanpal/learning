//Bug at this.state.isFavouriate
import React from 'react'

export default class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0,
            price: 40,
            showItemQtyBar: false,
            isFavourite: false
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
        this.setState({ num: this.state.num - 1 })
    }

    resetHandle() {
        console.log('reset button was clicked!')
        this.setState({ num: 0 })
    }

    render() {
        return (
            <div style={{ "display": "inline-block" }}>


                <div class="card" style={{ "background-color": "#c3b091 ", "width": "500px", "border-width": "5px", "margin": "20px" }}>

                    <div class="card-body">

                        <div>
                            <img src="https://c8.alamy.com/comp/P79NX5/vada-pav-from-maharashtra-india-P79NX5.jpg" alt="image is here" width="450px" height="300px" />
                        </div>

                        <h1>Vada Pav</h1>
                        <h4>
                            Fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun (pav) sliced almost in half through the middle.
                        </h4>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={this.CartHandle}> Add To Cart </button>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={this.CartRemoveHandle}> Remove From Cart </button>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={this.favouriteHandle}> Favoirate </button>

                        {
                            this.state.showItemQtyBar ?
                                <div>
                                    <h1>Qty :</h1>
                                    <h1>{this.state.num}</h1>
                                    <button type="button" class="btn btn-outline-primary"
                                        onClick={this.incrementHandle}> + </button>

                                    <button type="button" class="btn btn-outline-primary"
                                        onClick={this.decrementHandle}>  - </button>
                                    <button type="button" class="btn btn-outline-primary"
                                        onClick={this.resetHandle}> Reset </button>
                                    <h1>Price :</h1>
                                    <h1>{this.state.price * this.state.num}</h1>

                                </div>
                                :

                                null
                        }
                    </div>
                </div>


            </div>
        );
    }
} 