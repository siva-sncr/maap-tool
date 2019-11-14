import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MemoryRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import '../resources/css/style.css';

class HomeComponent extends Component {

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {

        return (
            <Router>
                <Grid fluid={true} className="home height-100">
                    <Row className="height-100">
                        <Col xs={3} md={3} className="left-col height-100">
                            <div className="logo"></div>
                        </Col>
                        <Col xs={9} md={9} className="height-100">
                            xs=12 md=8
                        </Col>
                    </Row>
                </Grid>
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