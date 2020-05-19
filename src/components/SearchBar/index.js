import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    render() {
        return(
            <Paper elevation={8} variant="outlined">
                <TextField id="searchBarInput" label="Search for you food!"/>
            </Paper>
        )
    }
}

export default SearchBar;