import React from 'react'
// import CardMedia from '@material-ui/core/CardMedia';

class ProductImage extends React.Component {
    render(){
        return (
            <img src={this.props.imageUrl} alt="T-shirt"></img>
            // <CardMedia image={this.props.imageUrl}/>
        )
    }
}

export default ProductImage;