import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://travelogic.herokuapp.com/api'
    baseURL: 'http://localhost:4000/api'

});

// export const imagePath = 'https://travelogic.herokuapp.com/uploads'
export const imagePath = 'http://localhost:4000/uploads'



export default instance;
