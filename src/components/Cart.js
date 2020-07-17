import React from 'react'


export default class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // componentDidMount() {
    //     console.log('inside componentdidmount')
    //     this.setState({ cartItems: this.props.cartItems })
    // }


    render() {
        console.log("check props for cart items to show :", this.props.cartItems)
        return (
            <div>
                Cart Component :
                {
                    this.props.items.filter(item => item.isSelected === true).map((item, i) => {
                        return (
                            <div key={item._id} style={{ "display": "flex" }}>
                                <h2>{i + 1}.{item.name}</h2>
                                <button onClick={() => {
                                    this.props.resetIsSelected(item._id)
                                    // this.props.removeItemFromCart(item.id)
                                }}>X</button>
                            </div>
                        )
                    })
                }
            </div >
        );
    }
}
