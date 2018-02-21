import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

/**
 * [Header description]
 * @param       {[type]} props [description]
 * @constructor
 */
class Header extends Component {
  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <div style={styles.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              Scroll
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles()(Header);
