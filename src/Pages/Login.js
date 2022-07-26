import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Helper from '../Helper';
import withRouter from '../Components/shared/withRouter';
import {CustomLoader} from '../Components/shared'
class Login extends Component {
  constructor(props) {
    super(props);
    const initialForm = {
      email: "",
      password: ""
    }
    this.state = {
      form: initialForm,
      formErrors: initialForm,
      isLoader:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let newForm = {
      ...this.state.form,
      [name]: e.target.value
    }
    this.setState({
      form: newForm
    });
    this.setState({ formErrors: { ...this.state.formErrors, [name]: Helper.Forms.loginForm(name, value) } })
  }

  navigator = () => {
    const { navigate } = this.props.router;
    navigate(Helper.RouteName.ADMIN.MAIN);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('kjhgfdfghjk')
    this.setState({isLoader:true});
    Helper.AuthServices.login(this.state.form).then((response) => {
      
      if(response.data.status===true){
        Helper.StorageService.setAccessToken(response.data.token)
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
        setTimeout(()=>{
          const { navigate } = this.props.router;
          navigate(Helper.RouteName.ADMIN.MAIN);
        },1000)
      }else{
        this.setState({isLoader:false});
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      }
    }).catch((error) => {
      this.setState({isLoader:false});
      if(error.response){
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      }
    })
  }

  render() {
    const {formErrors,isLoader} = this.state;
    return (
      <div className='container py-4 '>
        {isLoader?<CustomLoader/>:''}
        <div className='d-flex justify-content-center'>
          <div className='col-md-5'>
            <h4 className='text-center py-4'>Login</h4>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                {formErrors.email ?<Form.Text className="error">
                 {formErrors.email}
                </Form.Text>:''}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                {formErrors.password ?<Form.Text className="error">
                 {formErrors.password}
                </Form.Text>:''}
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)

