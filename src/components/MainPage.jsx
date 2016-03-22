import React, { Component, PropTypes } from 'react';
import DataInput from "../components/DataInput";

export default class MainPage extends Component {
    constructor() {
        // Call the base class constructor
        super();

        // Initialize state
        this.state = {
            text: "Some text"
        };

        // NOTE: need to bind each function to 'this' so it behaves like we expect.
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            text: this.refs.dataInput.getValue()
        });
    }

    render() {
        return (
            <div>
                <DataInput ref="dataInput" id="sample" label="Non-numeric Text" text={this.state.text} onChange={this.handleChange} />
            </div>
        );
    }
}
