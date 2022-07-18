import React, { Component } from 'react';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';

import Rows from './Rows';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { listProducts, setProductDefaults } from '../../../Store/actions/ProductActions';
import { CustomLoader } from '../../../Components/shared';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        }
    }
    componentDidMount() {
        this.props.setProductDefaults();
        this.props.listProducts();
    }
    handleToggleSidebar(value) {
        this.setState({ toggled: value });
    };
    render() {
        console.log(this.props.product,'==========')
        return (
            <div className={`admin-app ${this.state.toggled ? 'toggled' : ''}`}>
                <Aside
                    toggled={this.state.toggled}
                    handleToggleSidebar={this.handleToggleSidebar}
                />
                <div className='admin-content'>
                    <TopNav handleToggleSidebar={this.handleToggleSidebar} />
                    {this.props.product.list_spinner?<CustomLoader/>:''}
                    <CardContainer title="Product" link={Helper.RouteName.ADMIN.PRODUCT.ADD} linkTitle="Add Product">
                    <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Created by</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.product.products ? (
                                        this.props.product.products.map((item,index) => <Rows key={item._id} product={item} index={index} />)
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
        product: state.product,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listProducts: () => dispatch(listProducts()),
        setProductDefaults: () => dispatch(setProductDefaults()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
