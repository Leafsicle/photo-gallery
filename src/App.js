import React, { Component } from 'react'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
	render() {
		return (
			<div className="container">
				{/* hard-code the page to include the header and main section
        the main section will have two asides contained therein that will be flexed
        once this main page is hard-coded, break the CategoryList, PhotoList, PhotoDetails into separate components
        ensure static site works as desired. Use a router and switch on the APP.js
        */}
				<header className="title">
					<h1>Things I Like</h1>
					<p>A Photo Gallery by Jason L Perry</p>
				</header>
				<main className="columns">
					<CategoryList />
					<PhotoList />
					<PhotoDetail />
				</main>
			</div>
		)
	}
}

export default App
