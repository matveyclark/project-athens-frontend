import React from 'react'
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SuggestToSignInOrSignUpFirst extends React.Component {

  render () {

    return (
        <Dialog open={this.props.open}>
          <DialogTitle>Please signin or signup to order!</DialogTitle>
          <DialogContent>
            {/* <DialogContentText> Please signin or signup to order! </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close}> <Link to="/signin">Sign_In </Link> </Button>
            <Button onClick={this.props.close}> <Link to="/signup">Sign_Up </Link> </Button>
          </DialogActions>
        </Dialog>
    )
  }
}

export default SuggestToSignInOrSignUpFirst;