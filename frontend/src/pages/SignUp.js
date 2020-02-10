import React from 'react'

import SignUpForm from '../components/SignUpForm'

class SignUp extends React.Component {

    render(){
        return(
            <React.Fragment>
                <h1>Sign up page</h1>
                <SignUpForm signUp={this.props.signUp} history={this.props.history}/>
            </React.Fragment>
        )
    }

}

export default SignUp;