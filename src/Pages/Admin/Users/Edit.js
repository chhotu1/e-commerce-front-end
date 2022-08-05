import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import { toast } from 'react-toastify';

import Helper from '../../../Helper';
import Forms from './Forms';
import storage from '../../../utils/firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { connect } from 'react-redux';
import {  setUserDefaults, checkUserValidation, handleUserChange,addUser,showUser,editUser } from '../../../Store/actions/UserActions';
import { CustomLoader } from '../../../Components/shared';
import withRouter from '../../../Components/shared/withRouter';
import States from '../../../staticData/states';
import Cities from '../../../staticData/cities';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            file: '',
            isSpinner:false,
            current_states:[],
            current_cities:[],
            paramanent_states:[],
            paramanent_cities:[],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setUserDefaults();
        let $this= this;
        this.props.showUser(this.props.router.params.id,function (res) {
            
            if(res.data.status===true){
                
                let data = res.data.data;
                let current_country= data.current_country;
                let parmanent_country= data.parmanent_country;
                if(current_country){
                    let states = States.filter((e)=>e.country_id===current_country);
                    $this.setState({current_states:states});
                }
                if(parmanent_country){
                    let states = States.filter((e)=>e.country_id===parmanent_country);
                    $this.setState({paramanent_states:states});
                }

                let current_state= data.current_state;
                let parmanent_state= data.parmanent_state;
                if(current_state){
                    let cities = Cities.filter((e)=>e.state_id===current_state);
                    $this.setState({current_cities:cities});
                }
                if(parmanent_state){
                    let cities = Cities.filter((e)=>e.state_id===parmanent_state);
                    $this.setState({paramanent_cities:cities});
                }
            }
        });
        
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
            const storageRef = ref(storage, `/users/${imageName}`)
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
                        $this.props.user.user.image_url = url;
                        $this.props.user.user.image_name = imageName;
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
        }else if(name==='parmanent_country'){
            this.props.handleUserChange(name, value);
            let states = States.filter((e)=>e.country_id===value);
            this.setState({paramanent_states:states});
        }else if(name==='current_country'){
            this.props.handleUserChange(name, value);
            let states = States.filter((e)=>e.country_id===value);
            this.setState({current_states:states});
        }else if(name==='parmanent_state'){
            this.props.handleUserChange(name, value);
            let cities = Cities.filter((e)=>e.state_id===value);
            this.setState({paramanent_cities:cities});
        }else if(name==='current_state'){
            this.props.handleUserChange(name, value);
            let cities = Cities.filter((e)=>e.state_id===value);
            this.setState({current_cities:cities});
        } else {
            this.props.handleUserChange(name, value);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const formObject = Helper.Forms.validateForm(
            this.props.user.user,
            this.props.user.formError,
            Helper.Forms.userForm
        );
        if (Object.keys(formObject).length !== 0) {
            this.props.checkUserValidation(formObject);
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
        this.props.editUser(this.props.user.user,this.props.router.params.id, function (res) {
            $this.setState({isSpinner:false});
            if(res.data.status===true){
                // Router.push("/admin/fee")
                navigate('/admin/users');
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
        const {current_states,paramanent_states,current_cities,paramanent_cities} = this.state;

       
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
                        <CardContainer title="Add User" backLink={Helper.RouteName.ADMIN.USER.MAIN}>
                            <Form onSubmit={this.handleSubmit}>
                                <Forms paramanent_cities={paramanent_cities} current_cities={current_cities} paramanent_states={paramanent_states} current_states={current_states} handleChange={this.handleChange} formErrors={this.props.user.formError} user={this.props.user.user} />
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
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleUserChange: (field, value) => dispatch(handleUserChange(field, value)),
        checkUserValidation: (value) => dispatch(checkUserValidation(value)),
        setUserDefaults: () => dispatch(setUserDefaults()),
        addUser: (payload, cb) => dispatch(addUser(payload, cb)),
        editUser: (payload,id, cb) => dispatch(editUser(payload,id, cb)),
        showUser: (id,fun) => dispatch(showUser(id,fun)),
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Edit));
