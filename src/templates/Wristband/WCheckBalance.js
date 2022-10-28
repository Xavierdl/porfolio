import React, { Component } from 'react';
import WOk from '../../images/wristband-printed.svg';
import WRetrieve from '../../images/wristband-retrieving.svg';
import WTap from '../../images/wristband-tap.svg';
import ReactSVG from 'react-svg'
import { Link } from "react-router-dom";
import io from 'socket.io-client';
class WCheckBalance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tap: true,
            retrieve: false,
            ok: false,
            socket: this.initSocketConnection(),
        }
    }

    initSocketConnection() {
        // const socket = io('http://brite4.ngrok.io')
        // socket.on('hello', () => {
        //     console.log('received hello from server and my id is:' + socket.id)
        // })

        // socket.on('printed', () => {
        //     console.log('printed')
        //     this.setState({
        //         tap: false,
        //         retrieve: true,
        //         ok: false,
        //     })
        // })

        // socket.on('ok', () => {
        //     console.log('ok')
        //     this.setState({
        //         tap: false,
        //         retrieve: false,
        //         ok: true,
        //     })
        // })
        // return socket;
    }


    // PROVISOIR!!!! A SUPRIMER APRES LA DEMO ://
    retrieve() {
        this.setState({
            tap: false,
            retrieve: true,
            ok: false,
        })
    }

    ok() {
        this.setState({
            tap: false,
            retrieve: false,
            ok: true,
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
                        <Link to='/check-balance' >
                            <ReactSVG path={WOk} className="wristband--image" />
                        </Link>
                        <h4 className="wristband--message">THANK YOU!</h4>
                        <h4 className="wristband--message">ENJOY YOUR VISIT!</h4>
                    </div>
                    : null}
            </div>
        );
    }
}

export default WCheckBalance;