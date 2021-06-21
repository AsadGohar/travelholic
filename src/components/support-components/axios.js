import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://server.travelogic.pk/api/'
});

// export const imagePath = 'https://travelogic.herokuapp.com/uploads'
export const imagePath = 'https://server.travelogic.pk/uploads'

export default instance;
