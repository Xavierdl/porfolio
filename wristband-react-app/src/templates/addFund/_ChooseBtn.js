import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg'


class ChooseBtn extends Component {
    render() {
        return (<Link to={this.props.link}>
            <button className='choose_btn'>
            <h3 className='choose_btn--content center'>{this.props.content}</h3>
                <ReactSVG path={this.props.image} svgClassName="choose--icon" />
            </button>
            </Link>
        );
    }
}
export default ChooseBtn;