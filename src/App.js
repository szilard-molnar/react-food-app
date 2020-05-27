import React from 'react';
import SearchBar from './components/SearchBar';
import { Grid } from '@material-ui/core';
import FoodCard from './components/FoodCard';
import API from './components/api/foodApi.js';
import './App.css';

class App extends React.Component {
    state = {
        recipes: []
    }

    handleSubmit = async (searchTerm) => {
        const apiResponse = new API.get('search', {
            "params": {
                "ingredients": searchTerm,
                "number": "3",
            }
        });
        console.log("this is the api response ", apiResponse);
    }

    render() {
        return(
            <div>
                <Grid>
                    <SearchBar onFormSubmit={this.handleSubmit}/>
                </Grid>
                <Grid>
                    <FoodCard>{this.state.recipes}</FoodCard>
                </Grid>
            </div>
        )
    }
}

export default App;

