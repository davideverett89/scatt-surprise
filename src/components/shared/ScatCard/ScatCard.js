import React from 'react';

import './ScatCard.scss';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
        <div className="ScatCard">
            <h1>{scat.location}</h1>
        </div>
    );
  }
}

export default ScatCard;
