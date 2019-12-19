import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import ItemList from './GUI/ItemList';

// var mongoose = require('mongoose')

// mongoose.connect('http://localhost:3000/test')

// var Schema = mongoose.Schema

// var UserSchema = new Schema({
//   name :String

// })

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
        <Link to='/Cart' >My Cart</Link>&nbsp;
        <Link to='/users/add' >Add users</Link>
        <div>
          <Route exact path="/" >



          </Route>
          <Route path="/Menu" >
            <h1>Menu Items :</h1>
            <ItemList />
          </Route>

          <Route path="/users/add" >
            <h1>Add users :</h1>
          </Route>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
