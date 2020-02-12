import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class SignUpModal extends React.Component {

    state = {
        username: '',
        password: '',
        password_confirmation: ''
    }

    handleChange = (event) => {this.setState({[event.target.name]:event.target.value})}

    handleSubmit = (event) => {
        let newUserObject = {
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation    
        }
        this.props.signUp(newUserObject)
        this.props.history.push('/product')
    }

    render(){

        return(
        <div>
          <Dialog open={true}>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
            <DialogContentText> Welcome to movement! </DialogContentText>
              <TextField
                id='usernameInput'
                label='New Username'
                value={this.state.username}
                onChange={this.handleChange}
                margin='normal'
                name='username'
              />
              <br />
              <TextField
                id='passwordInput'
                label='New User Password'
                value={this.state.password}
                onChange={this.handleChange}
                margin='normal'
                name='password'
                type='password'
              />
              <br />
              <TextField
                id='password_confirmationInput'
                label='Reenter Password'
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                margin='normal'
                name='password_confirmation'
                type='password'
              />
              <br />
              <DialogActions>
                <Button onClick={this.handleSubmit} variant='contained' color='primary'>
                  SIGN UP
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </div>
        )
    }
}

export default SignUpModal;