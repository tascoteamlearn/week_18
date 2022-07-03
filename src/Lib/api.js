import axios from "axios";

//Set the axios base on used API
let mainApi = axios.create({
    baseURL:"https://api.escuelajs.co/api/v1"
})


export {mainApi}