import React, { Component } from 'react'
import Data from './Data.json'

class PhotoList extends Component {
	render() {
		return (
			<article>
				<h1>{Data['pandas'].title}</h1>
				<h2>{Data['pandas'].description}</h2>
				{Data['pandas'].photos.map(photo => {
					return (
						<figure>
							<img src={photo.imageURL} />
							<a href>{photo.title}</a>
						</figure>
					)
				})}
			</article>
		)
	}
}

export default PhotoList
