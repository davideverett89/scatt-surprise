import React from 'react';
import { Link } from 'react-router-dom';

import './SingleScat.scss';

import scatData from '../../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    singleScat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatData.getSingleScat(scatId)
      .then((response) => {
        this.setState({ singleScat: response.data });
      })
      .catch((err) => console.error('Unable to get single scat:', err));
  }

  removeScat = () => {
    const { scatId } = this.props.match.params;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('Unable to delete scat:', err));
  }

  render() {
    const { singleScat } = this.state;
    const { scatId } = this.props.match.params;
    const editLink = `/edit/${scatId}`;
    return (
        <div className="SingleScat">
            <h1>{singleScat.location}</h1>
            <Link to={editLink} className="btn btn-info">EDIT</Link>
            <button className="btn btn-danger" onClick={this.removeScat} >DELETE</button>
        </div>
    );
  }
}

export default SingleScat;
