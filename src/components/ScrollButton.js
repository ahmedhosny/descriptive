import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const SDiv = glamorous.div({
  marginLeft: 8,
  display: 'inline-block',
});

/**
 * The Card component
 * @type {Object}
 */
class ScrollButton extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    return (
      <SDiv>
        <Button variant="fab" color="primary">
          <AddIcon />
        </Button>
      </SDiv>
    );
  }
}
ScrollButton.propTypes = {};
export default ScrollButton;
