import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import Countries from '../../../staticData/countries';
import { isNumber } from '../../../utils/CommonFunction';
import Constant from '../../../utils/Constant';
export default class Forms extends Component {
  constructor(props) {
    super(props);
    const monthNames = ["01", "02", "03", "04", "05", "06",
      "07", "08", "09", "10", "11", "12"
    ];

    let date = new Date();
    let day = date.getDate();
    let years = date.getFullYear();
    let month = monthNames[date.getMonth()];
    this.state = {
      max_date: `${years}-${month}-${day}`
    }
  }


  render() {
    const { formErrors, handleChange, user, current_states, paramanent_states, current_cities, paramanent_cities } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label><Form.Label className='error'>*</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleChange} value={user?.name} />
              {formErrors?.name ? (<div className="error">{formErrors?.name}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label><Form.Label className='error'>*</Form.Label>
              <Form.Control type="text" name="email" placeholder="Enter Email" onChange={handleChange} value={user?.email} />
              {formErrors?.email ? (<div className="error">{formErrors?.email}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label><Form.Label className='error'>*</Form.Label>
              <Form.Control type="text" name="phone" placeholder="Enter phone" onChange={handleChange}  value={user?.phone} maxLength={10} onKeyPress={isNumber} />
              {formErrors?.phone ? (<div className="error">{formErrors?.phone}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>password</Form.Label><Form.Label className='error'>*</Form.Label>
              <Form.Control type="text" name="password" placeholder="Enter password" onChange={handleChange} value={user?.password} />
              {formErrors?.password ? (<div className="error">{formErrors?.password}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label><Form.Label className='error'>*</Form.Label>
              <Form.Select aria-label="Select role" name="role" onChange={handleChange} value={user?.role}>
                <option>Select role</option>
                {Constant.ROLE && Constant.ROLE.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
              {formErrors?.role ? (<div className="error">{formErrors?.role}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Date of birth</Form.Label>
              <Form.Control type="date" name="date_of_birth" max={this.state.max_date} placeholder="Enter date_of_birth" onChange={handleChange} value={user?.date_of_birth} />
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
              <Form.Control type="text" name="father_mobile_no" maxLength={10} onKeyPress={isNumber} placeholder="Enter father_mobile_no" onChange={handleChange} value={user?.father_mobile_no} />
              {formErrors?.father_mobile_no ? (<div className="error">{formErrors?.father_mobile_no}</div>) : null}
            </Form.Group>
          </div>

          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Other phone</Form.Label>
              <Form.Control type="text" name="other_phone" maxLength={10} onKeyPress={isNumber} placeholder="Enter other_phone" onChange={handleChange} value={user?.other_phone} />
              {formErrors?.other_phone ? (<div className="error">{formErrors?.other_phone}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Friend phone</Form.Label>
              <Form.Control type="text" name="friend_phone" maxLength={10} onKeyPress={isNumber} placeholder="Enter friend_phone" onChange={handleChange} value={user?.friend_phone} />
              {formErrors?.friend_phone ? (<div className="error">{formErrors?.friend_phone}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label><Form.Label className='error'>*</Form.Label>
              <Form.Select aria-label="Enter status" name="status" onChange={handleChange} value={user?.status}>
                <option>Enter status</option>
                {Constant.STATUS && Constant.STATUS.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
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
        <h3>Current Address</h3>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select aria-label="Select role" name="current_country" onChange={handleChange} value={user?.current_country}>
                <option>Select Country</option>
                {Countries && Countries.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>

              {formErrors?.current_country ? (<div className="error">{formErrors?.current_country}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="Select role" name="current_state" onChange={handleChange} value={user?.current_state}>
                <option>Select state</option>
                {current_states && current_states.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
              {formErrors?.current_state ? (<div className="error">{formErrors?.current_state}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select aria-label="Select role" name="current_city" onChange={handleChange} value={user?.current_city}>
                <option>Select city</option>
                {current_cities && current_cities.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
              {formErrors?.current_city ? (<div className="error">{formErrors?.current_city}</div>) : null}
            </Form.Group>
          </div>

          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" name="current_pincode" maxLength={7} placeholder="Enter country" onChange={handleChange} value={user?.current_pincode} />
              {formErrors?.current_pincode ? (<div className="error">{formErrors?.current_pincode}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-12'>
            <Form.Group className="mb-3">
              <Form.Label>Full address</Form.Label>
              <Form.Control type="text" name="current_address" placeholder="Enter formated address" onChange={handleChange} value={user?.current_address} />
              {formErrors?.current_address ? (<div className="error">{formErrors?.current_address}</div>) : null}
            </Form.Group>
          </div>
        </div>

        <h3>Parmanent address</h3>
        <div className='row'>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select aria-label="Select role" name="parmanent_country" onChange={handleChange} value={user?.parmanent_country}>
                <option>Select Country</option>
                {Countries && Countries.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
              {formErrors?.parmanent_country ? (<div className="error">{formErrors?.parmanent_country}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="Select role" name="parmanent_state" onChange={handleChange} value={user?.parmanent_state}>
                <option>Select state</option>
                {paramanent_states && paramanent_states.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
              {formErrors?.parmanent_state ? (<div className="error">{formErrors?.parmanent_state}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select aria-label="Select role" name="parmanent_city" onChange={handleChange} value={user?.parmanent_city}>
                <option>Select city</option>
                {paramanent_cities && paramanent_cities.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>{item.name}</option>
                  )
                })}
              </Form.Select>
              {/* <Form.Control type="text" name="parmanent_city" placeholder="Enter city" onChange={handleChange} value={user?.parmanent_city} /> */}
              {formErrors?.parmanent_city ? (<div className="error">{formErrors?.parmanent_city}</div>) : null}
            </Form.Group>
          </div>

          <div className='col-md-6'>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" name="parmanent_pincode" maxLength={7} placeholder="Enter country" onChange={handleChange} value={user?.parmanent_pincode} />
              {formErrors?.parmanent_pincode ? (<div className="error">{formErrors?.parmanent_pincode}</div>) : null}
            </Form.Group>
          </div>
          <div className='col-md-12'>
            <Form.Group className="mb-3">
              <Form.Label>Full address</Form.Label>
              <Form.Control type="text" name="parmanent_address" placeholder="Enter formated address" onChange={handleChange} value={user?.parmanent_address} />
              {formErrors?.parmanent_address ? (<div className="error">{formErrors?.parmanent_address}</div>) : null}
            </Form.Group>
          </div>
        </div>

      </div>
    )
  }
}
