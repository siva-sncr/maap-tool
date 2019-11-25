import React, { Component } from 'react'
import { FormControl, Row, Col, Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

import { RcsMsgConsumer } from '../provider/rcsMsgProvider';
import TableView from '../../../hoc/tableView';
import SingleSelectComponent from '../../../hoc/singleSelectDropdownComponent';


class RcsMsgContainer extends Component {
    
    static contextType = RcsMsgConsumer;

    state = {
        tags: []
    };

    handleChange = (tags) => {
        this.setState({tags: tags});
    };
    
    render() {

        const methodTypes = [{value:'--Select--'}];
        const cardTypes = [{value:'Choose Card'}];
        const setMethodType = (evt) => {
            console.log(" evt ",evt);
        };

        return (
            <React.Fragment>
                <div className="rcs_messaging">
                    <div className="header">
                            <FormattedMessage id="rcsMessaging.heading.title"></FormattedMessage>
                        <div className="desc">
                            <FormattedMessage id="rcsMessaging.heading.desc"></FormattedMessage>
                        </div>
                    </div>
                    <div className="title">
                        <FormattedMessage id="rcsMessaging.heading.subTitle"></FormattedMessage>
                    </div>
                    <div className="method_url">
                        <FormattedMessage id="rcsMessaging.content.methodUrlTitle"></FormattedMessage>
                        <Row className="method_url_row">
                            <Col xs={3} md={3} className="padding-0">
                                <SingleSelectComponent single handleChange={(evt) => setMethodType(evt)} data={methodTypes} />
                            </Col>
                            <Col xs={9} md={9}>
                                <FormControl 
                                    name="url"
                                    value="" />
                            </Col>
                        </Row>
                    </div>

                    <div className="headers">
                        <FormattedMessage id="rcsMessaging.content.headers.title"></FormattedMessage>
                        <Row className="headers_row">
                            <Col xs={6} md={6} className="padding-0">
                                <FormattedMessage id="rcsMessaging.content.headers.contentType">
                                    {placeholder=>  
                                        <FormControl readOnly type="input" value={placeholder} />
                                    }
                                </FormattedMessage>
                                <FormattedMessage id="rcsMessaging.content.headers.botId">
                                    {placeholder=>  
                                        <FormControl readOnly type="input" value={placeholder} />
                                    }
                                </FormattedMessage>
                                <FormattedMessage id="rcsMessaging.content.headers.token">
                                    {placeholder=>  
                                        <FormControl readOnly type="input" value={placeholder} />
                                    }
                                </FormattedMessage>

                            </Col>
                            <Col xs={6} md={6}>
                                <FormControl 
                                    name="contentType"
                                    value="" />
                                <FormControl 
                                    name="botId"
                                    value="" />
                                <FormControl 
                                    name="token"
                                    value="" />
                            </Col>
                        </Row>
                    </div>

                    <div className="headers maap-std">
                        <FormattedMessage id="rcsMessaging.content.standard.title"></FormattedMessage>
                        <Row className="standard_row">
                            <Col xs={6} md={6} className="padding-0">
                                <SingleSelectComponent single handleChange={(evt) => setMethodType(evt)} data={cardTypes} />
                            </Col>
                        </Row>
                        <div className="MDN_row">
                            <FormattedMessage id="rcsMessaging.content.standard.addMdn"></FormattedMessage>
                        </div>
                        <Row className="standard_row">
                            <Col xs={12} md={12} className="pl-0">
                                <TagsInput value={this.state.tags} onChange={(evt) => this.handleChange(evt)} />
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={12} md={12} className="pl-0">
                                <FormControl componentClass="textarea" placeholder="textarea" rows={15} />
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={2} md={2} className="pl-0 pull-right">
                                <Button
                                    className="submit"
                                    size="lg"
                                    block
                                    onClick={(evt) => this.submit(evt)} >
                                    <FormattedMessage id="common.button.submit"></FormattedMessage>
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    <div className="headers maap-std">
                        <FormattedMessage id="rcsMessaging.content.msgStatus.title"></FormattedMessage>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <TableView options={this.context.state.options} s={this.context.onPageChange} tableVerticalScroll={this.context.state.tableVerticalScroll}></TableView>
                                <Col xs={3} md={3} className="padding-0 pull-right">
                                    <Button
                                        size="lg"
                                        block
                                        onClick={(evt) => this.refreshAll(evt)} >
                                        <FormattedMessage id="common.button.refreshAll"></FormattedMessage>
                                    </Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>

                    <div className="headers maap-std">
                        <FormattedMessage id="rcsMessaging.content.saveJson.title"></FormattedMessage>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <FormattedMessage id="rcsMessaging.content.saveJson.text"></FormattedMessage>
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <FormControl 
                                    name="saveJson"
                                    value="" />
                            </Col>
                        </Row>
                        <Row className="standard_row">
                            <Col xs={8} md={8} className="padding-0">
                                <Col xs={3} md={3} className="padding-0 pull-right">
                                    <Button
                                        size="lg"
                                        block
                                        onClick={(evt) => this.save(evt)} >
                                        <FormattedMessage id="common.button.save"></FormattedMessage>
                                    </Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>

                </div>
            </React.Fragment >
        );
    }
}

export default RcsMsgContainer;