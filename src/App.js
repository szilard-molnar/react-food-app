import React from 'react';
import SearchBar from './components/SearchBar';
import FoodCard from './components/FoodCard';
import API from './components/api/foodApi';
import './App.css';

class App extends React.Component {
    state = {
        recipes: []
    }


    handleSubmit = async (searchTerm, event) => {
        event.preventDefault();
        const response = await API.callApi;
        console.log(response);
        this.setState({
            recipes: response
        })
    }

    render() {
        return(
            <div>
                <SearchBar onFormSubmit={this.handleSubmit}/>
                <FoodCard />
            </div>
        )
    }
}

export default App;

