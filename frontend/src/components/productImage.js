import React from 'react'

class ProductImage extends React.Component {
    render(){
        return (
            <img src={this.props.imageUrl} alt="T-shirt"></img>
        )
    }
}

export default ProductImage;