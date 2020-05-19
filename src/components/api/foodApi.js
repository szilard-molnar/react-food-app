import axios from 'axios';

const API_KEY = "748ddc26b8mshb590d128ea3a157p115cd4jsn1816f6826646";

export default axios.create({
    baseURL: "webknox-recipes.p.rapidapi.com",
    params: {
        key: API_KEY,
        maxResults: 5,
    }
})