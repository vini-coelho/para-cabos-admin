import axios from 'axios';

const api = axios.create({
    baseURL: 'https://para-cabos-backend.herokuapp.com/',
    // baseURL: 'https://localhost:3333/',
});

export default api;