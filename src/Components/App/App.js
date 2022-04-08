import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchResults: [
				{
					name: 'name1',
					artist: 'artist 1',
					album: 'album 1',
					id: 1,
				},
				{
					name: 'name 2',
					artist: 'artist 2',
					album: 'album 2',
					id: 2,
				},
				{
					name: 'name 3',
					artist: 'artist 3',
					album: 'album 3',
					id: 3,
				},
			],
			playlistName: 'Oldies Playlist',
			playlistTracks: [
				{
					name: 'playlistName1',
					artist: 'playlistArtist1',
					album: 'playlistAlbum1',
					id: 4,
				},
				{
					name: 'playlistName2',
					artist: 'playlistArtist2',
					album: 'playlistAlbum2',
					id: 5,
				},
				{
					name: 'playlistName3',
					artist: 'playlistArtist3',
					album: 'playlistAlbum3',
					id: 6,
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className='highlight'>mmm</span>ing
				</h1>
				<div className='App'>
					<SearchBar />
					<div className='App-playlist'>
						<SearchResults searchResults={this.state.searchResults} />
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
