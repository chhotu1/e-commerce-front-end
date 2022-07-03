import React, { Component } from 'react'
import Slider from '../Components/web-app/home/Slider';
import TopProduct from '../Components/web-app/home/TopProduct';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <div className='container py-4'>
          <h2 className='text-center py-4'>Top Product</h2>
        <TopProduct/>
        </div>
       
      </div>
    )
  }
}


