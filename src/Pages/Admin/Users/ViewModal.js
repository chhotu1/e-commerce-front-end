import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import Helper from '../../../Helper';
const ViewModal = (props) => {
    const { show, handleClose, user } = props;
    return (
        <div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>User Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='profile-image-container'>
                                <img alt='' src={user?.image_url ? user?.image_url : Helper.Images.user2} />
                                <p>{user?.name}</p>
                                <label>Software developer</label>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='profile-content'>
                                <label className='label-name'>Name : </label>
                                <p className='label-value'>{user?.name}</p>
                                <label className='label-name'>Email : </label>
                                <p className='label-value'>{user?.email}</p>
                                <label className='label-name'>Phone : </label>
                                <p className='label-value'>{user?.phone} {user?.other_phone ? <>({user?.other_phone})</> : ''}</p>
                                <label className='label-name'>Address : </label>
                                <p className='label-value'>{user?.address}</p>

                                <label className='label-name'>Date of birth : </label>
                                <p className='label-value'>{user?.date_of_birth}</p>
                                <label className='label-name'>Experience : </label>
                                <p className='label-value'>{user?.experience}</p>
                                <label className='label-name'>Father mobile no : </label>
                                <p className='label-value'>{user?.father_mobile_no}</p>
                                <label className='label-name'>friend phone : </label>
                                <p className='label-value'>{user?.friend_phone}</p>
                                <label className='label-name'>Pain no : </label>
                                <p className='label-value'>{user?.pain_no}</p>
                                <label className='label-name'>adhar no : </label>
                                <p className='label-value'>{user?.adhar_no}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ViewModal
