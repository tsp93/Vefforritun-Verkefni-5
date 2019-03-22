import React from 'react';
import './Filters.scss';

export default class Filters extends React.Component {

  state = {
    filters: [],
  }

  clickHandler = (category) => {
    return (e) => {
      e.preventDefault();
      const { filters } = this.state;

      if (filters.includes(category)) {
        filters.splice(filters.indexOf(category), 1);
      }
      else {
        filters.push(category);
      }

      this.setState({ filters: filters });
      this.props.changeFilter(filters);
    }
  }

  render() {
    const { filters } = this.state;

    return (
      <ul className="filters">
        <li><button data-category="html" className={"filters__filter filters__filter--html" + (filters.includes("html") ? " filters__filter--active" : "")} onClick={this.clickHandler("html")}>HTML</button></li>
        <li><button data-category="css" className={"filters__filter filters__filter--css" + (filters.includes("css") ? " filters__filter--active" : "")} onClick={this.clickHandler("css")}>CSS</button></li>
        <li><button data-category="javascript" className={"filters__filter filters__filter--js" + (filters.includes("javascript") ? " filters__filter--active" : "")} onClick={this.clickHandler("javascript")}>JavaScript</button></li>
      </ul>
    );
  }
}