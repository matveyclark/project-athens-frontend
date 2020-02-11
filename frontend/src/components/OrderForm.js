import React from 'react'

import SizeCollectorRadio from './SizeCollectorRadio'
import Button from '@material-ui/core/Button'
// import SuggestToSignInOrSignUpFirst from './SuggestToSignInOrSignUpFirst'


class OrderForm extends React.Component {

    state = {
        selectedSizeId: ''
    }

    handleSizeId = (event) => this.setState({selectedSizeId:parseInt(event.target.value)})

    render(){
        // const { productname } = this.props.currentProduct
        return(
            <React.Fragment>
                {/* <img src='https://clipartart.com/images/blank-shirt-clipart-8.jpg'/> */}
                {/* <h3>Current Product: {productname}</h3> */}
                

                {this.props.currentValidSizes.map(size=>
                <SizeCollectorRadio key={size.sizeid} size={size} 
                selectedSizeId={this.state.selectedSizeId}
                handleSizeId={this.handleSizeId}
                />)}

                <br/>
                
                <Button variant='contained' color='primary' size='large'
                onClick={ () => this.props.orderProduct(this.state.selectedSizeId) }
                >I want to join!</Button>
            </React.Fragment>
        )
    }
}

export default OrderForm