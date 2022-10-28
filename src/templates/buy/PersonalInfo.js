import React, { Component } from 'react';
import Header from '../components/_Header';
import StepHeader from '../components/_StepHeader';
import Footer from '../components/_Footer';
import ItemPInfo from './_ItemPInfo';
import Step1 from '../../images/step1.svg';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            total: 0
        }

    }
    componentWillMount() {

        // fetch('http://brite4.ngrok.io/api/personalInfo')

        //     .then(response => response.json())//  parses response to JSON
        //     .then(data => this.setState({ items: data.data.items, total: data.data.total  })) // put the Json to the state
        //     .catch(error => console.error(error))// display error message
        //     .then(console.log('Ajax ok'));
    }
    dataFromChildren({ total, id }) {

        this.setState({
        })
    }

    render() {
        return (
            <div className="page--bg p_info step_compensator">
                <Header title="PERSONAL INFORMATION" />

                <StepHeader svg={Step1} title='ENTER THE PERSONAL INFORMATION FOR EACH WRISTAND-HOLDER' />
              {this.state.items.map(item => (
                <ItemPInfo key={item._id} sendToParent={this.dataFromChildren.bind(this)} item={item} />))}
                <div className="total--container">
                    <h3>TOTAL</h3> <h3 className='global--total'>{this.state.total}$</h3>
                </div>
                <Footer button="GET WRISTBANDS" link="/buy/info" />
            </div>
        );
    }
}

export default PersonalInfo;
