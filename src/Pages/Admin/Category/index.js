import React, { Component } from 'react'
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import Rows from './Rows';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listCategories, setCategoryDefaults } from '../../../Store/actions/CategoryActions';
import { CustomLoader } from '../../../Components/shared';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }
    componentDidMount() {
        this.props.setCategoryDefaults();
        this.props.listCategories();
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
                    {this.props.categories.list_spinner?<CustomLoader/>:''}
                    <CardContainer title="Categories" link={Helper.RouteName.ADMIN.CATEGORY.ADD} linkTitle="Add Category">

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
                                    this.props.categories.categories ? (
                                        this.props.categories.categories.map((item,index) => <Rows key={item._id} category={item} index={index} />)
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
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listCategories: () => dispatch(listCategories()),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);


