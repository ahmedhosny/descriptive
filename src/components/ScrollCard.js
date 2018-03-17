import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import ScrollLabel from './ScrollLabel';
import ScrollButton from './ScrollButton';
import Typography from 'material-ui/Typography';
import times from 'lodash/times';

const SDiv = glamorous.div({
  marginRight: 20,
  marginBottom: 20,
  display: 'inline-block',
});
const SCardMedia = glamorous(CardMedia)({
  borderRadius: '2px 2px 0 0',
  height: 200,
});
const SCardContentLabels = glamorous(CardContent)({
  backgroundColor: '#fff000',
  paddingBottom: '0 !important',
  display: '-webkit-box',
  position: 'relative',
});
const SCardContentText = glamorous(CardContent)({
  backgroundColor: '#ff0000',
});
const SButtonsDiv = glamorous.div({
  position: 'absolute',
  backgroundColor: '#696969',
  top: -28,
  right: 16,
});

/**
 * The Card component
 * @type {Object}
 */
class ScrollCard extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const imgURL =
      'http://via.placeholder.com/' + this.props.width.toString() + 'x200';

    let labels = [];
    times(4, (key) => {
      labels.push(<ScrollLabel key={key} />);
    });

    let buttons = [];
    times(2, (key) => {
      buttons.push(<ScrollButton key={key} />);
    });

    return (
      <SDiv
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
      >
        <Card>
          <SCardMedia image={imgURL} title="some title" />
          <SCardContentLabels>
            {labels}
            <SButtonsDiv>{buttons}</SButtonsDiv>
          </SCardContentLabels>
          <SCardContentText>
            <Typography variant="headline" component="h2">
              {this.props.data.name}
            </Typography>
            <Typography component="p">{this.props.data.random}</Typography>
          </SCardContentText>
        </Card>
      </SDiv>
    );
  }
}
ScrollCard.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
export default ScrollCard;
