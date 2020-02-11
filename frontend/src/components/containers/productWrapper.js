import React from 'react'
// import ProductInfo from '../productInfo'
import ProductInfoV2 from '../productInfo-v2'
import ProductImage from '../productImage'
import Order from '../../pages/Order'
import ButtonAppBar from '../ButtonAppBar'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

let backgroundImage = 'https://clipartart.com/images/blank-shirt-clipart-8.jpg'

const tshirtDivStyles = {
    height: '100vh',
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
}

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
                        <div style={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h6">Tshirt Size Selection</Typography>
                            </ThemeProvider>
                        </div>

                        <div style={{display:'flex',justifyContent: 'center', alignItems: 'center'}}>
                            <Order username={username} orderProduct={orderProduct} currentProduct={currentProduct} currentValidSizes={currentValidSizes} currentUserOrders={currentUserOrders}/>
                        </div>

                    </div>
                    <div className="product-info-center">
                        <div className="tshirt-div" style={tshirtDivStyles}>
                            <div style={{height:'100vh', display:'flex',justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <h1>{currentProduct.productname}</h1>
                                <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/><br/> <br/> <br/> <br/><br/> <br/> <br/> <br/>
                                <h4>#JoinTheMovement</h4>
                            </div>
                        </div>
                        {/* <ProductImage imageUrl={'https://clipartart.com/images/blank-shirt-clipart-8.jpg'}/> */}
                    </div>
                </div>

                <div className="product-sizes-and-button">
                </div>

            </React.Fragment>
        )
    }
}