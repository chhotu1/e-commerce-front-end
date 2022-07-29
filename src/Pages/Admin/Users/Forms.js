import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
export default class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {formErrors,handleChange} = this.props;
    return (
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Enter Title" onChange={handleChange} />
          {formErrors?.title ? (<div className="error">{formErrors?.title}</div>) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" name="photo" accept="/image/*" onChange={handleChange}/>
        </Form.Group>
      </div>
    )
  }
}
