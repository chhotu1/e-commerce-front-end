import React, { Component } from 'react'
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }
    handleToggleSidebar(value) {
        this.setState({ toggled: value });
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
                    <CardContainer title="Categories" link={Helper.RouteName.ADMIN.CATEGORY.ADD} linkTitle="Add Category">

                    </CardContainer>
                </div>
            </div>
        )
    }
}
