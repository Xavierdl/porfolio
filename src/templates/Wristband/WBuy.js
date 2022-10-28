import React, { Component } from 'react';
import WEnd from '../../images/wristband-end.svg';
import WPrinted from '../../images/wristband-printed.svg';
import WPrint from '../../images/bracelet.svg';
import ReactSVG from 'react-svg'
import Footer from '../components/_Footer'
import io from 'socket.io-client';

class WBuy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            print: true,
            printed: false,
            end: false,
            socket: this.initSocketConnection(),

        }
    }

    initSocketConnection() {
        // //const socket = io('http://0ef2a25c.ngrok.io')
        // const socket = io('http://brite4.ngrok.io')
        // socket.on('hello', () => {
        //     console.log('received hello from server and my id is:' + socket.id)
        // })

        // socket.on('printed', () => {
        //     console.log('printed')
        //     this.setState({
        //         print: false,
        //         printed: true,
        //         end: false,
        //     })
        // })

        // socket.on('end', () => {
        //     console.log('end')
        //     this.setState({
        //         print: false,
        //         printed: false,
        //         end: true,
        //     })
        // })
        // return socket;
    }
// PROVISOIR!!!! A SUPRIMER APRES LA DEMO ://
    printed() {
        this.setState({
            print: false,
            printed: true,
            end: false,
        })
    }

    end() {
        this.setState({
            print: false,
            printed: false,
            end: true,
        })
    }
// FIN A SUPPRIMER

    render() {
        return (
            <div>

{this.state.print ?
            <div className="wristband wristband_first">
                <h4 className="wristband--names">JULIE SANTIAGO</h4>
                <h4 className="wristband--title">YOUR WRISTBAND IS ALMOST READY!</h4>
                <ReactSVG onClick={this.printed.bind(this)} path={WPrint} className="wristband--image" />
                <h4 className="wristband--message">REGISTERING YOUR PROFILE...</h4>
                {/* FOOTER */}
                <div className="footer--compensator"></div>
                <div className="App-Footer">
                    <div className="footer--container">
                        <h4 className='w--footer'>WRISTBANDS TO REGISTER:</h4>
                        <h2 className='w--print'>1/9</h2>
                    </div>
                </div>
            </div>
: null}

{this.state.printed ?
            <div className="wristband wristband_ok">
                <ReactSVG onClick={this.end.bind(this)} path={WPrinted} className="wristband--image" />
                <h4 className="wristband--message">FOUND YOU!</h4>
                <h4 className="wristband--message">you can now add funds directly to your wristband</h4>
                {/* FOOTER */}
                <div className="footer--compensator"></div>
                <div className="App-Footer">
                    <div className="footer--container">
                        <h4 className='w--footer'>WRISTBANDS TO REGISTER:</h4>
                        <h2 className='w--print'>1/9</h2>
                    </div>
                </div>
            </div>
: null}

{this.state.end ?
            <div className="wristband wristband_ok">
                <ReactSVG path={WEnd} className="wristband--image end" />
                <h4 className="wristband--message">THANK YOU!</h4>
                <h4 className="wristband--message">ENJOY YOUR VISIT!</h4>
                <Footer button='HOME' link='/' alone />
            </div>
  :null}
            </div>
        );
    }
}

export default WBuy;