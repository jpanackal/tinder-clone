import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-part.herokuapp.com'
});

export default instance;