import React, { Component } from 'react'
import './App.css'
import CategoryList from './CategoryList'

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
					<article>
						<h2>Panda Bears</h2>
						<p>
							Pandas are bears native to south-central China, and are
							objectively the cutest animals on earth.
						</p>
						<img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
						<p>Panda Waving</p>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG" />
						<p>Großer Panda im Ocean Park, Hongkong</p>
					</article>
					<article />
				</main>
			</div>
		)
	}
}

export default App
