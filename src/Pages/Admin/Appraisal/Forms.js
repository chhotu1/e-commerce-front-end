import React from 'react'
import { Form } from 'react-bootstrap';

const Forms = (props) => {
  const { formErrors, handleChange, appraisal,users } = props;
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="start_date" placeholder="Enter name" onChange={handleChange} value={appraisal?.start_date} />
            {formErrors?.start_date ? (<div className="error">{formErrors?.start_date}</div>) : null}

          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="date" name="end_date" placeholder="Enter name" onChange={handleChange} value={appraisal?.end_date} />
           {formErrors?.end_date ? (<div className="error">{formErrors?.end_date}</div>) : null}

          </Form.Group>
        </div>
       

        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter title" onChange={handleChange} value={appraisal?.title} />
          </Form.Group>
         {formErrors?.title ? (<div className="error">{formErrors?.title}</div>) : null}

        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control type="text" name="amount" placeholder="Enter amount" onChange={handleChange} value={appraisal?.amount} />
          </Form.Group>
         {formErrors?.amount ? (<div className="error">{formErrors?.amount}</div>) : null}

        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Select status</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Select aria-label="Default select example" name="status" onChange={handleChange} value={appraisal?.status}>
              <option>Select status</option>
              <option value={1}>Active</option>
              <option value={2}>Deactive</option>
            </Form.Select>
           {formErrors?.status ? (<div className="error">{formErrors?.status}</div>) : null}

          </Form.Group>
        </div>

        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Select user</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Select aria-label="Default select example" name="user" onChange={handleChange} value={appraisal?.user}>
              <option>Select user</option>
              {users && users.map((item,index)=>{
                return(
                  <option value={item._id} key={index}>{item.name}</option>
                )
              })}
              
              
            </Form.Select>
           {formErrors?.user ? (<div className="error">{formErrors?.user}</div>) : null}

          </Form.Group>
        </div>

        <div className='col-md-12'>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label><Form.Label className='error'>*</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" placeholder="Enter title" onChange={handleChange} value={appraisal?.description} />
           {formErrors?.description ? (<div className="error">{formErrors?.description}</div>) : null}
          </Form.Group>
        </div>
       
      </div>
    </div>
  )
}

export default Forms
