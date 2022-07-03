import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { FaBeer,FaRegHeart,FaCartPlus } from 'react-icons/fa';
export default class TopProduct extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-4 mt-3'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg?crop=0.982xw:0.736xh;0,0.189xh&resize=980:*"
                            />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div className='row card-icon'>
                                    <div className='col-md-6 text-center'>
                                        <button type="button"><FaRegHeart/></button>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                       <button type="button" > <FaCartPlus/></button>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        )
    }
}
