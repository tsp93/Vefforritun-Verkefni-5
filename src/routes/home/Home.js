import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Filters from '../../components/filters/Filters';
import LectureList from '../../components/lectureList/LectureList';

export default class Home extends Component {

  state = {
    lectures: getLectureList([]),
  }

  handleFilter = (filters) => {
    const lectures = getLectureList(filters);
    this.setState({ lectures: lectures });
  }

  render() {
    const { lectures } = this.state;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <Filters changeFilter={this.handleFilter}/>>
        <LectureList lectures={lectures}/>>
      </React.Fragment>
    );
  }
}
