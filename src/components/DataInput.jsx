import React, { Component, PropTypes } from 'react';

const styles = {
    label: {
        marginRight:5,
    }
};

export default class DataInput extends Component {
    getValue() {
        // Retrieve the value from the inner <input /> element
        // and return it!
        return this.refs.inputTextBox.value;
    }

    render() {
        return (
            <div style={this.props.style}>
                <label htmlFor={this.props.id} style={styles.label}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    name={this.props.id}
                    ref="inputTextBox"
                    type="text"
                    onChange={this.props.onChange}
                    value={this.props.text} />
            </div>
        );
    }
}
