import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import { getLecture } from '../../api.js';

/* todo taka við mynd */

export default class Header extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
  }  

  render() {
    const { category, title } = this.props;
    getLecture("html-sagan");

    return (
      <header className="heading heading--main">
        <span className="heading__category">{category}</span>
        <h1 className="heading__title">{title}</h1>
      </header>
    );
  }
}
