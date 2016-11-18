import React, { Component } from 'react';

// class based component
class SearchBar extends Component {
  constructor(props) {
    super(props); // calls parent class's (Component) constructor method

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={ (event) => this.setState({ term: event.target.value }) }
        />
      </div>
    );
  }

  // ES6 syntax on line 13 makes the method below obsolete
  // <input onChange={ this.onInputChange } />
  // onInputChange(event) {
  //   this.setState({ term: event.target.value });
  // }
}

export default SearchBar;
