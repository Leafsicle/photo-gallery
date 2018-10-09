import React, { Component } from 'react'
import Data from './Data.json'

class PhotoDetail extends Component {
	render() {
		return (
			<article>
				<h1>{Data['pandas'].photos[0].title}</h1>
				<img src={Data['pandas'].photos[0].imageURL} />
				<a href={Data['pandas'].photos[0].sourceURL} />
			</article>
		)
	}
}

export default PhotoDetail
