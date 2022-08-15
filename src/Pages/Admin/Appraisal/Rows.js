import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteAppraisal } from '../../../Store/actions/AppraisalActions';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import Helper from '../../../Helper';
const Rows = (props) => {
  const { appraisal, index } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteAppraisal(appraisal._id, function (response) {
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
      <td>{appraisal?.start_date}</td>
      <td>{appraisal?.end_date}</td>
      <td>{appraisal?.title}</td>
      <td><span className={`status ${appraisal?.status === 1 ? 'active' : 'deactive'}`}>{appraisal?.status === 1 ? 'Active' : 'Deactive'}</span></td>
      <td>{appraisal?.created_by?.name}</td>
      <td>
        <div className="btn btn-info btn-sm"><Link to={`${Helper.RouteName.APPRAISAL.EDIT}${appraisal._id}`} ><FaRegEdit /></Link></div>
        <div className="btn btn-danger btn-sm" onClick={handleDelete}><FaTrashAlt /></div>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAppraisal: (id, fun) => dispatch(deleteAppraisal(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
