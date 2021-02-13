import React from 'react'
import axios from '../config/axios.js'
import { withRouter } from 'react-router';
import '../css/LoginDetails/Signin.css'



class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            isCaterer: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log("inside handle submit button clicked!")

        console.log("Signin data :", this.state)
        // post request to create new user

        const user = {
            "email": this.state.email,
            "password": this.state.password,
        }

        axios.post('/login', user)
            .then(response => {
                if (response.data.errors) {
                    console.log('Validation Error : ', response.data.errors)
                    window.alert(response.data.message)
                }
                else {
                    console.log('typeof(response.data)', typeof (response.data))
                    if (typeof (response.data) == 'object') {
                        console.log('complete response', response)
                        console.log('token is :', response.data.token)
                        localStorage.setItem('token', response.data.token)
                        this.props.history.push('/menu')
                    }
                    else {
                        window.alert(response.data)

                    }
                }
            })



        // alert('account logged in successfully')
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
                    <input id="inputEmail" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} /><br />
                    <input id="inputPassword" type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} /><br />
                    <div style={{
                        "alignItems": "center"

                    }}>
                        <div style={{
                            "position": "relative",
                            "marginLeft": "auto",
                            "marginRight": "auto",
                            "display": "flex",
                            "width": "238px"

                        }}>
                            <input type="checkbox" id="caterer" name="isCaterer" onChange={this.handleCheckboxChange} checked={this.state.isCaterer}

                                style={{
                                }} />
                            <label style={{

                                "fontSize": "32px",
                                "marginLeft": "30px",
                            }} htmlFor="caterer" > I am Caterer</label><br />
                        </div>
                        <div style={{
                            "position": "relative",
                            "marginLeft": "auto",
                            "marginRight": "auto",
                            "display": "flex",
                            "width": "100%"

                        }}>
                            <input type="submit" value="Log In"
                                style={{
                                    "position": "relative",
                                    "marginLeft": "auto",
                                    "marginRight": "auto",
                                    "padding": "25px",
                                    "width": "100%",
                                    "borderRadius": "50px",
                                    "color": " white",
                                    "backgroundColor": "#dbc268",
                                    "fontSize": "32px",
                                    "boxShadow": "5px"
                                }}
                            />
                        </div>
                    </div>

                </form>
                <h3 id="already-have-account">Don't have an account ? <a href="/register">Sign Up</a></h3>
            </div>
        )
    }
}
export default withRouter(SignInForm)