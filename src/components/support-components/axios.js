import axios from 'axios';
const instance = axios.create({
    // baseURL: 'https://travelogic.herokuapp.com/api'
    baseURL: 'https://omniscient-silent-eel.glitch.me/api'

});

// export const imagePath = 'https://travelogic.herokuapp.com/uploads'
export const imagePath = 'https://omniscient-silent-eel.glitch.me/uploads'



export default instance;
