import React from 'react';
import SearchBar from './components/SearchBar';
import FoodCard from './components/FoodCard';

import './App.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <SearchBar />
                <FoodCard />
            </div>
        )
    }
}

export default App;

