import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const scatId = 'Hell yeah';
    return (
        <div className="EditScat">
            <h1>Edit Scat</h1>
            <h2>This Scat Id is {scatId} </h2>
        </div>
    );
  }
}

export default EditScat;
