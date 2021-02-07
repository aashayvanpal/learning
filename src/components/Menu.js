import React from 'react'
import axios from '../config/axios'
import Cart from './Cart.js'

export default class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            isFavourite: false,
            items: [],
            cartItems: [],
            inputSearch: '',
            displayType: '',
            searchFilter: [],
            username: '',
            userType: ''
        }

        this.incrementHandle = this.incrementHandle.bind(this)
        this.decrementHandle = this.decrementHandle.bind(this)
        this.resetHandle = this.resetHandle.bind(this)
        this.CartHandle = this.CartHandle.bind(this)
        this.CartRemoveHandle = this.CartRemoveHandle.bind(this)
        this.favouriteHandle = this.favouriteHandle.bind(this)
        this.checkboxChange = this.checkboxChange.bind(this)
        this.isCheckedValue = this.isCheckedValue.bind(this)
        this.resetIsSelected = this.resetIsSelected.bind(this)
        this.toggleIsSelected = this.toggleIsSelected.bind(this)
        this.requestOrder = this.requestOrder.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.clearSearch = this.clearSearch.bind(this)



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

        // Do a get request to /account to get user name , add x-auth as header to it
        // just set the token in localStorage and get it in x-auth , the code is working fine,,,
        axios.get('/account', {
            headers: { 'x-auth': localStorage.getItem('token') }
        })
            .then(dataRequest => {
                console.log("user data :", dataRequest)
                this.setState({
                    username: dataRequest.data.username,
                    userType: dataRequest.data.userType

                })


                axios.get('/Menu', {
                    headers: {
                        'x-auth': localStorage.getItem('token')
                    }
                })
                    .then(response => {
                        console.log('Data : ', response.data)
                        const items = response.data
                        console.log('items after request :', items)
                        console.log('items after filtering :')
                        var filteredItems = itemsFilter(items)
                        filteredItems.forEach(item => { item.isSelected = false })

                        // filteredItems.forEach(item => { item.inCart = false })

                        this.setState({ items: filteredItems })
                        this.setState({ searchFilter: this.state.items })
                        console.log("this.state.items:", this.state.items)

                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })

        function itemsFilter(items) {
            return (items.filter(item => item.display === true))
        }

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

    checkboxChange(id, name, inCart) {
        this.toggleIsSelected(id)
        console.log('Checkbox clicked ! add/remove this id to the cart render', id, name)
        // add to cart array , if already present remove from the cart array
        // -------------------------

        // console.log('Checkbox clicked ! add/remove this id to the cart render', id, name)

        this.state.cartItems.push({
            "id": id,
            "name": name,
            inCart: !inCart,
        })
        console.log("change the state here only :", this.state)
        // Making unique array 
        var newCartItems = this.state.cartItems
        // var distinctCartItems = [...new Set(newCartItems.map(item => (item.id && item.name)))]

        // var newCartItems = [{ id: 555, name: "Vada" }, { id: 555, name: "Vada" }, { id: 777, name: "soda" }]
        var distinctItemsArray = [];
        newCartItems.filter(function (item) {
            var i = distinctItemsArray.findIndex(x => x.name === item.name);
            if (i <= -1) {
                distinctItemsArray.push({ id: item.id, name: item.name, inCart: true });
            }
            return null;
        });

        // setState to render the unique array
        // Add inCart = false property

        this.setState(prevState => ({
            cartItems: [...prevState.cartItems, { "id": id, "name": name }]
        }))

        this.setState({ cartItems: distinctItemsArray })

        console.log('cartItems array state:', this.state.cartItems)
        console.log('newCartItems array variable:', newCartItems)
        console.log('distinctCartItems array variable:', distinctItemsArray)

        // Delete Item from cartItems
        // if Item is already in cartItems remove item 
        // else Add item to the cartItems

    }

    toggleIsSelected = (id) => {
        // Delete item from the cartItems do setState of cartItems
        console.log('inside the toggleIsSelected function')
        console.log('toggle this id from the items :', id)
        // this.removeItemFromCart(id)
        // console.log('Id removed from the cart check...')

        // Reset the items.isSelected to false
        // find the item in items[] then change isSelected to false
        console.log('items state:', this.state.items)
        const foundItem = this.state.items.find(item => item._id === id)


        console.log('Item found :', foundItem)
        console.log('Item found\'s  items.isSelected before:', foundItem.isSelected)

        console.log('Edit item.isSelected to false : ', foundItem)


        const index = this.state.items.findIndex(item => item._id === id)
        console.log('the index is :', index)

        console.log('state of items :', this.state.items)
        console.log('spread :', ...this.state.items)
        console.log('spread index :', this.state.items[index])
        console.log('spread index.isSelected before:', this.state.items[index].isSelected)
        // console.log('spread index.isSelected after:', !this.state.items[index].isSelected)

        var changedItems = this.state.items
        changedItems[index].isSelected = !changedItems[index].isSelected

        this.setState({ items: changedItems })

        console.log('Items found\'s isSelected after:', this.state.items)
        // // console.log('Item found\'s display after:', foundItem.display)

        console.log('end of toggleIsSelected Function')
        return null
    }

    resetIsSelected = (id) => {
        // Delete item from the cartItems do setState of cartItems
        console.log('inside the removeAndReset function')
        console.log('delete this id from the cartItems :', id)
        // this.removeItemFromCart(id)
        // console.log('Id removed from the cart check...')

        // Reset the items.isSelected to false
        // find the item in items[] then change isSelected to false
        console.log('items state:', this.state.items)
        const foundItem = this.state.items.find(item => item._id === id)


        console.log('Item found :', foundItem)
        console.log('Item found\'s  items.isSelected before:', foundItem.isSelected)

        console.log('Edit item.isSelected to false : ', foundItem)


        const index = this.state.items.findIndex(item => item._id === id)
        console.log('the index is :', index)

        console.log('state of items :', this.state.items)
        console.log('spread :', ...this.state.items)
        console.log('spread index :', this.state.items[index])
        console.log('spread index.isSelected before:', this.state.items[index].isSelected)
        // console.log('spread index.isSelected after:', !this.state.items[index].isSelected)

        var changedItems = this.state.items
        changedItems[index].isSelected = false

        this.setState({ items: changedItems })



        console.log('Items found\'s isSelected after:', this.state.items)
        // // console.log('Item found\'s display after:', foundItem.display)

        console.log('end of resetIsSelected Function')
        return null
    }

    isCheckedValue(id) {
        console.log('check for this id ', id)
        return true
    }

    requestOrder() {
        console.log('inside request order function')
        var cartItems = this.state.items.filter(item => item.isSelected === true)
        console.log('Approve these items :', cartItems)
        console.log('post request axios ')
        // console.log('Approve these items[0].name :', approveOrder[0].name)

        // var objNames = approveOrder.forEach(item => console.log(item.name))
        // console.log(approveOrder.map(item => { item.name, item.price }))

        const approveOrder = cartItems.map(item => (
            {
                id: item._id,
                name: item.name,
                price: item.price,
                measured: item.measured,
                quantity: 1,
            }
        ));

        console.log(approveOrder)
        console.log(Array.isArray(approveOrder))
        // console.log('stringify:', JSON.stringify(approveOrder))
        localStorage.setItem('orderItems', JSON.stringify(approveOrder))

        console.log(localStorage.getItem('orderItems'))
        console.log(Array.isArray(JSON.parse(localStorage.getItem('orderItems'))))

    }

    handleChange = (e) => {
        console.log('Inside handleChange')
        console.log('e.target:', e.target)
        console.log('e.target.value:', e.target.value)
        console.log('this.state.items:', this.state.items)
        console.log('this.state.items filtered:', this.state.items.filter(item => item.name.includes(e.target.value)))

        let searchFilter = this.state.items.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({ searchFilter })

    }

    handleSelect(e) {
        console.log('You changed the select option')
        console.log('Value is:', e.target.value)

        this.setState({ displayType: e.target.value.toUpperCase() })
        this.setState({
            searchFilter:
                this.state.items.filter(item => item.category.includes(e.target.value.toLowerCase()))
        })



    }

    clearSearch() {
        console.log("clear search button clicked!")
        // this.handleChange(document.getElementById("inputSearch"))
        this.setState({
            searchFilter: this.state.items
        })
        console.log(document.getElementById("inputSearch"))
        console.log(document.getElementById("filterItems").value = "all")
        document.getElementById("inputSearch").value = ""
        document.getElementById("filterItems").value = "all"
        this.setState({ displayType: "ALL" })
    }
    render() {
        return (
            <div>
                <h1>Welcome - {this.state.username} you are - {this.state.userType}</h1>

                { this.state.userType === "Admin" ? (

                    <div className="Menu-Cart" style={{
                        "padding": "60px 10px 0px 10px",
                        "marginTop": "-20px"
                    }}>

                        <div className="inner-Menu" >
                            <h1 id="Menu-style">Choose Your Menu</h1>

                            <div>
                                <h1 style={{
                                    "display": "inline-block",
                                    "margin": "30px"
                                }}>{this.state.displayType}</h1>
                                <input onChange={this.handleChange} value={this.inputSearch} name="inputSearch" id="inputSearch" placeholder="Search your item" style={{
                                    "padding": "5px",
                                    "fontSize": "22px",
                                    "backgroundColor": "#f5edc0",
                                    "margin": "10px"
                                }} /><button style={{ "padding": "12px", "marginRight": "30px" }} onClick={this.clearSearch}>Clear</button>
                                <h2 style={{ "fontSize": "22px", "display": "inline-block" }}>Filter Items </h2>

                                <select onChange={this.handleSelect}
                                    style={{
                                        "fontSize": "22px",
                                        "padding": "10px"
                                    }}

                                    id="filterItems"
                                >
                                    <option value="all">All</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="sweets">Sweets</option>
                                    <option value="snacks">Snacks</option>
                                    <option value="special">Special</option>
                                </select>
                                <hr style={{ "height": "10px" }} />
                            </div>
                            <div>
                                {
                                    this.state.searchFilter.map((item, i) => {
                                        return (
                                            <div key={item._id} className="card"
                                                style={{
                                                    "display": "inline-block",
                                                    "backgroundColor": "#f5d76c",
                                                    "borderWidth": "5px",
                                                    "marginLeft": "10px",
                                                    "marginBottom": "10px",
                                                    "width": "300px",
                                                    "height": "300px"
                                                }}>

                                                {/* <div key={item._id} className="card"> */}
                                                <div key={item.id} className='card-body' style={{ "cursor": "pointer", "zIndex": "1" }} onClick={() => { this.checkboxChange(item._id, item.name, item.inCart) }} >
                                                    <div style={{ "width": "250px", "height": "110px" }}>
                                                        <img src={item.imgUrl} alt={item.name + " image"} width="250px" height="110px" />
                                                        {/* <img src={require(item.imgUrl)} alt={item.name + " image"} width="250px" height="110px" /> */}
                                                    </div>
                                                    <div style={{ "height": "100px", "width": "250px", "display": "table-cell", "verticalAlign": "middle" }}>
                                                        <h1 style={{ "textAlign": "center" }}>{item.name}</h1>
                                                    </div>
                                                    <input type="checkbox" style={{
                                                        "marginLeft": "40%",
                                                        "width": "40px",
                                                        "height": "40px",
                                                        "cursor": "pointer"
                                                    }} checked={item.isSelected} onChange={() => { }} />

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Cart cartItems={this.state.cartItems}
                            items={this.state.items}
                            removeItemFromCart={this.removeItemFromCart}
                            resetIsSelected={this.resetIsSelected}
                            requestOrder={this.requestOrder} />
                    </div>
                )
                    :
                    (
                        null
                    )

                }
            </div>
        );
    }
} 