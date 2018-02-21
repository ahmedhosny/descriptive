import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'material-ui/styles';
import ReactList from 'react-list';
import {generateRandomList} from '../helpers/utils';
import './Scroll.css';
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
    this.handleScroll = this.handleScroll.bind(this);
  }
  /**
   * ComponentDidMount
   */
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  };
  /**
   * componentWillMount
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  };
  /**
   * When Scroll handler.
   * @param  {object} event Scroll event.
   */
  handleScroll(event) {
    console.log('the scroll things', event);
  };
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const getWidth = (index) => 100 + (10 * (index % 10));
    getWidth.toJSON = () => getWidth.toString();

    const rows = 2;
    const height = this.props.height;
    const renderVariableWidthItem = (index, key) =>
      <div
        key={key}
        className={'item' + (index % 2 ? '' : ' even')}
        style={{width: `${getWidth(index)*0.5}px`,
              height: `${height/rows}px`,
            marginTop: '85px'}}
      >
        {index}
      </div>;

      const renderVariableWidthItem1 = (index, key) =>
        <div
          key={key}
          className={'item' + (index % 2 ? '' : ' even')}
          style={{width: `${getWidth(index)*0.3}px`,
                height: `${height/rows}px`}}
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
Scroll.propTypes = {
  height: PropTypes.number.isRequired,
};
export default withTheme()(Scroll);
