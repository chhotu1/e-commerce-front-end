import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import { toast } from 'react-toastify';

import Helper from '../../../Helper';
import Forms from './Forms';
import storage from '../../../util/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { fileStorage } from '../../../util/FileStorage';
import { connect } from 'react-redux';
import {  setCategoryDefaults, checkCategoryValidation, handleCategoryChange,addCategory } from '../../../Store/actions/CategoryActions';
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
            const storageRef = ref(storage, `/category/${imageName}`)
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
                        $this.props.category.category.image_url = url;
                        $this.props.category.category.image_name = imageName;
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
            this.props.handleCategoryChange(name, value);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            this.props.category.category,
            this.props.category.formError,
            Helper.Forms.categoryForm
        );
        if (Object.keys(formObject).length !== 0) {
            this.props.checkCategoryValidation(formObject);
            return false;
        }
        this.setState({isSpinner:true});
        if(!this.state.file){
            this.save();
        }else{
            this.handleUpload(this.state.file);
        }
    }

    save(){
        let $this = this;
        const { navigate } = $this.props.router;
        this.props.addCategory(this.props.category.category, function (res) {
            $this.setState({isSpinner:false});
            if(res.data.status===true){
                // Router.push("/admin/fee")
                navigate('/admin/category');
                toast.success("New Record Added Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }else{
                toast.warning(res.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        });
    }

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
                        {this.state.isSpinner?(<CustomLoader/>):''}
                        <CardContainer title="Add Category" backLink={Helper.RouteName.ADMIN.CATEGORY.MAIN}>
                            <Form onSubmit={this.handleSubmit}>
                                <Forms handleChange={this.handleChange} formErrors={this.props.category.formError} />
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
        category: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCategoryChange: (field, value) => dispatch(handleCategoryChange(field, value)),
        checkCategoryValidation: (value) => dispatch(checkCategoryValidation(value)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults()),
        addCategory: (payload, cb) => dispatch(addCategory(payload, cb)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Add));
