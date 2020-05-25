import React from 'react';
import SearchBar from './components/SearchBar';
import FoodCard from './components/FoodCard';
import API from './components/api/foodApi';
import './App.css';

class App extends React.Component {


    handleSubmit = async (searchTerm) => {
        const response = await API.getData('search', {
            params: {
                parameter: searchTerm,
            }
        })

        console.log(response);
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

