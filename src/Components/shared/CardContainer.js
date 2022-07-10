import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
export default class CardContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='custom-card'>
                <Card style={{ width: '100%', padding: 10 }}>
                    <div className='d-flex justify-content-between card-container'>
                        <p>
                            {this.props.backLink ? (
                                <Link to={this.props.backLink}><FaArrowLeft /></Link>
                            ) : null}
                            {this.props.title}
                        </p>
                        {this.props.link ? (
                            <div className='card-btn'>
                                <Link to={this.props.link}>
                                    {this.props.linkTitle}
                                </Link>
                            </div>
                        ) : null}
                    </div>
                    <Card.Body>
                        {this.props.children}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
