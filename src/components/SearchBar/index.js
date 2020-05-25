import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit = () => {
        const{ searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        alert("form submitted! " + this.state.searchTerm);
    }

    render() {
        return(
            <Paper elevation={8} variant="outlined" style={{padding: '20px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField id="searchBarInput" label="Search for you food!" onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;