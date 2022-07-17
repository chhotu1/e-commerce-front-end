import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteCategory } from '../../../Store/actions/CategoryActions';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import { deleteStorageImage } from '../../../util/FileStorage';
class Rows extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    let $this = this;
    this.props.deleteCategory(this.props.category._id, function (response) {
      if (response.data.status === true) {
        if($this.props.category.image_name){
          deleteStorageImage('category',$this.props.category.image_name)
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
    const { category, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{category?.title}</td>
        <td>
          {category?.image ? (
            <img src={category?.image} alt="" style={{ height: 100, width: 100 }} />
          ) : ''}
        </td>
        <td>{category?.status === 1 ? 'Active' : 'Deactive'}</td>
        <td>{category?.created_by?.name}</td>
        <td>
          <div className="btn btn-info btn-sm"><Link to={'/categories/edit/' + category._id} ><FaRegEdit /></Link></div>
          <div className="btn btn-danger btn-sm" onClick={this.handleDelete}><FaTrashAlt /></div>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCategory: (id, fun) => dispatch(deleteCategory(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
