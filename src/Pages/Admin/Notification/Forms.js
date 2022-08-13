import React from 'react'
import { Form } from 'react-bootstrap';

const Forms = (props) => {
  const { formErrors, handleChange, notification } = props;
  return (
    <div>
      <div className='row'>

        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange} value={notification?.title} />
          </Form.Group>
          {formErrors?.title ? (<div className="error">{formErrors?.title}</div>) : null}
        </div>
      </div>
    </div>
  )
}

export default Forms
