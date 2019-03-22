import React from 'react';
import LectureBox from '../lectureBox/LectureBox';

import './LectureList.scss';

export default class LectureList extends React.Component {

  render() {
    const { lectures } = this.props;

    return (
      <div className="list">
        <div className="list__row">
          {lectures.map( lecture => (
            <LectureBox
              key={lectures.indexOf(lecture)}
              slug={lecture.slug}
              thumbnail={lecture.thumbnail}
              category={lecture.category}
              title={lecture.title}
              finished={lecture.finished}
            />
          ))}
        </div>
      </div>
    );
  }
}