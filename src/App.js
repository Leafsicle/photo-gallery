import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

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
					<aside className="column">
						This will be a panda
						<h2>Panda Bears</h2>
						<p>
							Pandas are bears native to south-central China, and are
							objectively the cutest animals on earth.
						</p>
						<div>This will be a panda picture!</div>
					</aside>

					<aside className="column">
						This will be a miniatures page
						<h2>Miniature Painting</h2>
						<p>
							I enjoy painting miniatures. I've only been painting for about
							6-months, here's some of my work.
						</p>
						<div>This will be a miniatures picture!</div>
					</aside>
				</main>
			</div>
		)
	}
}

export default App
