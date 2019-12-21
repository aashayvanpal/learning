// Add exact path for adddetails

import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import ItemList from './GUI/ItemList';
import AddUsers from './GUI/AddUsers.js';
import Calender from './GUI/Calender.js';
import AddItems from './GUI/AddItems';
import ItemDetailsForm from './GUI/ItemDetailsForm.js';

function App() {
  return (
    <div>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>


      <h1>Aaswad Caterers</h1>
      <BrowserRouter>
        <Link to='/' >Home</Link>&nbsp;
        <Link to='/Menu' >Menu</Link>&nbsp;
        <Link to='/Cart' >My Cart </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/users/add' >Add users</Link>&nbsp;
        <Link to='/items/add' >Add Items</Link>&nbsp;
        <Link to='/Calender' >Calender</Link>&nbsp;
        <Link to='/previousorders' >Previous Orders</Link>&nbsp;
        <div>
          <Route exact path="/" >
          <h1>Home :</h1>



          </Route>

          <Route path="/Menu" >
            <h1>Menu Items :</h1>
            <ItemList />
          </Route>

          <Route path="/Cart" >
            <h1>Cart:</h1>

          </Route>

          <Route path="/users/add" >
            <h1>Add users :</h1>
            <AddUsers />
          </Route>
        
          <Route path="/items/add" >
            <h1>Add Items :</h1>
            <AddItems  />
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
