import React from 'react';
import { Link } from 'react-router-dom'

import './Footer.scss';

export default class Footer extends React.Component {

  render() {
    const { finished } = this.props;

    return (
      <footer className="lecture__footer">
        <button className={finished ? "lecture__finish--finished" : "lecture__finish"}>Klára fyrirlestur</button>
        <Link to="/" className="lecture__back">Til baka</Link>
      </footer>
    );
  }
}