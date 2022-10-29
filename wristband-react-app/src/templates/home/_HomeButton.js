import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg';

class HomeButton extends Component {
    render() {
        return (<Link to={this.props.link}>
            <button className='home_btn'>
            <h3 className='home_btn--content center'>{this.props.content}</h3>
            {this.props.svg?
                <ReactSVG className='home--svg_container' path={this.props.svg} svgClassName=" home--svg" />
            :null}
            </button>
            </Link>
        );
    }
}
export default HomeButton;
