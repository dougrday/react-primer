import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>
                    This example app is a modification of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
                    starter kit</a>.
                </p>
            </div>
        );    
    }
}
