import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBz3S5_lYnkE9RzVsVw_cKMjOqoxa-rdh8';

// Create a new component. This component should produce some HTML
// functional based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch( {key: API_KEY, term: 'nas'}, (videos) => {
      this.setState( { videos: videos } );
      // alt ES6 syntax when kName=vName:
      // this.setState ( { videos } );
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// Create instance of App class using <App />
// Take component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));