import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const SDiv = glamorous.div({
  height: 50,
  width: 50,
  backgroundColor: '#00ff00',
  marginRight: 8,
});

/**
 * The Label component
 * @type {Object}
 */
class ScrollLabel extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    return <SDiv />;
  }
}
// ScrollLabel.propTypes = {};
export default ScrollLabel;
