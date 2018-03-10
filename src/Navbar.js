import React, {Component} from 'react';
import './navbar.css';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    <button className="button" type="button">
                        <Link to={"/index.js"} className="link">Home</Link>
                    </button>
                    <button className="button" type="button">
                        <Link to={"/friends.js"} className="link">Friends</Link>
                    </button>
                    <button className="button" type="button">
                        <Link to={"/messages.js"} className="link">Messages</Link>
                    </button>
                    <button className="button" type="button">
                        <Link to={"/requests.js"} className="link">Requests</Link>
                    </button>
                </div>
            </Router>
        )
    }
}

export default Navbar;