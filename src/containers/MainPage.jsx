import React, { Component, PropTypes } from 'react';
import DataInput from "../components/DataInput";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NOTE: since this page uses only "data"-related actions,
// we bind the action creators for "data" to the component
// and its children.
//
// In this way, React components can be blissfully unaware
// that Redux is even involved in their operation, and
// instead operate via composition.
import * as actions from '../actions/data';

class MainPage extends Component {
    // NOTE: these are common properties for containers that provide data
    // to their children.
    static propTypes = {
        actions: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired
    };

    componentWillMount() {
        // Check if we've already loaded our data for the page
        const isLoaded = this.props.data.get("isLoaded");
        if (!isLoaded) {
            // Load the data
            this.props.actions.load();
        }
    }

    render() {
        // NOTE: passes this component's properties (actions/data) to
        // the <DataInput> component for its use.
        return (
            <div>
                <DataInput id="sample" label="Non-numeric Text" {...this.props} />
            </div>
        );
    }
}

// NOTE: the following populate the 'data' and 'actions' properties
// on the container object.
function mapStateToProps(state) {
    return {
        // Save the redux state in a prop called 'data'
        // on the component.
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Save the data actions in a prop called 'actions'
        // on the component.
        actions: bindActionCreators(actions, dispatch)
    };
}

// Use react-redux to add the additional 'data' and 'actions' props
// to the component when it is used.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
