import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID w5DiGH1EAY8LPUjuJqi9rDAxjJEF50pDZRDwuN2vKh0'
    }
});