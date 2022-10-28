import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import HeaderRetrieve from './_HeaderRetrieve'
import video from '../../images/video.mp4';


class RetrieveHome extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault()

    // fetch('http://brite4.ngrok.io/api/retrieveOrder', { //url of the
    //     method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }// parses data to JSON
    // })
    //   .then(console.log(JSON.stringify(this.state)))
    //   .then(response => response.json()) //  parses response to JSON
    //   .then(data => console.log(data)) // JSON from `response.json()` call
    //   .catch(error => console.log(error)); // display error message
    // this.props.history.push('/retrieve/prepurchase')


    }


  render() {
    return (
      <div className="page--bg">
    	<div className="retrieve--home">
        <Header title="RETRIEVE ORDER" />
        <HeaderRetrieve h2="RETRIEVE YOUR ORDER" h3="PLEAZE SCAN THE BAR CODE FOR YOUR PRE-PURCHASED ORDER" />
      </div>



        <video autoPlay className="retrieve--home--container" src={video} />


        <div className="retrieve--home--container or_container">
          <div className="separator"></div>
          <h3 className="or">OR</h3>
          <div className="separator"></div>
        </div>
        <form action="" method="GET" onSubmit={this.handleSubmit.bind(this)} className="retrieve--home--container retrieve--down">
          <h4 className="titre2">ENTER THE CONFIRMATION NUMBER FOR YOUR ORDER</h4>


            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>

            <button className="btn" type="submit" >CONFIRM</button>
          </form>

        <Footer button="CONFIRM" link="/retrieve/prepurchase" click={this.handleSubmit.bind(this)} />
    </div>
    );
  }
}

export default RetrieveHome;
