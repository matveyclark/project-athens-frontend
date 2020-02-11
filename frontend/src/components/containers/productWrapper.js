import React from 'react'
// import ProductInfo from '../productInfo'
import ProductInfoV2 from '../productInfo-v2'
import ProductImage from '../productImage'
import Order from '../../pages/Order'
import ButtonAppBar from '../ButtonAppBar'

export default class ProductWrapper extends React.Component {
    render() {

        const {orderProduct, currentProduct, currentValidSizes, currentUserOrders, signOut, username} = this.props
        return(
            <React.Fragment>
                <div>
                    <ButtonAppBar signOut={signOut} username={username}/>
                </div>
                <div className="wrapper flex-wrap">
                    <div className="product-info-left">
                        <ProductInfoV2 title={"What is story for this month's message?"} content={"A major new report reveals a disconnect between young people’s career aspirations and jobs in the UK, whether current vacancies or projected demand. This report is based on an international survey of over 8,500 people aged 14-18. Also using data from the Office for National Statistics, the charity found the greatest excess of aspiration related to jobs in art and culture, entertainment and sport, where five times as many 17- and 18-year-olds want to work (15.6%) compared with the projected demand in the economy (3.3%)."} />
                        <ProductInfoV2 title={"Charity for this month: Employability UK"} content={"The mission of EmployabilityUK is to facilitate employer engagement to enhance the aspirations, opportunities and career prospects of enthusiastic and committed young people. They design bespoke employability skills programmes for businesses to provide high quality employee volunteering opportunities and a tangible vehicle to deliver genuine social value in the community."} />
                    </div>
                    <div className="product-info-center">
                        <ProductImage imageUrl={'https://clipartart.com/images/blank-shirt-clipart-8.jpg'}/>
                    </div>
                </div>

                <div className="product-sizes-and-button">
                <Order orderProduct={orderProduct} currentProduct={currentProduct} currentValidSizes={currentValidSizes} currentUserOrders={currentUserOrders}/>
                </div>

            </React.Fragment>
        )
    }
}