// App version 1.0
// Add exact path for add details
/*
Fixes :
Front end for home/landing page must be completed 
All pages must be made responsive

in  bill add per plate cost with respect to number of people

/qurries section , display customer qurries

Clear the code clutter ,clean up unwated comments and also refine the code with comments on each function
Authentication : If not logged in , redirect to Login page
Authentication to individual paths (/menu,/orders) 
  add order now when user is logged out
  add User icon to the right top corner when logged in 
put welcome message and add the username to the logout menu options
show only the user's items , menus , orders 
in /orders , when remove button is clicked , pop up confirmation message (are you sure you want to delete? message)
  Update button should select the previous selected items and add to cart
  Search order and filter by customer name
  Add a filter to get orders between 2 dates
Add vendors , transport ,customer backend code 
settings option
Dashboard creation - graphs , profits ,incomes
create settings option from the user icon dropdown
All all images to items
on click of clear button on /menu page , the cursor must be blinking on the search bar
Make the whole website responsive
Create contact page(v1.0):
Bugs :
Css placement for the map is not perfect , all pages are not responsive 
Fix all fontsizes of contact us page , add the customer querry from the contact us page
querry CRUD
querry Validation

Major Update:(v1.0.1)
Trying to integrate Google maps in contact us page
*/



import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Menu from './components/ItemList';
import OrderList from './components/OrderList';
import OrderShow from './components/order/Show.js';
import OrderPrint from './components/order/Print.js';


import AddUserData from './components/AddUserData.js';
// import Calender from './GUI/Calender.js';
import ItemList from './components/item/List.js';
import ItemEdit from './components/item/Edit.js';
import ItemShow from './components/item/Show.js';
// import ItemForm from './components/item/Form.js';
import ItemNew from './components/item/New.js';
import ItemDetailsForm from './components/ItemDetailsForm.js';
import CustomerRequest from './components/CustomerRequest.js'

import './css/app-css.css'
import ItemCard from './components/ItemCard';
import SignUpForm from './components/SignUpForm.js'
import SignInForm from './components/SignInForm.js'

import UserButton from './components/UserButton.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import Qurries from './components/Qurries.js'



function App() {
  return (
    <div className="app">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

      <BrowserRouter >

        <div className="header">
          <h1 style={{
            "textAlign": "left",
            "fontSize": "64px",
            "marginRight": "200px",
            "marginLeft": "20px",
            "fontFamily": "Old Standard TT",
          }}><Link to="/" style={{ "textDecoration": "none", "color": "black" }}>Aaswad Caterers</Link></h1>
          <div style={{ "display": "flex", "position": "absolute", "right": "15px" }}>

            <h2 className="linkEnquiry">
              <Link to="/Register"
                style={{ "backgroundColor": "#dbc268", "border": "none", "cursor": "pointer" }}>
                Order Now !
              </Link>
            </h2>
            
            <h2 className="linkEnquiry">
              <Link to="/contactus"
                style={{ "backgroundColor": "#dbc268", "border": "none", "cursor": "pointer" }}
              >Contact Us</Link>
            </h2>


            {/* <div > */}
            {/* <button onClick={() => { console.log("iamge clicked!") }}>

                <img src="./images/User.png" alt="" />
              </button> */}
            {/* <input type="image" src="./images/User.png" alt="image"  /> */}
            {/* <button className="user" onClick={() => { console.log('clicked image') }} /> */}
            <UserButton />
            {/* </div> */}

            <div id="burger" onClick={() => {
              console.log('burger clicked!')
              document.getElementById("mySidenavMobile").style.width = "180px";
              document.getElementById("mySidenavMobile").style.display = "inline";
            }}>
              <div id="bar"></div>
              <div id="bar"></div>
              <div id="bar"></div>
            </div>

            <div className="topNav">
              {/* <span><Link to='/' style={{ "color": "black" }}>Home</Link></span>&nbsp;
          <span><Link to='/Menu' style={{ "color": "black" }}>Menu</Link></span>&nbsp;
          <span><Link to='/Cart' style={{ "color": "black" }} >My Cart </Link></span> */}

              <div id="mySidenavMobile">
                <button id="x-mark" className="closebtn" onClick={() => {
                  console.log('clicked on close button')
                  document.getElementById("mySidenavMobile").style.display = "none";
                  document.getElementById("mySidenavMobile").style.width = "0";
                }}>&times;</button>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/Menu">Menu</a></li>
                  <li><a href="/cart">My Cart</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>



        <div className="align" >
          <div id="Nav-bar">
            <ul style={{ "listStyleType": "none" }}>
              <button style={{
                "marginLeft": "109px",
                "background": "#0e235f",
                "border": "none",
                "color": "white",
                "cursor": "pointer"
              }} onClick={() => {
                var navBarElement = document.getElementById("Nav-bar")
                navBarElement.style.display = "none"

                var showElement = document.getElementById("ShowButton")
                showElement.style.display = "block"
              }}>X</button>
              <Link to='/' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Home</li></Link>
              <Link to='/Dashboard' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Dashboard</li></Link>
              <Link to='/Menu' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Menu</li></Link>

              <Link to='/orders' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Orders</li></Link>

              <Link to='/items' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Items</li></Link>
              <Link to='/users/add' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Vendors</li></Link>
              <Link to='/users/add' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Labourers</li></Link>
              <Link to='/users/add' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Customers</li></Link>
              <Link to='/users/add' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Recipies</li></Link>
              <Link to='/Calender' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Calender</li></Link>
              <Link to='/Qurries' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Qurries</li></Link>
            </ul>
          </div>
          <div className="content-showcase">



            <Route exact path="/" >

              <HomePage />


            </Route>

            <Route path="/dashboard" >
              <h1 style={{ "backgroundColor": "green" }}>Dashboard:</h1>

            </Route>

            <Route path="/Menu" >
              <button id="ShowButton" onClick={() => {
                var navBarElement = document.getElementById("Nav-bar")
                navBarElement.style.display = "block"

                var showElement = document.getElementById("ShowButton")
                showElement.style.display = "none"

              }}>Show</button>
              <h1 className="Link-Navigations">
                <span id="Link"><Link to="/">Home</Link></span>
                <span id="Link"><Link to="/Menu">Menu</Link></span>
                <span id="Link"><Link to="/Cart">Cart</Link></span>
              </h1>
              <Menu />
              <ItemCard />
            </Route>

            <Route path="/Cart" >
              <h1 style={{ "backgroundColor": "green" }}>Cart:</h1>

            </Route>

            <Route path="/users/add" >
              <h1>Add User :</h1>

            </Route>


            <Route exact path="/users/add" render={() =>

              <AddUserData />} />



            {/* <Route exact path="/Transport/add" >
            <h1>Add Transport</h1>
            {/* <AddTransport /> */}

            {/* </Route> */}
            {/*           
          <Route exact path="/vendor/add" >
            <h1>Add Vendor</h1>
            <AddVendor /> */}

            {/* </Route>  */}

            <Route path="/request" component={CustomerRequest} />



            <Route exact={true} path="/items" >
              <button id="ShowButton" onClick={() => {
                var navBarElement = document.getElementById("Nav-bar")
                navBarElement.style.display = "block"

                var showElement = document.getElementById("ShowButton")
                showElement.style.display = "none"

              }}>Show</button>
              <ItemList />
            </Route>

            <Route path="/items/add" component={ItemNew} exact={true} />

            <Route path={"/items/edit/:id"} >
              <ItemEdit />
            </Route>

            <Route path="/items/show/:id" component={ItemShow} />


            <Route path="/items/add/adddetails" >
              <h1>Listing Details :</h1>
              <ItemDetailsForm />
            </Route>

            {/* <Route path="/orders/add" >
            <h1>Add Orders :</h1>
          </Route> */}

            <Route path="/Calender" >
              <h1>Calender : </h1>
              {/* <Calender  /> */}

            </Route>
            <Route exact path="/orders" >

              <OrderList />
            </Route>
            <Route exact path="/orders/:id" component={OrderShow} />



            <Route path="/orders/:id/print" component={OrderPrint} />


            <Route path="/Register" >
              {/* <h1> Registration page </h1> */}
              <div className="SignUpCard">
                <h1 style={{ "fontSize": "36px", "textAlign": "center" }}> Sign Up </h1>
                <SignUpForm />
              </div>
            </Route>

            <Route path="/Signin" >
              {/* <h1> Signin page </h1> */}
              <div className="SignUpCard">
                <h1 style={{ "fontSize": "36px", "textAlign": "center" }}> Sign In </h1>

                <SignInForm />
              </div>
            </Route>

            <Route path="/contactus">
              <Contact />
            </Route>

            <Route path="/settings" >
              <h1 style={{ "backgroundColor": "blue" }}>Settings:</h1>
              <h1 style={{}}>App Version : 1.0v</h1>

            </Route>

            <Route path="/aboutus" >
              <h1 style={{ "backgroundColor": "blue" }}>About us Page</h1>

            </Route>

            <Route path="/Qurries" >
              <h1 style={{ "backgroundColor": "blue" }}>Qurries Page</h1>

            </Route>
          </div>
        </div>
      </BrowserRouter>


    </div >
  );
}




export default App;
