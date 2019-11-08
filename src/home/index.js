import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MemoryRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

class HomeComponent extends Component {

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {

        return (
            <Router>
            <div> login </div>
            </Router>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));