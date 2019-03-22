import React from 'react';
import Helmet from 'react-helmet';
import Item from '../item/Item';

import './Contents.scss';

export default class Contents extends React.Component {

  render() {
    const { contents, title } = this.props;

    return (
      <main>
        <Helmet title={title} />
        <div className="lecture__content">
          <div className="lecture__row">
            <div className="lecture__col">
            {contents.map( item => (
              <Item
                key={contents.indexOf(item)}
                type={item.type}
                data={item.data}
                attribute={item.attribute}
                caption={item.caption}
              />
            ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}