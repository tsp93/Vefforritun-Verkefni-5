import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export default class Header extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { category, title, background } = this.props;
    let headStyle;

    if (background != null) {
      headStyle = {
        backgroundImage: `url(${background})`,
      };
    }
    else {
      headStyle = {
        backgroundImage: `url(/img/header.jpg)`,
      };
    }
    

    return (
      <header style={headStyle} className="heading heading--main">
        <span className="heading__category">{category}</span>
        <h1 className="heading__title">{title}</h1>
      </header>
    );
  }
}
