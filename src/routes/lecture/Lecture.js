import React, { Component } from 'react';

import { getLecture } from '../../api';

import Header from '../../components/header/Header';
import Contents from '../../components/contents/Contents';
import Footer from '../../components/footer/Footer';


export default class Lecture extends Component {

  render() {
    
    const { match } = this.props;
    let { lecture } = match.params;

    lecture = getLecture(lecture);

    return (
      <React.Fragment>
        <Header category={lecture.category} title={lecture.title} />
        <Contents contents={lecture.content} />
        <Footer finished={lecture.finished} slug={lecture.slug} />
      </React.Fragment>
    );
  }
}