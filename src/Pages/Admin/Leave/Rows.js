import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteLeave } from '../../../Store/actions/LeaveActions';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Helper from '../../../Helper';
import { getLeaveType } from '../../../utils/CommonFunction';

const Rows = (props) => {
  const { leave, index } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteLeave(leave._id, function (response) {
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
      <td>{leave?.start_date}</td>
      <td>{leave?.end_date}</td>
      <td>{leave?.title}</td>
      <td>{getLeaveType(leave?.leave_type)}</td>
      
      <td><span className={`status ${leave?.status === 1 ? 'active' : 'deactive'}`}>{leave?.status === 1 ? 'Active' : 'Deactive'}</span></td>
      <td>{leave?.created_by?.name}</td>
      <td>
        <div className="btn btn-info btn-sm"><Link to={`${Helper.RouteName.LEAVE.EDIT}${leave._id}`} ><FaRegEdit /></Link></div>
        <div className="btn btn-danger btn-sm" onClick={handleDelete}><FaTrashAlt /></div>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteLeave: (id, fun) => dispatch(deleteLeave(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
