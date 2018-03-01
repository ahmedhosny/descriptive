import React, {Component} from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import {theme} from './helpers/theme';
import Header from './components/Header';
import Scroll from './components/Scroll';
import Grid from 'material-ui/Grid';
import {AutoSizer} from 'react-virtualized';
import './App.css';

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
    console.log('AutoSizer - width: ', width, 'height:', height);
  }
  /**
   * returns the entire App
   * @return {div} div containing entire app.
   */
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AutoSizer
        onResize={this._onResize}
        >
          {({width, height}) =>
            width === 0 || height === 0 ? null : (
            <div style={theme.root}>
              <Grid container spacing={0}>
                {/* AppBar */}
                <Grid item xs={12}>
                  <Header />
                </Grid>
                {/* mecano */}
                <Grid item xs={12}>
                  <Scroll
                    viewportWidth={width}
                    viewportHeight={height}
                  />
                </Grid>
                {/* footer */}
                <Grid item xs={12}>
                  <div className="footer">
                    this is the footerHeight
                  </div>
                </Grid>
              </Grid>
            </div>
            )
          }
        </AutoSizer>
      </MuiThemeProvider>
    );
  }
}
export default App;


//
//
//
// <MuiThemeProvider theme={theme}>
//   <AutoSizer
//   onResize={this._onResize}
//   >
//     {({width, height}) =>
//       width === 0 || height === 0 ? null : (
//         <Grid container spacing={24}>
//           {/* Header */}
//           <Grid item xs={12} md={12}>
//             <Header/>
//           </Grid>
//           {/* scroll */}
//           <Grid item xs={12} md={12}>
//             <Scroll
//               viewportWidth={width}
//               viewportHeight={height}
//             />
//           </Grid>
//           {/* footer */}
//           <Grid item xs={12} md={12} style={ {backgroundColor: '#00ff00'} }>
//             <div
//               style={
//                 {width: '50px',
//                 height: '50px',
//                 backgroundColor: '#ff0000'}
//               }
//             />
//           </Grid>
//         </Grid>
//       )
//     }
//   </AutoSizer>
// </MuiThemeProvider>
