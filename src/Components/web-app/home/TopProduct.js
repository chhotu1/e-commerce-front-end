import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FaRegHeart, FaCartPlus } from 'react-icons/fa';
export default class TopProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products } = this.props;
        return (
            <div className='row'>
                {products && products.map((product, index) => {
                    return (
                        <div className='col-md-4 mt-3' key={index}>
                            <CardGroup>
                                <Card>
                                    <Card.Img variant="top" src={product?.image} className="card-image"/>
                                    <Card.Body>
                                        <Card.Title className="product-title">{product?.title}</Card.Title>
                                        <Card.Text>
                                            <b>&#x20a8; </b>{product?.price}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className='row card-icon'>
                                            <div className='col-md-6 text-center'>
                                                <button type="button"><FaRegHeart /></button>
                                            </div>
                                            <div className='col-md-6 text-center'>
                                                <button type="button" > <FaCartPlus /></button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                    )
                })}
            </div>
        )
    }
}
