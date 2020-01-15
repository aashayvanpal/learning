import React, { Component } from 'react';


export default class MenuItem extends Component {
    // constructor(props) {
    //     super(props)
    // }

    CartHandle() {
        console.log('Add to cart button was clicked!')

        this.showItemQtyBar= true

    }
    render() {
        return (
            <div style={{ "backgroundColor": "grey" }}>
                <img src={this.props.image} alt="" width="450px" height="300px" />


                <h1>{this.props.name}</h1>
                <h4>{this.props.smalldisc}</h4>
                <button type="button" className="btn btn-outline-primary"
                    onClick={this.CartHandle}> Add </button>
                <button type="button" className="btn btn-outline-primary"
                    onClick={this.CartRemoveHandle}> Remove </button>
                <button type="button" className="btn btn-outline-primary"
                    onClick={this.favouriteHandle}> Favoirate </button>

                {
                    this.props.showItemQtyBar ?
                        <div style={{ "display": "inline-block" }} >
                            <div>
                                <h1>Quantity :</h1>
                                <h1>{this.state.items[0].Quantity}</h1>
                                <button type="button" className="btn btn-outline-primary"
                                    onClick={this.incrementHandle}> + </button>

                                <button type="button" className="btn btn-outline-primary"
                                    onClick={this.decrementHandle}>  - </button>
                                <button type="button" className="btn btn-outline-primary"
                                    onClick={this.resetHandle}> Reset </button>
                            </div>
                            <div>
                                <h1>Price :</h1>
                                <h1>{this.state.items[0].price * this.state.items[0].Quantity}</h1>
                                {/* how to get id which is clicked? */}
                            </div>

                        </div>
                        :
                        null
                } 
           
            </div>
        );
    }
}
