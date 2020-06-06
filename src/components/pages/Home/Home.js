import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = '12345';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
        <div className="Home">
            <h1>Home</h1>
            <button className="btn btn-dark" onClick={this.editEvent} >Edit A Thing</button>
            <Link to="/scats/ddsfagf">View Single Scat</Link>
        </div>
    );
  }
}

export default Home;
