import React, { Component } from 'react'
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Rows from './Rows';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listUsers, setUserDefaults } from '../../../Store/actions/UserActions';
import { CustomLoader } from '../../../Components/shared';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }
    componentDidMount() {
        this.props.setUserDefaults();
        this.props.listUsers();
    }

    handleToggleSidebar(value) {
        this.setState({ toggled: value });
    };
    render() {
        // console.log(this.props.categories, '.==================')
        return (
            <div className={`admin-app ${this.state.toggled ? 'toggled' : ''}`}>
                <Aside
                    toggled={this.state.toggled}
                    handleToggleSidebar={this.handleToggleSidebar}
                />
                <div className='admin-content'>
                    <TopNav handleToggleSidebar={this.handleToggleSidebar} />
                    {this.props.user.list_spinner?<CustomLoader/>:''}
                    <CardContainer title="User" link={Helper.RouteName.ADMIN.USER.ADD} linkTitle="Add User">
                        
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.user.users ? (
                                        this.props.user.users.map((item,index) => <Rows key={item._id} user={item} index={index} />)
                                    ) : null
                                }

                            </tbody>
                        </Table>
                    </CardContainer>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listUsers: () => dispatch(listUsers()),
        setUserDefaults: () => dispatch(setUserDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


