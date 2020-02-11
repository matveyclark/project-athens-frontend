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


const DEFAULT_STATE = {
  username: null,
  userid: null,
  currentProduct: {},
  currentValidSizes: [],
  currentUserOrders: null
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
    let newOrderObject = {
      neworder: { size_id: selectedSizeId }
      }
    API.postOrder(newOrderObject).then(data=>{
      console.log("Ordered object details: ", data)
      this.getCurrentUserOrders()
    }
      )
  }

  getCurrentUserOrders = () => API.getCurrentUserOrders()
  .then(currentUserOrders=>{
    console.log("received order history: ",currentUserOrders)
    this.setState({currentUserOrders})
  })

  render(){

    const {currentProduct, currentValidSizes, currentUserOrders, username} = this.state

    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={MainContainer}/>    
          <Route exact path="/product" component={ props=>(
            <ProductWrapper {...props} orderProduct={this.orderProduct} currentProduct={currentProduct}
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