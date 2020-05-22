import React from 'react';
import './styles.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import API from '../api//foodApi';

class FoodCard extends React.Component {
    state = {
        recipes: []
    }
    render () {
        return(
            <Card className="recipeCard" variant="outlined">
                <CardContent>
                    <h1>this is a card</h1>
                </CardContent>
            </Card>
        )
    }
}

export default FoodCard;