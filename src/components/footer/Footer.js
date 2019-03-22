import React from 'react';
import { Link } from 'react-router-dom'
import { toggleLectureFinish } from '../../api';

import './Footer.scss';

export default class Footer extends React.Component {

  state = {
    isFinished: this.props.finished,
  }

  clickHandler = (finished, slug) => {
    return (e) => {
      e.preventDefault();
      toggleLectureFinish(slug);

      this.setState({isFinished: !finished});
    }
  }

  render() {
    const { isFinished } = this.state;
    const { slug } = this.props;

    return (
      <footer className="lecture__footer">
        <button className={"lecture__finish" + (isFinished ? " lecture__finish--finished" : "")} onClick={this.clickHandler(isFinished, slug)}>
          {isFinished ? "✓ Fyrirlestur kláraður" : "Klára fyrirlestur"}
        </button>
        <Link to="/" className="lecture__back">Til baka</Link>
      </footer>
    );
  }
}