import React, {Component} from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import {theme} from './theme';
import Header from './Header';
import Scroll from './Scroll'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {AutoSizer} from 'react-virtualized';
import AddIcon from 'material-ui-icons/Add';


/**
 * App
 */
export class App extends Component {
  _onResize({width, height}) {
    console.log("width: ", width, 'height:', height)
  }

  getGrid({width,height}){
    return (
      <Grid container spacing={0}>
        {/* AppBar */}
        <Grid item xs={12}>
        <Header/>
        </Grid>
        {/* scroll */}
        <Grid item xs={12}>
          <Scroll
          height={height-100}/>
        </Grid>
        {/* footer */}

      </Grid>
    );
  }
  /**
   * returns an App Bar and mecano.
   * @return {[type]} [description]
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


// <div >
// </div>

// <Grid item xs={12}>
//   <div style={theme.footer}> kjk</div>
// </Grid>
// 100
