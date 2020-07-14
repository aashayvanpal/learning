// Add exact path for adddetails

import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Menu from './components/ItemList';
import OrderList from './components/OrderList';
import AddUserData from './components/AddUserData.js';
// import Calender from './GUI/Calender.js';
import ItemList from './components/item/List.js';
import ItemEdit from './components/item/Edit.js';
import ItemShow from './components/item/Show.js';
import ItemForm from './components/item/Form.js';
import ItemNew from './components/item/New.js';
import ItemDetailsForm from './components/ItemDetailsForm.js';
import './css/app-css.css'

function App() {
  return (
    <div className="app">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" crossOrigin="anonymous"></link>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>


      <h1 >Aaswad Caterers</h1>
      <BrowserRouter >
        <Link to='/' style={{ "color": "black" }}>Home</Link>&nbsp;
        <Link to='/Menu' style={{ "color": "black" }}>Menu</Link>&nbsp;
        <Link to='/Cart' style={{ "color": "black" }} >My Cart </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="align" >
          <div className="Nav-bar">
            <ul>
              <li>
                <Link to='/orders' style={{ "color": "white" }} >Orders</Link>&nbsp;
          </li>
              <li>
                <Link to='/items' style={{ "color": "white" }} >Items</Link>&nbsp;
          </li>
              <li>
                <Link to='/users/add' style={{ "color": "white" }} >Vendors</Link>&nbsp;
          </li>
              <li>
                <Link to='/users/add' style={{ "color": "white" }} >Labourers</Link>&nbsp;
          </li>
              <li>
                <Link to='/users/add' style={{ "color": "white" }} >Customers</Link>&nbsp;
          </li>
              <li>
                <Link to='/users/add' style={{ "color": "white" }} >Recipies</Link>&nbsp;
          </li>
              <li>
                <Link to='/Calender' style={{ "color": "white" }} >Calender</Link>&nbsp;
          </li>
            </ul>
          </div>
          <div className="content-showcase">
            <Route exact path="/" >
              <h1 >Home component</h1>



            </Route>

            <Route path="/Menu" >
              <h1 style={{ "backgroundColor": "#F5EDC0","border":"2px solid black","text-align":"center" }}>Choose Your Menu</h1>
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
            <Route path="/orders" >
              <OrderList />
            </Route>
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
