import React, { Component } from 'react'
import Data from './Data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class PhotoDetail extends Component {
	render() {
		const category = this.props.match.params.category
		const index = this.props.match.params.index

		return (
			<article>
				<h1>{Data[category].photos[index].title}</h1>
				<img src={Data[category].photos[index].imageURL} />
				<a href={Data[category].photos[index].sourceURL} />
			</article>
		)
	}
}

export default PhotoDetail
