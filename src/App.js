import React, { Component } from 'react'
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
						<h2>Panda Bears</h2>
						<p>
							Pandas are bears native to south-central China, and are
							objectively the cutest animals on earth.
						</p>
						<img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
					</aside>

					<aside className="column">
						<h2>Miniature Painting</h2>
						<p>
							I enjoy painting miniatures. I've only been painting for about
							6-months, here's some of my work.
						</p>
						<img
							src="https://instagram.ftpf1-1.fna.fbcdn.net/vp/ac13de8676b9e7d7b3a4f1aaf38a9a55/5C3728A2/t51.2885-15/e35/32203464_178578342778306_8009127367152762880_n.jpg"
							alt="Blood Rage, Ram Clan"
						/>{' '}
					</aside>
				</main>
			</div>
		)
	}
}

export default App
