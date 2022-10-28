import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import Step5 from '../../images/step5.svg';
import image from '../../images/coordonnees-red.svg';
import StepHeader from '../components/_StepHeader'
import Form from './_PaiementForm'
import video from '../../images/video.mp4';
import io from 'socket.io-client';

import ReactSVG from 'react-svg'

class Paiement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: false,
            socket: this.initSocketConnection(),
            total: 510,
            totalAdmission: 310,
            totalFunds: 200

        }
    }
    initSocketConnection() {
        //const socket = io('http://0ef2a25c.ngrok.io')
        // const socket = io('http://brite4.ngrok.io')
        // socket.on('hello', () => {
        //     console.log('received hello from server and my id is:' + socket.id)


        // })
        // socket.on('linkedCardOK', () => {
        //     console.log('linkedCardOK')
        //     this.setState({
        //         form: true
        //     })

        // })



        // return socket;
    }

    toDelete() {
        this.setState({
            form: true
        })
    }

    render() {


        return (
            <div>
{/* PAIEMENT */}
{this.state.form?
//FORM
                <div className="page--bg paiement--form">
                    <Header title="LINK CARD" />
                    <StepHeader svg={Step5} title='PAY FOR YOUR ORDER' />
                    <ReactSVG path={image} svgClassName="paiement--image" />
                    <div className="card--explanation">
                            <h3>PLEAZE ENTER YOUR PERSONAL INFORMATION</h3>
                    </div>
                    <Form />
                        {/* <Keyboard
                            value={this.state.input}
                            name='keyboard'
                            options={{

                                layout: 'custom',
                                customLayout: {
                                    'normal': [
                                        'q w e r t y u i o p {bksp}',
                                        'a s d f g h j k 1 {enter}',
                                        ' z x c v b n m @ . ',
                                        '{meta1} {space} _ - {accept}'
                                    ],
                                    'shift': [
                                        'Q W E R T Y U I O P {bksp}',
                                        'A S D F G H J K L {enter}',
                                        '{s} Z X C V B N M @ . {s}',
                                        '{meta1} {space} _ - {accept}'
                                    ]

                                },
                                alwaysOpen: true,
                                usePreview: false,
                                useWheel: false,
                                stickyShift: false,
                                appendLocally: true,

                                color: "light",
                                updateOnChange: true,
                                initialFocus: true,


                            }}
                            onChange={this.onInputChanged}
                            onAccepted={this.onInputSubmitted}
                            ref={k => this.keyboard = k}
                        /> */}
                        <Footer button="CONFIRM" link={this.props.link} />
                </div>

:


                <div className="page--bg buy--global--paiement">
                    <Header title="LINK CARD" />
                    <StepHeader svg={Step5} title='INSERT MONEY IN YOUR WRISTBAND' />

                    <video autoPlay className="video--card--container " src={video} />
                    <div className="card--explanation">
                            <h3 onClick={this.toDelete.bind(this)}>PLEAZE INSERT OR TAP YOUR CREDIT/DEBIT CARD</h3>
                    </div>

       {!this.props.noTotal ?

                    <div>
                        <div className="total--container admission_pass">
                            <h4>TOTAL - ADMINSSION PASSES</h4>
                            <h4 className="global--total">{this.state.totalAdmission} $</h4>
                        </div>
                        <div className="total--container fund_added">
                            <h4>TOTAL FUNDS ADDED</h4>
                            <h4 className="global--total">{this.state.totalFunds} $</h4>
                        </div>
                        <div className="total--container">
                            <h3>TOTAL</h3>
                            <h3 className="global--total">{this.state.total} $</h3>
                        </div>
                    </div>
       : null}

                        <Footer button="CANCEL ORDER" link={this.props.back} alone />
                </div>
            }

            </div>


    );
    }
}

export default Paiement;