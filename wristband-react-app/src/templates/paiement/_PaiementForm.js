import React, { Component } from 'react';
// import ReactSVG from 'react-svg'
// import logo from '../../images/write-white.svg';
// import Counter from './_counter'

class itemPInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refundChecked:false,
            emailChecked:false,
            smsChecked:false,
            firstName: '',
            lastName: '',
            email: '',
            phone:''
        }
    }


    toggle(e) {

        this.setState({ [e.target.dataset.name]: !this.state[e.target.dataset.name] });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };


    // this.props.sendToParent({total: data, id: this.props.item.id});

    render() {
        let box = ["form--container"];
        if (this.state.refundChecked)  box.push("refundChecked")

         
        if (this.state.emailChecked )  box.push("emailChecked")
        if (this.state.smsChecked )  box.push("smsChecked") 
        return (
            <div>
                <div className={box.join(' ')}>
                    <div className="label_container">
                        <label className="label">Last name*</label>
                        <input 
                            className="last_name" 
                            name='lastName' 
                            type="text" 
                            placeholder='Add last name' 
                            onChange={this.handleChange.bind(this)} 
                            value={this.state.lastName} />
                    </div>
                    <div className="label_container">
                        <label className="label">First Name*</label>
                        <input 
                            className="first_name" 
                            name='firstName' 
                            type="text" 
                            placeholder='Add first name' 
                            onChange={this.handleChange.bind(this)} 
                            value={this.state.firstName} />
                    </div>
                    <div className="label_container">
                        <label className="label">Email address*</label>
                        <input 
                            className="email" 
                            name='email' 
                            type="email" 
                            placeholder='Email' 
                            onChange={this.handleChange.bind(this)} 
                            value={this.state.email} />
                        <p className="requier">*Required informations</p>
                    </div>
                    <div className="label_container">
                        <label className="label">Phone number</label>
                        <input 
                        className="phone" 
                        name='phone' 
                        type="number" 
                        placeholder='phone' 
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.phone} />
                    </div>
                    <div className="refund--container" >
                        <div
                            data-name='refundChecked' 
                            onClick={this.toggle.bind(this)} 
                            className="checkbox">
                        </div>
                        <p 
                            data-name='refundChecked' 
                            onClick={this.toggle.bind(this)}      
                            className="checkbox--explanation">
                            receive the refund protocole 
                        </p>
                    </div>

                    <h4 className="receipt--choose">How would you like to receive your digital receipts?</h4>

                    <div className="email--container">
                        <div 
                            onClick={this.toggle.bind(this)} 
                            data-name="emailChecked" 
                            className="checkbox" >
                        </div>
                        <p
                            onClick={this.toggle.bind(this)}
                            data-name="emailChecked"
                            className="checkbox--explanation">
                            Email
                        </p>
                    </div>
                    <div className="sms--container">
                        <div 
                            onClick={this.toggle.bind(this)} 
                            data-name="smsChecked"
                            className="checkbox">
                        </div>
                        <p
                            onClick={this.toggle.bind(this)}
                            data-name="smsChecked"
                            className="checkbox--explanation">
                            SMS
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default itemPInfo;
