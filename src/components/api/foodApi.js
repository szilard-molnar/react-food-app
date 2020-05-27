import axios from 'axios';

export default axios.get("https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients=beef", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
		"x-rapidapi-key": "748ddc26b8mshb590d128ea3a157p115cd4jsn1816f6826646"
	}
})
.then(data => {
	const innerData = data.data;
	const titles = innerData.map(item => {
		const names = [];
		names[item.title] = item.title;

		return names;
	})
	console.log("this is coming from foodApi.js ", titles);
})
.catch(err => {
	console.log(err);
});