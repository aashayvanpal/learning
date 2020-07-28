// Add exact path for adddetails

import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Menu from './components/ItemList';
import OrderList from './components/OrderList';
import OrderShow from './components/order/Show.js';

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

function App() {
  return (
    <div className="app">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>


      <div>
        <h1 style={{ "textAlign": "center", "color": "white" }}>Aaswad Caterers</h1>
        <div id="burger" onClick={() => {
          console.log('burger clicked!')
          document.getElementById("mySidenavMobile").style.width = "180px";
          document.getElementById("mySidenavMobile").style.display = "inline";
        }}>
          <div id="bar"></div>
          <div id="bar"></div>
          <div id="bar"></div>
        </div>
      </div>

      <BrowserRouter >
        <div className="topNav">
          <span><Link to='/' style={{ "color": "black" }}>Home</Link></span>&nbsp;
          <span><Link to='/Menu' style={{ "color": "black" }}>Menu</Link></span>&nbsp;
          <span><Link to='/Cart' style={{ "color": "black" }} >My Cart </Link></span>

          <div id="mySidenavMobile">
            <button id="x-mark" class="closebtn" onClick={() => {
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
        <div className="align" >
          <div className="Nav-bar">
            <ul style={{ "listStyleType": "none" }}>

              <Link to='/orders' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Orders</li></Link>

              <Link to='/items' className="Nav-barLink" style={{ "textDecoration": "none" }}><li>Items</li></Link>
              <Link to='/users/add' className="Nav-barLink"><li>Vendors</li></Link>
              <Link to='/users/add' className="Nav-barLink"><li>Labourers</li></Link>
              <Link to='/users/add' className="Nav-barLink"><li>Customers</li></Link>
              <Link to='/users/add' className="Nav-barLink"><li>Recipies</li></Link>
              <Link to='/Calender' className="Nav-barLink"><li>Calender</li></Link>
            </ul>
          </div>
          <div className="content-showcase">
            <Route exact path="/" >
              <h1 >Home component</h1>



            </Route>

            <Route path="/Menu" >
              <h1 className="Link-Navigations">
                <span id="Link">Breakfast</span>
                <span id="Link">Lunch</span>
                <span id="Link">Dinner</span>
                <span id="Link">Snack</span>
              </h1>
              <h1 style={{ "backgroundColor": "#F5EDC0", "border": "2px solid black", "textAlign": "center" }}>Choose Your Menu</h1>
              <Menu />
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
              <ItemList />
            </Route>

            <Route path="/items/add" component={ItemNew} exact={true} />

            <Route path={"/items/edit/:id"} >
              <ItemEdit />
            </Route>

            <Route path="/items/show/:id" component={ItemShow} />




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

            <Route path="/items/add/adddetails" >
              <h1>Listing Details :</h1>
              <ItemDetailsForm />
            </Route>
          </div>
        </div>
      </BrowserRouter>


    </div>
  );
}




export default App;
