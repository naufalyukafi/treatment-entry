import axios from 'axios'

const Http = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL,
    timeout: 30000
});

export default Http;
