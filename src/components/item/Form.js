import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ItemForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            name: props.item ? props.item.name : "",
            price: props.item ? props.item.price : "",
            category: props.item ? props.item.category : "",
            measured: props.item ? props.item.measured : "",
            imgUrl: props.item ? props.item.imgUrl : "",
            display: props.item ? props.item.display : "",
            ingredients: props.item ? props.item.ingredients : "",
            recipie: props.item ? props.item.recipie : "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("Add item button clicked!")

        let categories = []
        categories.push("all")
        this.state.category.split(",").map(category => { return categories.push(category) })
        console.log("categories setState array :", categories)
        const item = {
            name: this.state.name,
            price: this.state.price,
            category: categories,
            measured: this.state.measured,
            imgUrl: this.state.imgUrl,
            display: false,
            ingredients: this.state.ingredients,
            recipie: this.state.recipie
        }
        this.props.item && (item.id = this.props.item._id)

        console.log('props :', this.props)


        console.log("item Data: ", item)
        this.props.handleItemSubmit(item)

        // axios.post('http://localhost:3001/items/add', item, {
        //     headers: {
        //         "x-auth": localStorage.getItem('token')
        //     }
        // })
        //     .then(response => {
        //         if (response.data.errors) {
        //             console.log('Validation Error : ', response.data.errors)
        //             window.alert(response.data.message)
        //         }
        //         else {
        //             console.log('success', response.data)
        //             // this.props.history.push('/items')
        //             window.alert('Added successfully')
        //             window.location.href = '/items'

        //         }
        //     })


        // this.setState((prevState) => ({ items: [item, ...prevState.items], }))
        // console.log("items array :", this.state.items)

        // window.location.href = '/items'

    }

    render() {
        return (
            <div className="content-primary">
                <h2 style={{
                    "textAlign": "center",
                    "padding": "20px",
                    "color": "white",
                    "background": "#0173a9",
                    "fontWeight": "bold"
                }}>Add Item details</h2>
                <form onSubmit={this.handleSubmit}>
                    <label className="labels">Name
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}
                            style={{ "marginLeft": "150px" }}
                        />&nbsp;&nbsp;
                    </label><br />
                    <label className="labels">Price
                        <input type="text" name="price" value={this.state.price} onChange={this.handleChange}
                            style={{ "marginLeft": "160px" }}
                        />&nbsp;&nbsp;
                    </label><br />
                    <label className="labels">Category
                        <input type="text" name="category" value={this.state.category} onChange={this.handleChange}
                            style={{ "marginLeft": "105px" }}
                        />&nbsp;&nbsp;
                    </label><br />

                    <label className="labels">Measured in
                        {/* <input type="text" name="category" value={this.state.category} onChange={this.handleChange}
                            style={{ "marginLeft": "105px" }}
                        />&nbsp;&nbsp; */}
                        <select name="measured" value={this.state.measured} onChange={this.handleChange} style={{ "marginLeft": "65px" }}>
                            <option value="">--</option>
                            <option value="pc">pc</option>
                            <option value="Kg">Kg</option>
                            <option value="plate">plate</option>
                        </select>
                    </label><br />

                    <label className="labels">Image-URL
                        <textarea type="text" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange}
                            style={{ "marginLeft": "75px", "width": "500px", "height": "200px" }}

                        />&nbsp;&nbsp;
                    </label><br />
                    <label className="labels">Ingredients
                        <textarea type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange}
                            style={{ "marginLeft": "75px", "width": "500px", "height": "250px" }}

                        />&nbsp;&nbsp;
                    </label><br />
                    <label className="labels">Recipie
                        <textarea type="text" name="recipie" value={this.state.recipie} onChange={this.handleChange}
                            style={{ "marginLeft": "75px", "width": "500px", "height": "250px" }}

                        />&nbsp;&nbsp;
                    </label><br />

                    <Link to='/items'><button className="button-color3" style={{ "margin": "50px 30px 50px 100px" }}>Back</button></Link>

                    <input className="button-color3" type="submit" value="Add Item" style={{ "marginLeft": "250px", "width": "300px" }} />

                </form>

            </div>
        )
    }
}