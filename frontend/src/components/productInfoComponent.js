import React from 'react'

export default class ProductInfo extends React.Component {
    render() {
        return(
            <div>
                <h3 className="product-info-title">{this.props.title}</h3>
                <p className="product-info-content">{this.props.content}</p>
            </div>
        )
    }
}