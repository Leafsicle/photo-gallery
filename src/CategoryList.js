import React, { Component } from 'react'
import Data from './Data.json'

class CategoryList extends Component {
	render() {
		return (
			<>
				<aside className="column">
					<h2>{Data.pandas.title}</h2>
					<p>
						Pandas are bears native to south-central China, and are objectively
						the cutest animals on earth.
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
					/>
				</aside>
			</>
		)
	}
}

export default CategoryList
