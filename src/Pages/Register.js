import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Helper from '../Helper';
import withRouter from '../Components/shared/withRouter'
class Register extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  navigator = () => {
    const { navigate } = this.props.router;
    navigate('/register');
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className='container py-4 '>
        <div className='d-flex justify-content-center'>
          <div className='col-md-5'>
            <h4 className='text-center py-4'>Register</h4>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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


export default withRouter(Register)

