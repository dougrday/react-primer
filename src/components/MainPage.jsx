import React, { Component, PropTypes } from 'react';
import DataInput from "../components/DataInput";
import Api from "../services/Api";

export default class MainPage extends Component {
    constructor() {
        // Call the base class constructor
        super();

        // Initialize state
        this.state = {
            text: "Loading..."
        };

        // NOTE: need to bind each function to 'this' so it behaves like we expect.
        this.handleChange = this.handleChange.bind(this);
    }

    // NOTE: this is a React lifecycle method, called automatically
    // by React when the component is first mounted.
    // See https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
    async componentWillMount() {
        // Load the textbox text from our own API server
        let result = await Api.get("http://localhost:3002/test");

        // Update the state with the result
        this.setState({
            text: result.text
        });
    }

    handleChange() {
        // Whenever the person types, update the value stored in state
        this.setState({
            text: this.refs.dataInput.getValue()
        });
    }

    render() {
        return (
            <div>
                <DataInput ref="dataInput" id="sample" label="Text" text={this.state.text} onChange={this.handleChange} />
            </div>
        );
    }
}
