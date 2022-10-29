import React, { Component } from 'react';
import logo from '../../images/btn-close-accueil.svg';
import ReactSVG from 'react-svg'
import { Link } from "react-router-dom";
import Alert from '../../images/error-red.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      alert: false
    };
  }

  toggleAlert() {
    this.setState({
      alert: !this.state.alert
    });
  }

  render() {
    return (
        <header className="App--header">
        <div className="header--container">
          <h1 className="header--title">{this.props.title}</h1>
          <ReactSVG path={logo} onClick={this.toggleAlert.bind(this)} svgClassName="header--cross btn" />
        
        </div>
        <div className="header--compensator"></div>

{/* Pop up Alert */}
        {this.state.alert ?
          <div className="footer--container">
            <div className='alert--container'>
              <div className='alert--content'>
                <h2 className="center" >
                  <ReactSVG path={Alert} svgClassName="alert--svg" />
                </h2>
                <p className="txt">IF YOU GO BACK TO HOMEPAGE YOU WILL LOOSE YOUR DATA. <br /><br /> DO YOU REALLY WANT TO QUIT THIS PAGE?</p>
                <div className="btn--container">
                  <Link to="/"><div className="btn btn--green">YES</div></Link>
                  <div className="btn btn--red" onClick={this.toggleAlert.bind(this)}>NO</div>
                </div>
              </div>
            </div>
          </div>
          : null}
        </header>

    );
  }
}

export default Header;
