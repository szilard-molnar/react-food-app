import axios from 'axios';

const callApi = axios.get("https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients=chicken", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
		"x-rapidapi-key": "748ddc26b8mshb590d128ea3a157p115cd4jsn1816f6826646"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

export default callApi;