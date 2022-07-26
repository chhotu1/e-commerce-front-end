import React, { Component } from 'react'
import Slider from '../Components/web-app/home/Slider';
import TopProduct from '../Components/web-app/home/TopProduct';
import { connect } from 'react-redux';
import { listProducts,setProductDefaults } from '../Store/actions/ProductActions';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        toggled: false
    }
}
componentDidMount() {
    this.props.setProductDefaults();
    this.props.listProducts();
}
handleToggleSidebar(value) {
    this.setState({ toggled: value });
};

  render() {
    return (
      <div>
        <Slider/>
        <div className='container py-4'>
          <h2 className='text-center py-4'>Top Product</h2>
          <TopProduct products={this.props.product.products}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {

  return {
      product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      listProducts: () => dispatch(listProducts()),
      setProductDefaults: () => dispatch(setProductDefaults()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);







