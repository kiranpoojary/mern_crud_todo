import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import mytodo from './TodoList'
import edit from './EditTodo'
import create from './CreateTodo'
import logo from '../images/profile.png'

class Register extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.google.com/search?sxsrf=ALeKk038rcSbyjRvEF5eDDfQ3F5xupu91w%3A1604666588529&source=hp&ei=3ESlX7aTHpWW4-EPlOmA0AU&q=react&oq=react&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIICAAQyQMQkQIyBQgAEJECMgQIABBDMgcIABCxAxBDMgQIABBDMgQIABBDMgQIABBDOgcIIxDqAhAnOg0ILhDHARCjAhDqAhAnOgIILjoFCC4QsQM6AggAOggIABCxAxCDAToECC4QQzoHCAAQyQMQQ1DOWVizZWC5aWgBcAB4AIAB3gKIAd0IkgEHMC4yLjIuMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=psy-ab&ved=0ahUKEwi28fXv-O3sAhUVyzgGHZQ0AFoQ4dUDCAc&uact=5" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="Img not found" />
            </a>
            <Link to="/" className="navbar-brand">Todo Apps</Link>
            <div className="collpse nav-collpse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link active">MyTodo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>

              </ul>
            </div>
          </nav>

          <Route path="/" exact component={mytodo} />
          <Route path="/edit/:id" component={edit} />
          <Route path="/create" component={create} />
        </div>
      </Router>

    )
  }
}

export default Register
