import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
export default class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formErrors, handleChange, user } = this.props;
    return (
      <div className='row'>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleChange} value={user?.name} />
            {formErrors?.name ? (<div className="error">{formErrors?.name}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" placeholder="Enter Email" onChange={handleChange} value={user?.email} />
            {formErrors?.email ? (<div className="error">{formErrors?.email}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" placeholder="Enter phone" onChange={handleChange} value={user?.phone} />
            {formErrors?.phone ? (<div className="error">{formErrors?.phone}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>password</Form.Label>
            <Form.Control type="text" name="password" placeholder="Enter password" onChange={handleChange} value={user?.password} />
            {formErrors?.password ? (<div className="error">{formErrors?.password}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" name="role" placeholder="Enter role" onChange={handleChange} value={user?.role} />
            {formErrors?.role ? (<div className="error">{formErrors?.role}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="text" name="date_of_birth" placeholder="Enter date_of_birth" onChange={handleChange} value={user?.date_of_birth} />
            {formErrors?.date_of_birth ? (<div className="error">{formErrors?.date_of_birth}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Form.Control type="text" name="experience" placeholder="Enter experience" onChange={handleChange} value={user?.experience} />
            {formErrors?.experience ? (<div className="error">{formErrors?.experience}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Specialist</Form.Label>
            <Form.Control type="text" name="specialist" placeholder="Enter specialist" onChange={handleChange} value={user?.specialist} />
            {formErrors?.specialist ? (<div className="error">{formErrors?.specialist}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Adhar number</Form.Label>
            <Form.Control type="text" name="adhar_no" placeholder="Enter adhar_no" onChange={handleChange} value={user?.adhar_no} />
            {formErrors?.adhar_no ? (<div className="error">{formErrors?.adhar_no}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Pain number</Form.Label>
            <Form.Control type="text" name="pain_no" placeholder="Enter pain_no" onChange={handleChange} value={user?.pain_no} />
            {formErrors?.pain_no ? (<div className="error">{formErrors?.pain_no}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Father mobile number</Form.Label>
            <Form.Control type="text" name="father_mobile_no" placeholder="Enter father_mobile_no" onChange={handleChange} value={user?.father_mobile_no} />
            {formErrors?.father_mobile_no ? (<div className="error">{formErrors?.father_mobile_no}</div>) : null}
          </Form.Group>
        </div>
       
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Other phone</Form.Label>
            <Form.Control type="text" name="other_phone" placeholder="Enter other_phone" onChange={handleChange} value={user?.other_phone} />
            {formErrors?.other_phone ? (<div className="error">{formErrors?.other_phone}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Friend phone</Form.Label>
            <Form.Control type="text" name="friend_phone" placeholder="Enter friend_phone" onChange={handleChange} value={user?.friend_phone} />
            {formErrors?.friend_phone ? (<div className="error">{formErrors?.friend_phone}</div>) : null}
          </Form.Group>
        </div>
        <div className='col-md-6'>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" name="status" placeholder="Enter status" onChange={handleChange} value={user?.status} />
            {formErrors?.status ? (<div className="error">{formErrors?.status}</div>) : null}
          </Form.Group>
        </div>

        <div className='col-md-6'>
          <Form.Group className="mb-3" controlId="photo">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" name="photo" accept="/image/*" onChange={handleChange} />
          </Form.Group>
        </div>
      </div>
    )
  }
}
