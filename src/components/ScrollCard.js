import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Card, {CardContent, CardMedia} from 'material-ui/Card'; // CardActions,
import ScrollLabel from './ScrollLabel';
import ScrollButton from './ScrollButton';
import MetaCategory from './MetaCategory';
import Typography from 'material-ui/Typography';
import times from 'lodash/times';

const dims = {
  cardNonMediaHeight: 189,
};
const SDiv = glamorous.div({
  marginRight: 20,
  marginBottom: 20,
  display: 'inline-block',
});
const SCardMedia = glamorous(CardMedia)({
  borderRadius: '2px 2px 0 0',
});
const SCardContentLabels = glamorous(CardContent)({
  backgroundColor: '#fff000',
  paddingBottom: '0 !important',
  display: '-webkit-box',
  position: 'relative',
  paddingTop: '46px !important',
});
const SButtonsDiv = glamorous.div({
  position: 'absolute',
  backgroundColor: '#696969',
  top: -20,
  right: 16,
});
const SCardContentText = glamorous(CardContent)({
  backgroundColor: '#ff0000',
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
    const imageHeight = this.props.height - dims.cardNonMediaHeight;
    const imageWidth = parseInt(imageHeight * this.props.ratio, 10);
    const imgURL =
      'http://via.placeholder.com/' +
      imageWidth.toString() +
      'x' +
      imageHeight.toString();

    // temporary
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
          width: `${imageWidth}px`,
          height: `${this.props.height}px`,
        }}
      >
        <Card>
          <SCardMedia
            image={imgURL}
            title="some title"
            style={{
              height: `${imageHeight}px`,
            }}
          />
          <SCardContentLabels>
            <MetaCategory text={'applications'} />
            {labels}
            <SButtonsDiv>{buttons}</SButtonsDiv>
          </SCardContentLabels>
          <SCardContentText>
            <Typography variant="headline" component="h2" noWrap={true}>
              {this.props.data.name}
            </Typography>
            <Typography noWrap={true} color="textSecondary" component="p">
              {this.props.data.random}
            </Typography>
          </SCardContentText>
        </Card>
      </SDiv>
    );
  }
}
ScrollCard.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
};
export default ScrollCard;
