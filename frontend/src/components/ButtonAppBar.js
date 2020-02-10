import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignOut from './SignOutForm'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    // background: 'linear-gradient(45deg, #ff6b6b 30%, #ff6b6b 90%)',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" className={classes.title}>
            JOIN THE REVOLUTION!
          </Typography>
          {/* <Button color="inherit">LOGIN</Button> */}
          {!props.username && <Button> <Link to="/signin">Sign_In </Link> </Button>}
          {!props.username && <Button> <Link to="/signup">Sign_Up </Link> </Button>}
          {props.username && <SignOut signOut={props.signOut} username={props.username}/>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// signOut={signOut} username={username}
