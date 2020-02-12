import React from 'react'
import {useState} from 'react'

import API from '../API'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core'

import useValidation from '../hooks/useValidation'

const SignInFormModalHooks = (props) => {

  const {errors, validate} = useValidation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 

  const handleSubmit = () => API.signIn(username,password)
  .then(receivedData=>{
    props.signIn(receivedData);
    props.history.push('/product')
  })

  const handleChangeUsername = event => setUsername(event.target.value)

  const handleChangePassword = event => {
    console.log({ value: event.target.value, password })
    setPassword(event.target.value)
    validate(event.target.value, 3)
  }

    return (
      <div>
        <Dialog open={true}>
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <DialogContentText> Welcome back! </DialogContentText>
            <TextField id='usernameInput' label='Username' value={username} onChange={handleChangeUsername} margin='normal' name='username' />
            <br />
            {errors.length!==0 ?<Typography variant="h6" gutterBottom> {errors}</Typography> :null}
            <TextField id='passwordInput' label='Password' value={password} onChange={handleChangePassword} margin='normal' name='password' type='password' />
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} variant='contained' color='primary'> SIGN IN </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

export default SignInFormModalHooks