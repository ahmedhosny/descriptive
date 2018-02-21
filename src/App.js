import React, {Component} from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import {theme} from './helpers/theme';
import Header from './components/Header';
import Scroll from './components/Scroll';
import Grid from 'material-ui/Grid';
import {AutoSizer} from 'react-virtualized';
/**
 * App
 */
export class App extends Component {
  /**
   * When the window is resized.
   * @param  {Number} width  Width of entire window
   * @param  {Number} height Height of entire window
   */
  _onResize({width, height}) {
    console.log('width: ', width, 'height:', height);
  }
  /**
   * The Grid elements: 1.Header 2.Scroll 3.footer
   * @param  {Number} width  Width of entire window
   * @param  {Number} height Height of entire window
   * @return {Grid} MaterialUI grid
   */
  getGrid({width, height}) {
    return (
      <Grid container spacing={0}>
        {/* Header */}
        <Grid item xs={12}>
          <Header/>
        </Grid>
        {/* scroll */}
        <Grid item xs={12}>
          <Scroll
          height={height-100}
          />
        </Grid>
        {/* footer */}
      </Grid>
    );
  }
  /**
   * returns the entire App
   * @return {div} div containing entire app.
   */
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={theme.root}>
          <AutoSizer
          onResize={this._onResize}
          >
            {this.getGrid}
          </AutoSizer>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
