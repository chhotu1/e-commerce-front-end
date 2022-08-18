import React, { Component } from 'react'
import { toast } from 'react-toastify';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Rows from './Rows';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listUsers, setUserDefaults, showUser } from '../../../Store/actions/UserActions';
import { CustomLoader } from '../../../Components/shared';
import ViewModal from './ViewModal';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            show: false,
            user: {},
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    componentDidMount() {
        this.props.setUserDefaults();
        this.props.listUsers();
    }

    handleToggleSidebar(value) {
        this.setState({ toggled: value });
    };
    handleClose() {
        // e.preventDefault();
        this.setState({ show: false })

    }
    handleShow(user_id) {
        this.setState({ show: true })
        console.log(user_id)
        let $this = this;
        this.props.showUser(user_id, function (response) {
            if (response.data.status === true) {
                let data = response.data.data;
                $this.setState({user:data});
                console.log(data, 'data')
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }
        });
    }

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
                    {this.props.user.list_spinner ? <CustomLoader /> : ''}
                    <CardContainer title="User" link={Helper.RouteName.ADMIN.USER.ADD} linkTitle="Add User">

                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.user.users ? (
                                        this.props.user.users.map((item, index) => <Rows handleShow={this.handleShow} key={item._id} user={item} index={index} />)
                                    ) : null
                                }

                            </tbody>
                        </Table>
                    </CardContainer>
                </div>
                {/* User modal */}
                <ViewModal show={this.state.show} handleClose={this.handleClose} user={this.state.user}/>
                {/* view modal */}
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
        setUserDefaults: () => dispatch(setUserDefaults()),
        showUser: (id, fun) => dispatch(showUser(id, fun)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


