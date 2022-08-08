import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Helper from '../../../Helper';
import UserServices from '../../../Helper/Services/UserServices';
import Constant from '../../../utils/Constant';

const Forms = (props) => {
  const { formErrors, leave } = props;
  const role = Helper.StorageService.getUserRole();
  const [checkedBox, setCheckBox] = useState(true)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser();
  }, [])

  const handleChange = (checkedData,userId) => {
    let index = users.findIndex((e)=>e.id===userId);
    if(index!==-1){
      users[index]['present'] = checkedData;
      console.log(users);
      setUsers(users);
    }
  }

  const getUser = () => {
    UserServices.list().then(response => {
      if (response.data.status === true) {
        let record = response.data.data;
        if (record.length !== 0) {
          let userData =[];
          record.map((e) => {
            userData.push({name:e.name,id:e._id,present:true})
          });
          setUsers(userData);
        }
      }
    }).catch(error => {

    })
  }

  return (
    <div className='py-4'>
      <Form>
        <div className='row'>
          {users && users.map((item, index) => {
            return (
              <div className='col-md-4' key={index}>
                <Form.Check
                  type="switch"
                  id={index}
                  label={item?.name}
                  onChange={(e)=>handleChange(e.target.checked,item.id)}
                  checked={item?.present}
                />
              </div>
            )
          })}
        </div>
      </Form>
    </div>
  )
}

export default Forms
