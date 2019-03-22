import React from 'react';
import PropTypes from 'prop-types';
import LectureBox from '../lectureBox/LectureBox';

import './LectureList.scss';

export default class LectureList extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { lectures } = this.props;

    return (
      <main>
      <ul className="filters">
        <li><button data-category="html" className="filters__filter filters__filter--html">HTML</button></li>
        <li><button data-category="css" className="filters__filter filters__filter--css">CSS</button></li>
        <li><button data-category="javascript" className="filters__filter filters__filter--js">JavaScript</button></li>
      </ul>
        <div className="list">
          <div className="list__row">
            {lectures.map( lecture => (
              <LectureBox
                key={lectures.indexOf(lecture)}
                slug={lecture.slug}
                thumbnail={lecture.thumbnail}
                category={lecture.category}
                title={lecture.title}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}