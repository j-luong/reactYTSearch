import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBz3S5_lYnkE9RzVsVw_cKMjOqoxa-rdh8';

// Create a new component. This component should produce some HTML
// functional based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }

  videoSearch(term) {
    YTSearch( {key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // alt ES6 syntax when kName=vName:
      // this.setState ( { videos } );
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={ (term) => this.videoSearch(term) }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
};

// Create instance of App class using <App />
// Take component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
