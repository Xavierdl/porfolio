import React, { Component } from 'react';
import Header from '../components/_Header';
import StepHeader from '../components/_StepHeader';
import Footer from '../components/_Footer';
import ReactSVG from 'react-svg';
import Step2 from '../../images/step2.svg';
import image1 from '../../images/wallet-to-wristband.svg';
import imageCb from '../../images/carte-green.svg';
import imageCash from '../../images/cash-green.svg';
import imageShop from '../../images/shop.svg';
import imageTShirt from '../../images/tShirt.svg';
import imageFood from '../../images/food.svg';

class BuyInfo extends Component {

    render() {
        return (
            <div className="page--bg buy--info step_compensator">
                <Header title="PERSONAL INFORMATION" />
                <StepHeader svg={Step2} title='INSERT MONEY IN YOUR WRISTBAND' />
                <h3>YOUR WRITBAND IS YOUR WALLET</h3>
                <ReactSVG path={image1} svgClassName="image1" />
                <h3>THERE ARE 2 SIMPLE WAYS TO PAY FOR THINGS INSTANTLY USING YOUR WRISTBAND:</h3>
                <div className="middle--container">
                    <div className="left">
                        <ReactSVG path={imageCb} svgClassName="image_cb" />
                        <h4>1 - LINK YOUR CREDIT CARD</h4>
                        <p>Lorem ipsum doloramus ex aut ipsum incidunt nostrum expedita ut, reiciendis minus. Nesciunt?</p>
                    </div>
                    <div className="right">   
                        <ReactSVG path={imageCash} svgClassName="image_cash" /> 
                        <h4>2 - LOAD FUND</h4>
                        <p>Lorem ipsum dolor sit amet consectetleniti ea viobis, commodi accusamus ex aut ipsum incidunt nostrum expedita ut, reiciendis minus. Nesciunt?</p>
                    </div>
                </div>
                <h3>USE YOUR WRISTBAND TO PAY INSTANTLY FOR:</h3>
                <div className="bottom--container">
                    <div>
                        <h2>GIFT</h2>
                        <ReactSVG path={imageShop} svgClassName="image_shop icon--shop" />
                    </div>
                    <div>
                        <h2>SNACKS</h2>
                         <ReactSVG path={imageFood} svgClassName="image_food icon--shop" />
                    </div>
                    <div>
                        <h2>SOUVENIR</h2>
                        <ReactSVG path={imageTShirt} svgClassName="image_tshirt icon--shop" />
                       
                    </div>
                </div>



                <Footer button="NEXT" link="/buy/link-card" />
            </div>
        );
    }
}

export default BuyInfo;
