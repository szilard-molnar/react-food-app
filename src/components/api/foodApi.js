import axios from 'axios';

const instance = axios.get({
    baseURL: 'https://webknox-recipes.p.rapidapi.com/recipes/search',
    headers: {
        "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
        "x-rapidapi-key": "748ddc26b8mshb590d128ea3a157p115cd4jsn1816f6826646",
    }
})

export default {
    getData: () => {
        instance({
            'method': 'GET',
            'url': '/query',
            'params': {
                'search': 'parameter',
            },
            transformResponse: [function (data) {
                console.log("Fetching data...");
                return data;
            }]
        })
    }
}