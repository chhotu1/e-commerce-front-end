import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteNotification } from '../../../Store/actions/NotificationActions';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Helper from '../../../Helper';
const Rows = (props) => {
  const { notification, index } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteNotification(notification._id, function (response) {
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
      <td>{notification?.title}</td>
      <td><span className={`status ${notification?.status === 1 ? 'active' : 'deactive'}`}>{notification?.status === 1 ? 'Active' : 'Deactive'}</span></td>
      <td>{notification?.created_by?.name}</td>
      <td>
        <div className="btn btn-info btn-sm"><Link to={`${Helper.RouteName.NOTIFICATION.EDIT}${notification._id}`} ><FaRegEdit /></Link></div>
        <div className="btn btn-danger btn-sm" onClick={handleDelete}><FaTrashAlt /></div>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotification: (id, fun) => dispatch(deleteNotification(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
