import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './components/containers/mainContainer';
import ProductWrapper from './components/containers/productWrapper';
// import SignIn from './pages/SignIn';
// import SignInForm from './components/SignInForm'
// import SignUp from './pages/SignUp';
// import SignUpForm from './components/SignUpForm'
import API from './API'
import SignInFormModal from './components/SignInFormModal';
import SignUpFormModal from './components/SignUpFormModal'
import SuggestToSignInOrSignUpFirst from './components/SuggestToSignInOrSignUpFirst'


const DEFAULT_STATE = {
  username: null,
  userid: null,
  currentProduct: {},
  currentValidSizes: [],
  currentUserOrders: null,
  suggestToSignInOrSignUpFirst: false,
  orderJustExecuted: null
}

class App extends React.Component{

  state = {
    ...DEFAULT_STATE
  } 

  signIn = data => {
    this.setState({ username: data.username, userid: data.userid })
    this.initialLoadProductSizes()
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ 
      ...DEFAULT_STATE
     })
    localStorage.removeItem('token')
  }

  signUp = (newUserObject) => {
    API.signUp(newUserObject).then(data=>{
      this.setState({ username: data.username, userid: data.userid});
      this.initialLoadProductSizes()
      localStorage.token = data.token
    })
  }

  initialLoadProductSizes = () =>{
    API.getValidProduct().then(currentProduct=>this.setState({ currentProduct }))
    API.getValidSizes().then(currentValidSizes=>this.setState({currentValidSizes}))
  }
  componentDidMount(){
    this.initialLoadProductSizes()
  }

  orderProduct = (selectedSizeId) => {
    if (this.state.username!==null) {
    let newOrderObject = {
      neworder: { size_id: selectedSizeId }
      }
    API.postOrder(newOrderObject).then(orderJustExecuted=>{
      console.log("Ordered object details: ", orderJustExecuted)
      this.setState({ orderJustExecuted })
      this.getCurrentUserOrders()
    })
  } else {
    this.setState({suggestToSignInOrSignUpFirst: true})
  }
  }

  getCurrentUserOrders = () => API.getCurrentUserOrders()
  .then(currentUserOrders=>{
    console.log("received order history: ",currentUserOrders)
    this.setState({currentUserOrders})
  })

  render(){

    const {currentProduct, currentValidSizes, currentUserOrders, username, orderJustExecuted} = this.state

    return (
      <Router>
        <SuggestToSignInOrSignUpFirst close={() => this.setState({suggestToSignInOrSignUpFirst: false})} open={this.state.suggestToSignInOrSignUpFirst} />
        <React.Fragment>
          <Route exact path="/" component={MainContainer}/>    
          <Route exact path="/product" component={ props=>(
            <ProductWrapper {...props} orderJustExecuted={orderJustExecuted} orderProduct={this.orderProduct} currentProduct={currentProduct}
            currentValidSizes={currentValidSizes} currentUserOrders={currentUserOrders} 
            signOut={this.signOut} username={username}/>
          )}
          />

          <Route exact path="/signup" component={props=> (
            // <SignUp {...props} signUp={this.signUp} />
            // <SignUpForm {...props} signUp={this.signUp}/>
            <SignUpFormModal {...props} signUp={this.signUp}/>
          )}
          />

          <Route exact path="/signin" component={props=>(
            // <SignIn {...props} signIn={this.signIn} />
            // <SignInForm {...props} signIn={this.signIn}/>
            <SignInFormModal {...props} signIn={this.signIn}/>
          )}
          />

        </React.Fragment>
      </Router>
    );
  }

}

export default App;

// Testing git