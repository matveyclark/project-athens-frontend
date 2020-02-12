import React from 'react'

import Typography from '@material-ui/core/Typography';

class SizeCollectorRadio extends React.Component {
    render(){
        return(
            <React.Fragment>
            <input type="radio" 
            checked= { (this.props.selectedSizeId===this.props.size.sizeid) ? true : false } 
            value={this.props.size.sizeid}
            onChange={this.props.handleSizeId}/>
            <Typography>
                <label> {this.props.size.sizename} </label>
            </Typography>
            </React.Fragment>
        )
    }
}

export default SizeCollectorRadio;