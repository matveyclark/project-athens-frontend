import React from 'react'
import ProductInfo from '../productInfoComponent'

export default class ProductWrapper extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <ProductInfo title={"Bet365 CEO made $422 million."} content={"Bet365 CEO made $422 million.Bet365 CEO made $422 million.Bet365 CEO made $422 million."} />
                <ProductInfo />
            </div>
        )
    }
}