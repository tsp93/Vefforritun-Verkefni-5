import React from 'react';

import './Item.scss';

export default class Item extends React.Component {

  itemHtml (type, data, attribute, caption) {
    let keyCounter = 0;
    switch (type) {
      case 'youtube':
        return (<iframe className="item__iframe" title={data} src={data} frameBorder="0" allowFullScreen={true}></iframe>);
      case 'text':
        const split = data.split('\n');
        return split.map((text) =>
          <p key={keyCounter += 1} className={"item__" + type}>{text}</p>
        );
      case 'list':
        const list = data.map((listItem) =>
          <li key={keyCounter += 1} className="item__li">{listItem}</li>
        );
        return (<ul className={"item__" + type}>{list}</ul>);
      case 'heading':
        return (<h3 className={"item__" + type}>{data}</h3>);
      case 'code':
        return (<pre className={"item__" + type}>{data}</pre>);
      case 'quote':
        return (
          <blockquote>
            <p className={"item__" + type}>{data}</p>
            <p className={"item__" + attribute}>{attribute}</p>
          </blockquote>
        );
      case 'image':
        return (
          <div>
            <img className="image_img" alt={caption} src={data}></img>
            <p>{caption}</p>
          </div>
        );
      default:
        return <div>{data}</div>;
    }
  }

  render() {
    const { type, data, attribute, caption } = this.props;

    return (
      <div className={'item item--' + type}>
        <div className="item__content">
          {this.itemHtml(type, data, attribute, caption)}
        </div>
      </div>
    );
  }
}