import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
    // baseURL: 'https://server.travelogic.pk/api'

});

export const imagePath = 'https://server.travelogic.pk/uploads'

export default instance;
