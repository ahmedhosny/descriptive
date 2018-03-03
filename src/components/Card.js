import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const _CardMedia = glamorous(CardMedia)({
  borderRadius: '2px 2px 0 0',
  height: 150,
});
const _div = glamorous.div({
  marginRight: 20,
  marginBottom: 20,
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
    const randomWidth = Math.floor(Math.random() * (600 - 400) + 200);
    const imgURL = 'http://via.placeholder.com/' +
    randomWidth.toString() + 'x150';
    return (
      <_div
      style={
        {width: `${randomWidth}px`,
        height: `${this.props.height}px`}
      }
      >
        <Card>
          <_CardMedia
            image={imgURL}
            title="some title"
          />
          <CardContent
          style={
            {width: `${randomWidth-32}px`,
            whiteSpace: 'normal',
            height: 60} // hardcoded
          }
          >
            <Typography variant="headline" component="h2">
              {this.props.data.name}
            </Typography>
            <Typography component="p">
              {this.props.data.random}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </_div>
    );
  }
};
_Card.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
};
export default _Card;
