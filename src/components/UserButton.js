import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from '../config/axios';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';



const UserButton = (props) => {

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const logout = () => {
    // Logout axios delete for /logout api goes here 
    console.log("logout clicked !")
    // console.log('username :',localStorage.getItem('username'))

    axios.delete('/logout', {
      headers: { 'x-auth': localStorage.getItem('token') }
    })
      .then((response) => {
        // console.log("response after logout :", response)
        console.log("response after logout :", response.data.notice)
      })
      .catch(err => { console.log(err) })
    props.history.push("/")

  }

  return (
    <ButtonDropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="user" style={{ "backgroundColor": "#dbc268", "border": "none" }}>

      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header> (Username)</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem><Link to="/settings">Settings</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={logout}>Logout</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default withRouter(UserButton)
