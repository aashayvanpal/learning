import Axios from 'axios'

const axios = Axios.create({
    // baseURL:'https://aaswad-caterers.herokuapp.com'
    baseURL: 'http://localhost:3001'

})
export default axios