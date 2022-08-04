import React from 'react'
import { Form } from 'react-bootstrap';

const Forms = (props) => {
  const { formErrors, handleChange, leave } = props;
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="start_date" placeholder="Enter name" onChange={handleChange} value={leave?.start_date} />
            {formErrors?.start_date ? (<div className="error">{formErrors?.start_date}</div>) : null}

          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="end_date" placeholder="Enter name" onChange={handleChange} value={leave?.end_date} />
           {formErrors?.end_date ? (<div className="error">{formErrors?.end_date}</div>) : null}

          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Select leave type</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Select aria-label="Default select example" name="leave_type" onChange={handleChange} value={leave?.leave_type}>
              <option>Select leave type</option>
              <option value="1">Half day</option>
              <option value="2">Full day</option>
            </Form.Select>
           {formErrors?.leave_type ? (<div className="error">{formErrors?.leave_type}</div>) : null}

          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange} value={leave?.title} />
          </Form.Group>
         {formErrors?.title ? (<div className="error">{formErrors?.title}</div>) : null}

        </div>
        <div className='col-md-12'>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" placeholder="Enter title" onChange={handleChange} value={leave?.description} />
           {formErrors?.description ? (<div className="error">{formErrors?.description}</div>) : null}
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default Forms
