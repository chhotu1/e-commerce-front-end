import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import Forms from './Forms';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
export default class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            toggled:false
        }
    }
    handleToggleSidebar(value){
        this.setState({toggled:value});
    };
    render() {
        return (
            <div className={`admin-app ${this.state.toggled ? 'toggled' : ''}`}>
                <Aside
                    toggled={this.state.toggled}
                    handleToggleSidebar={this.handleToggleSidebar}
                />
                <div className='admin-content'>
                    <TopNav handleToggleSidebar={this.handleToggleSidebar} />

                    <div className='container'>
                        <CardContainer title="Add Product" backLink={Helper.RouteName.ADMIN.PRODUCT.MAIN}>
                        <Form>
                            <Forms/>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </CardContainer>
                    </div>
                </div>
            </div>
        )
    }
}
