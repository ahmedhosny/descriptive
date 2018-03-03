import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import './Card.css';

/**
 * The Card component
 * @type {Object}
 */
class Card extends Component {
  /**
   * Constructs the Scroll using height prop.
   * @param  {Number} props Includes Height..
   */
  // constructor(props) {
  //   super(props);
  // }


  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    return (
      <Paper
        className={'item'}
        style={
          {width: `${Math.random() * (600 - 400) + 400}px`,
          height: `${this.props.height}px`}
        }
      >
        <h2>{this.props.data.name}</h2>
        {this.props.data.random}
      </Paper>


    );
  }
}
Card.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
};
export default withTheme()(Card);
