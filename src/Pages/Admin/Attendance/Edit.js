import React, { useEffect, useState } from 'react';
import {
    useNavigate,
    useParams
} from "react-router-dom";
import { Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import Aside from '../../../Components/admin-app/Aside';
import TopNav from '../../../Components/admin-app/TopNav';
import CardContainer from '../../../Components/shared/CardContainer';
import Helper from '../../../Helper';
import { CustomLoader } from '../../../Components/shared';
import AttendenceServices from '../../../Helper/Services/AttendenceServices';
const Edit = () => {
    const [toggled, setToggled] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false)
    const [user, setUser] = useState({});
    const [checkBox,setCheckBox] = useState(false)

    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        getUser()
    }, [params])
    const getUser = () => {
        setIsSpinner(true)
        AttendenceServices.showOne(params.id).then(response => {
            if (response.data.status === true) {
                let record = response.data.data;
                setUser(record);
                setCheckBox(record.present)
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
            setIsSpinner(false)
        }).catch(error => {
            setIsSpinner(false)
            if (error.response) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let payload={
            present:checkBox,
        }
        setIsSpinner(true)
        AttendenceServices.edit(payload,params.id).then(response => {
            setIsSpinner(false)
            if (response.data.status === true) {
                navigate(Helper.RouteName.ATTENDENCE.MAIN);
                toast.success("Record updated Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            } else {
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        }).catch(error => {
            setIsSpinner(false)
            if (error.response) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        })
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
                    {isSpinner ? (<CustomLoader />) : ''}
                    <CardContainer title="Update Attendence" backLink={Helper.RouteName.ATTENDENCE.MAIN}>
                        <Form onSubmit={handleSubmit}>
                            <div className='col-md-3 mb-4'>
                                <div className='row'>
                                    <div className='col-md-2 p-0 m-0'>
                                        {user?.user_id?.image_url ? (
                                            <img src={user?.user_id?.image_url} alt="" style={{ height: 40, width: 40, borderRadius: '100%' }} />
                                        ) : ''}
                                    </div>
                                    <div className='col-md-10'>
                                        <Form.Check className='mt-2'
                                            type="switch"
                                            id={user?.id}
                                            label={user?.user_id?.name}
                                            onChange={(event)=>setCheckBox(event.target.checked)}
                                            checked={checkBox}
                                        />
                                    </div>
                                </div>

                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </CardContainer>
                </div>
            </div>
        </div>

    )
}

export default Edit;
