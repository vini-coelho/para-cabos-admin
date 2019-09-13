import axios from 'axios';

const api = axios.create({
    baseURL: 'https://para-cabos-backend.herokuapp.com/',
});

export default api;