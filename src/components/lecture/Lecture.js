import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import './Lecture.scss';

function Finished(props) {
  return <p>Huh</p>;
}

export default class LectureList extends React.Component {
  static propTypes = {
    slug: PropTypes.string,
    thumbnail: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { slug, thumbnail, category, title } = this.props;

    return (
      <div className="list__col">
        <Link to = {slug} className="listItem">
          <div className="listItem__image">
              <img src={thumbnail} alt=""></img>
          </div>
          <div className="listItem__bottom">
              <span className="listItem__category">{category}</span>
              <h2 className="listItem__title">{title}</h2>
          </div>
        </Link>
      </div>
    );
  }
}