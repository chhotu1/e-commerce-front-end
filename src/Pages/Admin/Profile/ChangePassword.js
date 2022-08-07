import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import UserServices from '../../../Helper/Services/UserServices';
import { CustomLoader } from '../../../Components/shared'

const ChangePassword = () => {
    const [toggled, setToggled] = useState(false);
    let navigate = useNavigate();
    const initialForm = {
        currentPassword: "",
        newPassword: "",
        verifyPassword: ""
    }
    const [form, setForm] = useState(initialForm)
    const [formError, setFormError] = useState(initialForm);
    const [isSpinner, setIsSpinner] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formObject = Helper.Forms.validateForm(
            form,
            formError,
            Helper.Forms.changePasswordForm
        );

        if (Object.keys(formObject).length !== 0) {
            setFormError({ ...formError, ...formObject });
            return false;
        }
        setIsSpinner(true)
        UserServices.changePassword(form).then(response => {
            setIsSpinner(false)
            if (response.data.status === true) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
                setTimeout(() => {
                    navigate(Helper.RouteName.ADMIN.MAIN);
                }, 1000)
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }
        }).catch(error => {
            setIsSpinner(false)
            if (error.response) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }

        });
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }))
        setFormError({ ...formError, [name]: Helper.Forms.changePasswordForm(name, value) })
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
                {isSpinner?<CustomLoader/>:''}
                    <CardContainer title="Change Password">
                        <div className='d-flex justify-content-center'>
                            <div className='col-md-5'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label>Current password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter current password" value={form.currentPassword} name="currentPassword" onChange={handleChange} />
                                        {formError.currentPassword ? <Form.Text className="error">
                                            {formError.currentPassword}
                                        </Form.Text> : ''}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNewPassword">
                                        <Form.Label>New password</Form.Label>
                                        <Form.Control type="password" placeholder="New password" value={form.newPassword} name="newPassword" onChange={handleChange} />
                                        {formError.newPassword ? <Form.Text className="error">
                                            {formError.newPassword}
                                        </Form.Text> : ''}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm password" value={form.verifyPassword} name="verifyPassword" onChange={handleChange} />
                                        {formError.verifyPassword ? <Form.Text className="error">
                                            {formError.verifyPassword}
                                        </Form.Text> : ''}
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
