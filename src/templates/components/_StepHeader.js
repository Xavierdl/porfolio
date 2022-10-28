import React, { Component } from 'react';
import ReactSVG from 'react-svg';


class StepHeader extends Component {


    render() {
        // let image = this.props.svg;
        return (
            <div className="header_2--container step_header">
                <ReactSVG path={this.props.svg} svgClassName="step_header--svg" />
                <h4>{this.props.title}</h4>
            </div> 

        );
    }
}

export default StepHeader;
