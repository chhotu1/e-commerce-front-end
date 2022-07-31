import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
const ChangePassword = () => {
    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        e.preventDefault();
    }
    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Aside
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <div className='admin-content'>
                <TopNav handleToggleSidebar={handleToggleSidebar} />
                <div className='container'>
                    <CardContainer title="Change Password">
                        <div className='d-flex justify-content-center'>
                            <div className='col-md-5'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label>Current password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter current password" name="current_password" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>New password</Form.Label>
                                        <Form.Control type="password" placeholder="New password" name="new_password" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm password" name="confirm_password" onChange={handleChange} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    )
}



export default ChangePassword
