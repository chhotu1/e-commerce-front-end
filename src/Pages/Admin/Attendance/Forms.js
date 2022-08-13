import React from 'react'
import { Form } from 'react-bootstrap';
const Forms = (props) => {
  const { users,handleChange } = props;
  return (
    <div className='py-4'>
        <div className='row'>
          {users && users.map((item, index) => {
            return (
              <div className='col-md-3 mb-4' key={index}>
                <div className='row'>
                  <div className='col-md-2 p-0 m-0'>
                    {item?.image_url ? (
                      <img src={item?.image_url} alt="" style={{ height: 40, width: 40,borderRadius: '100%' }} />
                    ) : ''}
                  </div>
                  <div className='col-md-10'>
                    <Form.Check className='mt-2'
                      type="switch"
                      id={index}
                      label={item?.name}
                      onChange={(e) => handleChange(e.target.checked, item.user_id)}
                      checked={item?.present}
                    />
                  </div>
                </div>

              </div>
            )
          })}
        </div>
     
    </div>
  )
}

export default Forms
