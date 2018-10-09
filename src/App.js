import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<header className="title">
						<h1>Things I Like</h1>
						<p>A Photo Gallery by Jason L Perry</p>
					</header>
					<nav>
						<ul>
							<li>
								<Link to="/">Home?</Link>
							</li>
						</ul>
					</nav>
					<main className="columns">
						<Switch>
							<Route exact path="/" component={CategoryList} />
							<Route exact path="/:category" component={PhotoList} />
							<Route path="/:category/:index" component={PhotoDetail} />
						</Switch>
					</main>
				</div>
			</Router>
		)
	}
}

export default App
