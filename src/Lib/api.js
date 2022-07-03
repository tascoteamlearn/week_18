import axios from "axios";

//Set the axios base on used API
let mainApi = axios.create({
    baseURL:"https://api.escuelajs.co/api/v1"
})

// let productApi = axios.create({
//     baseUrl:"askdjbakdjba",
    
// })


// export {mainApi, productApi}
export {mainApi}