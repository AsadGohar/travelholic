import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://travelogic.herokuapp.com/api'
    baseURL: 'https://travelogic.glitch.me/api'

});

// export const imagePath = 'https://travelogic.herokuapp.com/uploads'
export const imagePath = 'https://travelogic.glitch.me/uploads'



export default instance;
