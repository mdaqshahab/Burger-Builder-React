import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e7a0e.firebaseio.com/'
});

export default instance;