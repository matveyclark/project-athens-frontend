import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import API from '../API'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class SignInFormModal extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => API.signIn(this.state.username,this.state.password)
  .then(receivedData=>{
    this.props.signIn(receivedData);
    this.props.history.push('/product')
  })

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {

    return (
      <div>
        <Dialog open={true}>
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <DialogContentText> Welcome back! </DialogContentText>
            <TextField
              id='usernameInput'
              label='Username'
              value={this.state.username}
              onChange={this.handleChange}
              margin='normal'
              name='username'
            />
            <br />
            <TextField
              id='passwordInput'
              label='Password'
              value={this.state.password}
              onChange={this.handleChange}
              margin='normal'
              name='password'
              type='password'
            />
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} variant='contained' color='primary'>
              SIGN IN
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default SignInFormModal