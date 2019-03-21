import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import LectureList from '../../components/lectureList/LectureList';

export default class Home extends Component {

  state = {
    lectures: getLectureList([]),
  }

  render() {
    const { lectures } = this.state;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <LectureList lectures={lectures}/>>
      </React.Fragment>
    );
  }
}
