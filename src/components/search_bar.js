import React, { Component } from 'react';

// class based component
class SearchBar extends Component {
  constructor(props) {
    super(props); // calls parent class's (Component) constructor method

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ (event) => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
