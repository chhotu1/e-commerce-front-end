import React from 'react'
import { Form } from 'react-bootstrap';
import Helper from '../../../Helper';
import Constant from '../../../utils/Constant';

const Forms = (props) => {
  const { formErrors, handleChange, holiday } = props;
  const role =Helper.StorageService.getUserRole();
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="start_date" placeholder="Enter name" onChange={handleChange} value={holiday?.start_date} />
            {formErrors?.start_date ? (<div className="error">{formErrors?.start_date}</div>) : null}

          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="end_date" placeholder="Enter name" onChange={handleChange} value={holiday?.end_date} />
           {formErrors?.end_date ? (<div className="error">{formErrors?.end_date}</div>) : null}

          </Form.Group>
        </div>
       

        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange} value={holiday?.title} />
          </Form.Group>
         {formErrors?.title ? (<div className="error">{formErrors?.title}</div>) : null}

        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Select status</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Select aria-label="Default select example" name="status" onChange={handleChange} value={holiday?.status}>
              <option>Select status</option>
              <option value={1}>Active</option>
              <option value={2}>Deactive</option>
            </Form.Select>
           {formErrors?.status ? (<div className="error">{formErrors?.status}</div>) : null}

          </Form.Group>
        </div>
        <div className='col-md-12'>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" placeholder="Enter title" onChange={handleChange} value={holiday?.description} />
           {formErrors?.description ? (<div className="error">{formErrors?.description}</div>) : null}
          </Form.Group>
        </div>
       
      </div>
    </div>
  )
}

export default Forms
