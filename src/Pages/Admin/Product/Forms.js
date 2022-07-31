import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
export default class Forms extends Component {
    render() {
        const { formErrors, handleChange, categories } = this.props;
        return (
            <div className='row'>
                <div className='col-md-6'>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter Title" onChange={handleChange} />
                        {formErrors?.title ? (<div className="error">{formErrors?.title}</div>) : null}
                    </Form.Group>
                </div>
                <div className='col-md-6'>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleChange} name="category_id">
                            <option>Select Category</option>
                            {categories && categories.map((item, index) => {
                                return (
                                    <option value={item?._id} key={index}>{item?.title}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-md-6'>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" placeholder="Enter price" onChange={handleChange} />
                        {formErrors?.price ? (<div className="error">{formErrors?.price}</div>) : null}
                    </Form.Group>
                </div>
                <div className='col-md-6'>
                    <Form.Group className="mb-3">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control as="textarea" rows={1} name="discription"  onChange={handleChange} />
                        {formErrors?.discription ? (<div className="error">{formErrors?.discription}</div>) : null}
                    </Form.Group>
                </div>

                <div className='col-md-6'>
                    <Form.Group className="mb-3" controlId="photo">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="file" name="photo" accept="/image/*" onChange={handleChange} />
                    </Form.Group>
                </div>

            </div>
        )
    }
}
