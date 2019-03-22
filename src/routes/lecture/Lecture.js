import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { getLecture } from '../../api';

import Header from '../../components/header/Header';
import Contents from '../../components/contents/Contents';
import Footer from '../../components/footer/Footer';
import NotFound from '../notFound/NotFound';


export default class Lecture extends Component {

  render() {
    
    const { match } = this.props;
    let { slug } = match.params;

    const lecture = getLecture(slug);
    if (!lecture) {
      return (<Route component={NotFound} />);
    }

    return (
      <React.Fragment>
        <Header category={lecture.category} title={lecture.title} background={lecture.image} />
        <Contents contents={lecture.content} title={lecture.title} />
        <Footer finished={lecture.finished} slug={lecture.slug} />
      </React.Fragment>
    );
  }
}