import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const SDiv = glamorous.div({
  backgroundColor: '#197df6',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  height: 30,
  fontSize: 20,
  paddingLeft: 16,
  boxSizing: 'border-box',
  lineHeight: '30px',
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: '900',
});

/**
 * The Card component
 * @type {Object}
 */
class MetaCategory extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    return <SDiv>{this.props.text}</SDiv>;
  }
}
MetaCategory.propTypes = {
  text: PropTypes.string.isRequired,
};
export default MetaCategory;
