import React from 'react'
import ProductInfo from '../productInfo'
import ProductImage from '../productImage'
import Order from '../../pages/Order'

export default class ProductWrapper extends React.Component {
    render() {

        const {orderProduct, currentProduct, currentValidSizes, currentUserOrders} = this.props
        return(
            <React.Fragment>
                <div className="wrapper flex-wrap">
                    <div className="product-info-left">
                        <ProductInfo title={"Bet365 CEO made $422 million."} content={"Bet365 CEO made $422 million.Bet365 CEO made $422 million.Bet365 CEO made $422 million."} />
                        <ProductInfo title={"Charity selected: Kids for Future"} content={"They have been helping for the kids all around the world!!!!"} />
                    </div>
                    <div className="product-info-center">
                        <ProductImage imageUrl={'https://clipartart.com/images/blank-shirt-clipart-8.jpg'}/>
                    </div>
                    <div>
                        <Order orderProduct={orderProduct} currentProduct={currentProduct} currentValidSizes={currentValidSizes} currentUserOrders={currentUserOrders}/>
                    </div>
                </div>

                <div className="product-sizes-and-button">

                </div>

            </React.Fragment>
        )
    }
}