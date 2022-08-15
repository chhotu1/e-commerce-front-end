import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteUser } from '../../../Store/actions/UserActions';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import { deleteStorageImage } from '../../../utils/FileStorage';
import Helper from '../../../Helper';
import { getRoleName } from '../../../utils/CommonFunction';
class Rows extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    let $this = this;
    this.props.deleteUser(this.props.user._id, function (response) {
      if (response.data.status === true) {
        if($this.props.user.image_name){
          deleteStorageImage('users',$this.props.user.image_name)
        }
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

  render() {
    const { user, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user?.name}</td>
        <td>
          {user?.image_url ? (
            <img src={user?.image_url} alt="" style={{ height: 50, width: 50,borderRadius:'100%' }} />
          ) : ''}
        </td>
        <td> <span className={`status ${user?.status === 1 ? 'active' : 'deactive'}`}>{user?.status === 1 ? 'Active' : 'Deactive'}</span></td>
        <td>{user?.email}</td>
        <td>{user?.role?getRoleName(user?.role):''}</td>
        <td>
          <div className="btn btn-info btn-sm"><Link to={`${Helper.RouteName.ADMIN.USER.EDIT}${user._id}`} ><FaRegEdit /></Link></div>
          <div className="btn btn-danger btn-sm" onClick={this.handleDelete}><FaTrashAlt /></div>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id, fun) => dispatch(deleteUser(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
