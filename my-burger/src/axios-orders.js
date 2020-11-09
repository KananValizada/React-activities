import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://my-react-burger-cf0bc.firebaseio.com'
})

export default instance