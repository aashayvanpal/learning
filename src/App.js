// Add exact path for adddetails

import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import ItemList from './GUI/ItemList';
import AddUserData from './GUI/AddUserData.js';
import Calender from './GUI/Calender.js';
import AddItems from './GUI/AddItems';
import ItemDetailsForm from './GUI/ItemDetailsForm.js';

function App() {
  return (
    <div style={{ "backgroundColor": "grey", 'height': '100vh' }}>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>


      <h1 >Aaswad Caterers</h1>
      <BrowserRouter >
        <Link to='/' style={{ "color": "white" }}>Home</Link>&nbsp;
        <Link to='/Menu' style={{ "color": "white" }}>Menu</Link>&nbsp;
        <Link to='/Cart' style={{ "color": "white" }} >My Cart </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/users/add' style={{ "color": "white" }} >Add users</Link>&nbsp;


        {/* <Link to='/users/add/customer'style= {{ "color":"white"}} >Add Customer</Link>&nbsp;
        <Link to='/users/add/transport'style= {{ "color":"white"}} >Add Transport</Link>&nbsp;
        <Link to='/users/add/vendor'style= {{ "color":"white"}} >Add Vendor</Link>&nbsp; */}




        <Link to='/add/items' style={{ "color": "white" }} >Add Items</Link>&nbsp;
        <Link to='/Calender' style={{ "color": "white" }} >Calender</Link>&nbsp;
        <Link to='/previousorders' style={{ "color": "white" }} >Previous Orders</Link>&nbsp;
        <div>
          <Route exact path="/" >
            <h1 >Home :</h1>



          </Route>

          <Route path="/Menu" >
            <h1>Menu Items :</h1>
            <ItemList />
          </Route>

          <Route path="/Cart" >
            <h1 style={{ "background-color": "green" }}>Cart:</h1>

          </Route>

          <Route path="/users/add" >
            <h1>Add User :</h1>
          </Route>


          <Route exact path="/users/add" render={ ()=> <AddUserData />} />


          {/* <Route exact path="/Transport/add" >
            <h1>Add Transport</h1>
            {/* <AddTransport /> */}

          {/* </Route> */}
          {/*           
          <Route exact path="/vendor/add" >
            <h1>Add Vendor</h1>
            <AddVendor /> */}

          {/* </Route>  */}






          <Route path="/items/add" >
            <h1>Add Items :</h1>
            <AddItems />
          </Route>

          <Route path="/orders/add" >
            <h1>Add Orders :</h1>
          </Route>

          <Route path="/Calender" >
            <h1>Calender : </h1>
            {/* <Calender  /> */}

          </Route>
          <Route path="/previousorders" >
            <h1>Listing previous orders :</h1>
          </Route>
          <Route path="/items/add/adddetails" >
            <h1>Listing Details :</h1>
            <ItemDetailsForm />
          </Route>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
