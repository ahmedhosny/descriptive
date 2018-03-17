import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'material-ui/styles';
import ReactList from 'react-list';
import {generateRandomList} from '../helpers/utils';
import ScrollCard from './ScrollCard';
import times from 'lodash/times';
import './Scroll.css';

const dims = {
  paddingTop: 25,
  paddingLeft: 25,
  footerHeight: 80,
  scrollBarHeight: 20, // exagerated by 5 px
  minCardHeight: 300,
  cardMargin: 20,
};

// temporary widths and heights to simulate images of different aspect ratios.
let widths = [];
let heights = [];
let ratios = [];
times(300, (key) => {
  const width = Math.floor(Math.random() * (600 - 400) + 450);
  const height = Math.floor(Math.random() * (600 - 400) + 200);
  widths.push(width);
  heights.push(height);
  ratios.push(width / height);
});

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
   * Renders a single card at a time.
   * @param  {Number} index Starts from zero
   * @param  {Number} key   key
   * @param  {Number} netScrollHeight   netScrollHeight
   * @return {ReactElement} A card
   */
  returnItems(index, key, netScrollHeight) {
    return (
      <ScrollCard
        key={key}
        data={this.state.data[index]}
        height={netScrollHeight}
        ratio={ratios[index]}
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

    let cards = [];
    times(rows, (key) => {
      cards.push(
        <ReactList
          key={key}
          axis={'x'}
          itemRenderer={(index, key, nsh) =>
            this.returnItems(index, key, parseInt(netScrollHeight / rows, 10))
          }
          length={this.state.data.length}
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
