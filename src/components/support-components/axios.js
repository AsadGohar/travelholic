import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
    // baseURL: 'https://travelogic.glitch.me/api'

});

export const imagePath = 'https://travelogic.glitch.me/uploads'



export default instance;
