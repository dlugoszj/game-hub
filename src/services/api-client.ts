import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'74d09267396d45f8a57be8a26ecee9dc'
    }
})

