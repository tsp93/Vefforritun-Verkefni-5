import React from 'react';
import Helmet from 'react-helmet';

import './Error.scss';

export default class Error extends React.Component {

  render() {

    return (
      <div className="fofmain">
        <Helmet title="Síða fannst ekki" />
        <div className="fof">
          <h1>404 - Síða fannst ekki</h1>
        </div>
      </div>
    );
  }
}