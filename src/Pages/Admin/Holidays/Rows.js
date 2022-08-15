import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteHoliday } from '../../../Store/actions/HolidaysActions';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Helper from '../../../Helper';
import Constant from '../../../utils/Constant';
const Rows = (props) => {
  const { holiday, index,user } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteHoliday(holiday._id, function (response) {
      if (response.data.status === true) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored",
        });
      }
    });
  }
  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{holiday?.start_date}</td>
      <td>{holiday?.end_date}</td>
      <td>{holiday?.title}</td>
      <td><span className={`status ${holiday?.status === 1 ? 'active' : 'deactive'}`}>{holiday?.status === 1 ? 'Active' : 'Deactive'}</span></td>
      <td>{holiday?.created_by?.name}</td>
      {user?.role===Constant.ADMIN ||user?.role===Constant.HR_MANEGER?
      <td>
        <div className="btn btn-danger btn-sm" onClick={handleDelete}><FaTrashAlt /></div>
      </td>:''}
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHoliday: (id, fun) => dispatch(deleteHoliday(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
