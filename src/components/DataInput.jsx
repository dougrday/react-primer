import React, { Component, PropTypes } from 'react';

const styles = {
    label: {
        marginRight:5,
    },
    validationError: {
        color: "red",
        marginLeft: 5
    }
};

export default class DataInput extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        style: PropTypes.object,
    };

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        // Save the data using the provided action
        this.props.actions.save(this.refs.data.value);
    }

    render() {
        // Handle lag during loading
        const isLoading = this.props.data.get("isLoading");
        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }

        // NOTE: this.props.data.get("") is using Immutable.js to
        // retrieve immutable data from the object.
        return (
            <div style={this.props.style}>
                <label htmlFor={this.props.id} style={styles.label}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    name={this.props.id}
                    ref="data"
                    type="text"
                    onChange={this.handleChange}
                    value={this.props.data.get("sample")} />
                <span style={styles.validationError}>
                    {this.props.data.get("error")}
                </span>
            </div>
        );
    }
}
