import React from 'react';
import ReactList from 'react-list';
import {generateRandomList} from '../helpers/utils';
import './Scroll.css'

export default class Scroll extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:  generateRandomList()
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  };

  handleScroll(event) {
    console.log('the scroll things', event)
  };

  render() {
    const getWidth = index => 100 + (10 * (index % 10));
    getWidth.toJSON = () => getWidth.toString();

    const rows = 2
    const height = this.props.height;
    const renderVariableWidthItem = (index, key) =>
      <div
        key={key}
        className={'item' + (index % 2 ? '' : ' even')}
        style={{width: `${getWidth(index)*0.5}px`,
              height:`${height/rows}px`,
            marginTop: '85px' }}
      >
        {index}
      </div>;

      const renderVariableWidthItem1 = (index, key) =>
        <div
          key={key}
          className={'item' + (index % 2 ? '' : ' even')}
          style={{width: `${getWidth(index)*0.3}px`,
                height:`${height/rows}px` }}
        >
          {index}
        </div>;

    return (
      <div className={'parent axis-x'}>
        <div className={'component'}>
          <ReactList
            axis={'x'}
            itemRenderer={renderVariableWidthItem}
            length={this.state.data.length}
          />
          <ReactList
            axis={'x'}
            itemRenderer={renderVariableWidthItem1}
            length={this.state.data.length}
          />
          {/* dummy gap for add button */}


        </div>

      </div>
    );
  }
}

// <div
//   style={{width: `200px`, height:`${height/rows}px` , backgroundColor: '#ff0000'}} >
// </div>
