import React from 'react'
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class OrderJustExecuted extends React.Component {
    render(){
        return(
            <Dialog open={this.props.open}>
          <DialogTitle>Thank you for your order!</DialogTitle>
          <DialogContent>
            <DialogContentText> Transaction Reference Id: {this.props.orderJustExecuted.id} </DialogContentText>
            <DialogContentText> Transaction Date/Time: {this.props.orderJustExecuted.created_at} </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close}> <Link to="/product"> Close </Link> </Button>
            <Button onClick={this.props.close}> <Link to="/product"> Now Product page but will be transaction history </Link> </Button>
          </DialogActions>
        </Dialog>
        )
    }
}

export default OrderJustExecuted;

// && <OrderJustExecuted open={this.state.showOrderJustExecutedConfirmation} close={this.close} orderJustExecuted={orderJustExecuted}/> 