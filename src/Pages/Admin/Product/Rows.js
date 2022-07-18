import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteProduct } from '../../../Store/actions/ProductActions';
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
    this.props.deleteProduct(this.props.product._id, function (response) {
      if (response.data.status === true) {
        if ($this.props.product.image_name) {
          deleteStorageImage('product', $this.props.product.image_name)
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
    const { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product?.title}</td>
        <td>
          {product?.image ? (
            <img src={product?.image} alt="" style={{ height: 100, width: 100 }} />
          ) : ''}
        </td>
        <td>{product?.price}</td>


        <td>{product?.status === 1 ? 'Active' : 'Deactive'}</td>
        <td>{product?.created_by?.name}</td>
        <td>
          <div className="btn btn-info btn-sm"><Link to={'/categories/edit/' + product._id} ><FaRegEdit /></Link></div>
          <div className="btn btn-danger btn-sm" onClick={this.handleDelete}><FaTrashAlt /></div>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id, fun) => dispatch(deleteProduct(id, fun))
  }
};

export default connect(null, mapDispatchToProps)(Rows);
