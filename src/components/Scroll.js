import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'material-ui/styles';
import ReactList from 'react-list';
import {generateRandomList} from '../helpers/utils';
import ScrollCard from './ScrollCard';
import times from 'lodash/times';
import chunk from 'lodash/chunk';
import './Scroll.css';

const dims = {
  paddingTop: 25,
  paddingLeft: 25,
  footerHeight: 80,
  scrollBarHeight: 20, // exagerated by 5 px
  minCardHeight: 300,
  cardMargin: 20,
  cardsAtATime: 5,
};

/**
 * The main scroll component
 * @type {Object}
 */
class Scroll extends Component {
  /**
   * Constructs the Scroll using height prop.
   * @param  {Number} props Includes Height..
   */
  constructor(props) {
    super(props);
    this.state = {
      data: generateRandomList(),
    };
    this.returnItems = this.returnItems.bind(this);
  }

  /**
   * Splits data into chunks based on number of rows
   * @param {array} data incoming data
   * @param {number} rows number of rows
   * @return {Array} Array of arrays
   */
  formatData(data, rows) {
    // get rid of leftovers from rectalinear
    const cut = data.length - data.length % (rows * dims.cardsAtATime);
    const leftData = data.slice(0, cut);
    const rightData = data.slice(cut);
    const formatedData = chunk(leftData, dims.cardsAtATime);
    let out = [];
    times(rows, (idx) => {
      out.push([]);
    });
    let x = 0;
    // for chunks that are rectalinear (left)
    for (let i = 0; i < formatedData.length; i++) {
      out[x].push(...formatedData[i]);
      let newX = x + 1;
      x = newX >= rows ? 0 : newX;
    }
    // for the chunks remianing (right)
    // then put one by one in each row,
    x = 0;
    for (let j = 0; j < rightData.length; j++) {
      out[x].push(rightData[j]);
      let newX = x + 1;
      x = newX >= rows ? 0 : newX;
    }
    return out;
  }

  /**
   * Renders a single card at a time.
   * @param  {Number} index Starts from zero
   * @param  {Number} key   key
   * @param  {array} data   data for that specific row
   * @param  {Number} netScrollHeight   netScrollHeight
   * @return {ReactElement} A card
   */
  returnItems(index, key, data, netScrollHeight) {
    return (
      <ScrollCard
        key={key}
        data={data[index]}
        height={netScrollHeight}
        ratio={data[index].ratio}
      />
    );
  }

  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const headerHeight = this.props.viewportWidth >= 600 ? 64 : 56;
    const viewportHeight =
      this.props.viewportHeight >= 600 ? this.props.viewportHeight : 600;
    const scrollHeight = viewportHeight - headerHeight - dims.paddingTop;
    let netScrollHeight =
      scrollHeight - dims.footerHeight - dims.scrollBarHeight;
    const rows = Math.floor(netScrollHeight / dims.minCardHeight);
    netScrollHeight = netScrollHeight - (rows - 1) * dims.cardMargin;

    console.log(
      'RERENDERED: scrollHeight; ',
      scrollHeight,
      ' netScrollHeight : ',
      netScrollHeight,
      ' rows: ',
      rows
    );

    const formatedData = this.formatData(this.state.data, rows);

    let cards = [];
    times(rows, (rowIdx) => {
      cards.push(
        <ReactList
          key={rowIdx}
          axis={'x'}
          itemRenderer={(index, key, dta, nsh) =>
            this.returnItems(
              index,
              key,
              formatedData[rowIdx],
              parseInt(netScrollHeight / rows, 10)
            )
          }
          length={formatedData[rowIdx].length}
          pageSize={dims.cardsAtATime}
        />
      );
    });

    return (
      <div className={'parent axis-x'}>
        <div
          className="component"
          style={{
            width: `${this.props.viewportWidth - dims.paddingLeft}px`,
            height: `${scrollHeight}px`,
            paddingLeft: `${dims.paddingLeft}px`,
            paddingTop: `${headerHeight + dims.paddingTop}px`,
          }}
        >
          {cards}
        </div>
      </div>
    );
  }
}
Scroll.propTypes = {
  viewportWidth: PropTypes.number.isRequired,
  viewportHeight: PropTypes.number.isRequired,
};
export default withTheme()(Scroll);

/**
 * Given the entire width/height of the window, the component will calculate
 * the net height for the Scroll component.
 * 1. Check height of Header
 */
// setScrollHeight() {
//   const headerHeight = this.props.width >= 600 ? 64 : 56;
//   this.setState({
//     headerHeight: headerHeight,
//     height: this.props.height - headerHeight - dims.marginTop
//      - dims.marginBottom - dims.scrollBar,
//   });
//   console.log('net height: ', this.state.height);
// }
// /**
//  * componentWillMount
//  */
// componentWillMount() {
//   this.setScrollHeight();
// }
// /**
//  * componentWillReceiveProps
//  */
// componentWillReceiveProps(nextProps) {
//   console.log(nextProps);
//   this.setScrollHeight();
// }
// /**
//  * ComponentDidMount
//  */
// componentDidMount() {
//   window.addEventListener('scroll', this.handleScroll, true);
// };
// /**
//  * componentWillUnmount
//  */
// componentWillUnmount() {
//   window.removeEventListener('scroll', this.handleScroll, false);
// };
// /**
//  * When Scroll handler.
//  * @param  {object} event Scroll event.
//  */
// handleScroll(event) {
//   console.log('the scroll things', event);
// };
//
//

//
//   const renderVariableWidthItem1 = (index, key) =>
//     <div
//       key={key}
//       className={'item' + (index % 2 ? '' : ' even')}
//       style={{width: `${getWidth(index)*0.3}px`,
//             height: `${height/rows}px`}}
//     >
//       {index}
//     </div>;
//

// <ReactList
//   axis={'x'}
//   itemRenderer={renderVariableWidthItem1}
//   length={this.state.data.length}
// />
//
//
//
//
//
//   <div
// className={'parent axis-x'}
// style={{marginTop: `${this.state.headerHeight + dims.marginTop}px`}}
// >
//   <div className={'component'}>
//   <div
//     style={{width: `3000px`,
//         height: `${this.props.height}px`, backgroundColor: '#00FF00'}}
//   />
//
//   </div>
//
//   {/* dummy gap for footer*/}
//   <div
//     style={{width: `300px`,
//         height: `${dims.marginBottom}px`, backgroundColor: '#FF0000'}}
//   />
//
// </div>
