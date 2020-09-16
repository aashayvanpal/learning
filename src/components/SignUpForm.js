import React from 'react'
import axios from '../config/axios.js'


export default class SignUpForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: '',
            password: '',
            isCaterer: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log("inside handle submit button clicked!")

        console.log("Signup data :", this.state)
        // post request to create new user

        const user = {
            "username": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
        }

        axios.post('/register', user, {
            headers: {
                "x-auth": localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.errors) {
                    console.log('Validation Error : ', response.data.errors)
                    window.alert(response.data.message)
                }
                else {
                    console.log('successfully created user', response.data)
                    // this.props.history.push('/items')
                }
            })

        alert('account created successfully')
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckboxChange = () => {
        console.log('this.state.isCaterer before:', this.state.isCaterer)
        let change = !this.state.isCaterer
        console.log('change:', change)
        this.setState({ isCaterer: change })
        console.log('this.state.isCaterer after:', this.state.isCaterer)
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputBox" placeholder="Full Name" name="name" onChange={this.handleChange} value={this.state.name} /><br />
                    <input className="inputBox" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} /><br />
                    <input className="inputBox" type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} /><br />
                    <input type="checkbox" id="caterer" name="isCaterer" onChange={this.handleCheckboxChange} checked={this.state.isCaterer}
                        style={{
                            "marginLeft": "30%",
                        }} />
                    <label style={{
                        "fontSize": "32px",
                        "marginLeft": "30px",
                    }} htmlFor="caterer" > I am Caterer</label><br />
                    <input style={{
                        "marginLeft": "35%",
                    }} type="submit" value="Create Account"
                        style={{
                            "marginLeft": "27%", "padding": "25px", "width": "350px", "borderRadius": "50px", "color": " white",
                            "backgroundColor": "#dbc268", "fontSize": "32px", "boxShadow": "5px"
                        }}
                    />
                </form>
                <h3 style={{ "textAlign": "center", "marginTop": "20px" }}>Already have an account ? <a href="/signin">Sign in</a></h3>
            </div>
        )
    }
}