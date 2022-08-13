import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import Helper from '../../../Helper';
import { dateFormateWithTime } from '../../../utils/CommonFunction';
const Rows = (props) => {
  const { user, index,handleDelete } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
      
        {user?.user_id?.image_url ? (
          <img src={user?.user_id?.image_url} alt="" style={{ height: 45, width: 45,borderRadius:'100%' }} />
        ) : ''}
        {user?.user_id?.name}
      </td>
      {/* <td>{user?.status === 1 ? 'Active' : 'Deactive'}</td> */}
      <td>{user?.created_by?.name}</td>
      <td>{user?.created_at?dateFormateWithTime(user?.created_at):''}</td>
      <td> <span className={`status ${user?.present === true ? 'present' : 'absent'}`}>{user?.present === true ? 'Present' : 'Absent'}</span></td>
      <td>
        <div className="btn btn-info btn-sm"><Link to={`${Helper.RouteName.ATTENDENCE.EDIT}${user._id}`} ><FaRegEdit /></Link></div>
        <div className="btn btn-danger btn-sm" onClick={()=>handleDelete(user._id)}><FaTrashAlt /></div>
      </td>
    </tr>
  )
}

export default Rows;
