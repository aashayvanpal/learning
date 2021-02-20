import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://aaswadcaterers.herokuapp.com/'
    // baseURL: 'http://localhost:3001'
    // baseURL: 'http://localhost:5000'

})
export default axios