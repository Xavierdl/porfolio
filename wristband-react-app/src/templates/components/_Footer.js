import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Help from './_Help';
import library from '../../library.js';
import ReactSVG from 'react-svg';
import Alert from '../../images/error-red.svg';


            /* PROPS */
            
// alone: only the middle button appear 
// button: 'text in the button'
// link:'/link to'


class Footer extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
            alert:false
        };
    }

//  Change state to show the pop-up  :
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    toggleAlert() {
        this.setState({
            alert: !this.state.alert
        });
    }


     goBack() {
    window.history.back();
}


    render() {
        return (
            <footer>
              <div className="footer--compensator"></div>
{/* If pop-up Help is not clicked (state) */}
                {!this.state.showPopup ?
                    <div  className="App-Footer">
                        <div  className="footer--container">
                        {!this.props.alone ?
                                <div className="btn back" onClick={this.toggleAlert.bind(this)}></div>:null}
                        {this.props.button ?  
                                <Link  to={this.props.link} >
                                    <div onClick={this.props.sendAjax}
                                    className="btn btn_confirm">
                                    {this.props.button} 
                                    </div> 
                                </Link>
                                    : null}
                        {!this.props.alone ?
                            <div className="btn help" onClick={this.togglePopup.bind(this)}>HELP</div> : null}
                        </div>
                    </div>
                    
                    
/* If pop-up Help is clicked (state) */
                : <div>
                    <div className="footer--container">
                        <Help
                            h1='INFOS'
                            content={library.FooterContent}
                        />

                    </div>
                    <div className="App-Footer">
                        <div className='btn btn_ok' onClick={this.togglePopup.bind(this)}>OK</div>
                    </div>
                </div>}


{/* Pop up Alert */}
                 {this.state.alert ? 
            <div className="footer--container">
                        <div className='alert--container'>
                            <div className='alert--content'>
                                <h2 className="center" >   
                                    <ReactSVG path={Alert} svgClassName="alert--svg" />
                                </h2>
                                <p className="txt">IF YOU GO BACK YOU WILL LOOSE YOUR DATA. <br /><br /> DO YOU REALLY WANT TO QUIT THIS PAGE?</p>
                                <div className="btn--container">
                                    <div className="btn btn--green" onClick={this.goBack.bind(this)}>YES</div>
                                    <div className="btn btn--red" onClick={this.toggleAlert.bind(this)}>NO</div>
                                </div>
                            </div>
                        </div>
            </div>
            : null}
            </footer>
           
             
        );
    }
}

export default Footer;
