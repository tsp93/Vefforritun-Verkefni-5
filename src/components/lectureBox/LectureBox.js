import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './LectureBox.scss';

export default class LectureBox extends React.Component {
  static propTypes = {
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    finished: PropTypes.bool,
  }

  render() {
    const { slug, thumbnail, category, title, finished } = this.props;

    return (
      <div className="list__col">
        <Link to = {slug} className="listItem">
          <div className="listItem__image">
              <img src={thumbnail} alt=""></img>
          </div>
          <div className="listItem__bottom">
              <span className="listItem__category">{category}</span>
              <h2 className="listItem__title">{title}</h2>
              {finished ? <div className="listItem__finished">✓</div>: ""}
          </div>
        </Link>
      </div>
    );
  }
}