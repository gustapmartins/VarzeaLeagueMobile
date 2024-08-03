import axios from 'axios';

const ApiVarzeaLeague = axios.create({
    baseURL: 'http://192.168.15.68:8080/api/v1/',
    responseType: 'json',
    withCredentials: true,
})

export default ApiVarzeaLeague;