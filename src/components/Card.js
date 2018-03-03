import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous';
// import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';

const Schematic = glamorous.img({
  borderRadius: '2px 2px 0 0',
});
const _Paper = glamorous(Paper)({
  marginRight: 10,
  marginBottom: 10,
  display: 'inline-block',
});

/**
 * The Card component
 * @type {Object}
 */
class _Card extends Component {
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
    const theme = this.props.theme;
    const randomWidth = Math.floor(Math.random() * (600 - 400) + 400);
    const imgURL = 'http://via.placeholder.com/' +
    randomWidth.toString() + 'x150';
    console.log(imgURL);
    return (
      <_Paper
        style={
          {width: `${randomWidth}px`,
          height: `${this.props.height}px`}
        }
      >
        <Schematic
        alt="some alt"
        src={imgURL}
        />
        <h2>{this.props.data.name}</h2>
        {this.props.data.random}
      </_Paper>


    );
  }
};
_Card.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
};
export default withTheme()(_Card);
