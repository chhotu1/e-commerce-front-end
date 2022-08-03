import React from 'react'
import { Form } from 'react-bootstrap';

const Forms = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="name" placeholder="Enter name" />
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="name" placeholder="Enter name" />
          </Form.Group>
        </div>
        <div className='col-md-6'>
        <Form.Group className="mb-3">
            <Form.Label>Select leave type</Form.Label><Form.Label className='error'>*</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select leave type</option>
            <option value="1">Half day</option>
            <option value="2">Full day</option>
          </Form.Select>
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter title" />
          </Form.Group>
        </div>
        <div className='col-md-12'>
          <Form.Group className="mb-3">
            <Form.Label>Subject</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control as="textarea" rows={3} name="name" placeholder="Enter title" />
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

export default Forms
