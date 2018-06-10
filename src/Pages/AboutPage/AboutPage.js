import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

class AboutPage extends Component {

    render() {
        return (
            <div>
                <h1>About the App</h1>
                <img className="App-logo" src={logo}/>
                <p>This app was created with React</p>
            </div>
        )
    }
}

export default AboutPage;