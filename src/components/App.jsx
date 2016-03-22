import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const styles = {
    body: {
        height: "100%",
    },
    center: {
        background: "#ccc",
        height: "100%",
    },
};

// NOTE: you can think of this page as a 'skin' used by react-router.
const App = (props) => {
    return (
        <div className="row" style={styles.body}>
            {/* A simple responsive design to center an area of the page */}
            <div className="col-xs-offset-0 col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8" style={styles.center}>
                <IndexLink to="/">Home</IndexLink> | <Link to="/About">About</Link> | <Link to="/badlink">Bad Link (404)</Link>
                <div style={{marginTop:"1em"}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
