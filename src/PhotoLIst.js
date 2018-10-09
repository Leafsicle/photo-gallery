import React, { Component } from 'react'

class PhotoList extends Component {
	render() {
		return (
			<article>
				<h2>Panda Bears</h2>
				<p>
					Pandas are bears native to south-central China, and are objectively
					the cutest animals on earth.
				</p>
				<img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
				<p>Panda Waving</p>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG" />
				<p>Großer Panda im Ocean Park, Hongkong</p>
			</article>
		)
	}
}

export default PhotoList
