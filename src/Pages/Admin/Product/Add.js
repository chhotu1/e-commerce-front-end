import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Forms from './Forms';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';


import { toast } from 'react-toastify';

import Helper from '../../../Helper';
import storage from '../../../utils/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { connect } from 'react-redux';
import { setCategoryDefaults, listCategories } from '../../../Store/actions/CategoryActions';
import { setProductDefaults, checkProductValidation, handleProductChange, addProduct } from '../../../Store/actions/ProductActions';
import { CustomLoader } from '../../../Components/shared';
import withRouter from '../../../Components/shared/withRouter';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            file: '',
            isSpinner:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.setCategoryDefaults();
        this.props.setProductDefaults();
        this.props.listCategories();
    }
    handleToggleSidebar(value) {
        this.setState({ toggled: value });
    };

    handleUpload(file) {
        if (!file) {
            alert("Please choose a file first!")
        } else {
            let $this = this;
            let imageName = `${new Date().getTime()}_${file.name}`;
            const storageRef = ref(storage, `/product/${imageName}`)
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(percent)
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        $this.props.product.product.image_url = url;
                        $this.props.product.product.image_name = imageName;
                        $this.save();
                    });
                }
            );
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        if (name === 'photo') {
            this.setState({ file: event.target.files[0] })
        } else {
            this.props.handleProductChange(name, value);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            this.props.product.product,
            this.props.product.formError,
            Helper.Forms.productForm
        );
        if (Object.keys(formObject).length !== 0) {
            this.props.checkProductValidation(formObject);
            return false;
        }
        this.setState({ isSpinner: true });
        if (!this.state.file) {
            this.save();
        } else {
            this.handleUpload(this.state.file);
        }
    }

    save() {
        let $this = this;
        const { navigate } = $this.props.router;
        this.props.addProduct(this.props.product.product, function (res) {
            $this.setState({ isSpinner: false });
            if (res.data.status === true) {
                navigate('/admin/product');
                toast.success("New Record Added Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            } else {
                toast.warning(res.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        });
    }

    render() {
        const {category,product} = this.props;
        return (
            <div className={`admin-app ${this.state.toggled ? 'toggled' : ''}`}>
                <Aside
                    toggled={this.state.toggled}
                    handleToggleSidebar={this.handleToggleSidebar}
                />
                <div className='admin-content'>
                    <TopNav handleToggleSidebar={this.handleToggleSidebar} />

                    <div className='container'>
                    {this.state.isSpinner?(<CustomLoader/>):''}
                        <CardContainer title="Add Product" backLink={Helper.RouteName.ADMIN.PRODUCT.MAIN}>
                            <Form onSubmit={this.handleSubmit}>
                                <Forms product={product.product} categories={category.categories} handleChange={this.handleChange} formErrors={product.formError} />
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

const mapStateToProps = (state, ownProps) => {
    return {
        category: state.category,
        product: state.product,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkProductValidation: (value) => dispatch(checkProductValidation(value)),
        setProductDefaults: () => dispatch(setProductDefaults()),
        setCategoryDefaults: () => dispatch(setCategoryDefaults()),
        addProduct: (payload, cb) => dispatch(addProduct(payload, cb)),
        listCategories: () => dispatch(listCategories()),
        handleProductChange: (field, value) => dispatch(handleProductChange(field, value)),


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
