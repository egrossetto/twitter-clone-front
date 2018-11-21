import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  function handleLogin() {
    window.location.href = "/";
  }
  
  function ButtonAppBar(props) {
    const { classes } = props;

    let token = sessionStorage.getItem('token');

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Twitter-Clone 
            </Typography>
            {
              token ?
              <Button color="inherit" onClick={() => handleLogout()}>Logout</Button>
              :
              <Button color="inherit" onClick={() => handleLogin()}>Login</Button>
            }
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(ButtonAppBar);