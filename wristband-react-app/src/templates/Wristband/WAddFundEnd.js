import React, { Component } from 'react';
import WOk from '../../images/wristband-printed.svg';
import WRetrieve from '../../images/wristband-retrieving.svg';
import WTap from '../../images/wristband-tap.svg';
import WEnd from '../../images/wristband-end.svg';
import Footer from '../components/_Footer'
import ReactSVG from 'react-svg'
import io from 'socket.io-client';
class WAddFund extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tap: true,
            retrieve: false,
            ok:false,
            end: false,
            socket: this.initSocketConnection(),

        }
    }

    initSocketConnection() {
        // const socket = io('http://brite4.ngrok.io')
        // socket.on('hello', () => {
        // console.log('received hello from server and my id is:' + socket.id)
        // })

        // socket.on('printed', () => {
        //     console.log('printed')
        //     this.setState({
        //         tap: false,
        //         retrieve: true,
        //         ok: false,
        //         end:false
        //     })
        // })

        // socket.on('ok', () => {
        //     console.log('ok')
        //     this.setState({
        //         tap: false,
        //         retrieve: false,
        //         ok: true,
        //         end: false
        //     })
        // })
        // return socket;
    }


// PROVISOIR!!!! A SUPRIMER APRES LA DEMO ://
    retrieve() {
        this.setState({
            tap: false,
            retrieve: true,
            ok:false,
            end: false
        })
    }

    ok() {
        this.setState({
            tap: false,
            retrieve: false,
            ok: true,
            end: false
        })
    }
    end() {
        this.setState({
            tap: false,
            retrieve: false,
            ok: false,
            end: true
        })
    }
// FIN A SUPPRIMER

    render() {
        return (
            <div>
{this.state.tap ?
                <div className="wristband wristband_tap">
                    <ReactSVG onClick={this.retrieve.bind(this)} path={WTap} className="wristband--image" />
                    <h4 className="wristband--message">registering your profil</h4>
                </div>
: null}

{this.state.retrieve ?
                <div className="wristband wristband_retrieve">
                    <ReactSVG path={WRetrieve} onClick={this.ok.bind(this)} className="wristband--image" />
                    <h4 className="wristband--message">retrieving your profile</h4>
                </div>
: null}

{this.state.ok ?
                <div className="wristband wristband_ok">
                        <ReactSVG path={WOk} onClick={this.end.bind(this)} className="wristband--image" />
                    <h4 className="wristband--message">THANK YOU!</h4>
                    <h4 className="wristband--message">ENJOY YOUR VISIT!</h4>
                </div>
:null}

{this.state.end ?
                <div className="wristband wristband_ok">
                    <ReactSVG path={WEnd} className="wristband--image end" />
                    <h4 className="wristband--message">THANK YOU!</h4>
                    <h4 className="wristband--message">ENJOY YOUR VISIT!</h4>
                    <Footer button='HOME' link='/' alone />
                </div>
: null}
            </div>
        );
    }
}

export default WAddFund;