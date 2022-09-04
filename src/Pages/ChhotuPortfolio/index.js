import React, { useState } from 'react'
import {
    FaChevronRight, FaEnvelope, FaPhone, FaLocationArrow
} from 'react-icons/fa';
import { ProgressBar, Form, Button } from 'react-bootstrap';
import Sidebar from '../../Components/portfolio/sidebar';
import chhotu from '../../Components/portfolio/chhotu.jpg'
const ChhotuPortfolio = () => {

    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }
    const skillsStyles = {
        display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: '700'
    }
    const skills = [
        {
            title: "Reactjs",
            rank: 80
        },
        {
            title: "Nextjs",
            rank: 70
        },
        {
            title: "Nodejs",
            rank: 60
        },
        {
            title: "React native",
            rank: 50
        },
        {
            title: "Laravel",
            rank: 50
        },
        {
            title: "Angular",
            rank: 50
        }
    ]

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Sidebar handleToggleSidebar={handleToggleSidebar} toggled={toggled} />
            <div className='admin-content'>
                <div className='portfolio mb-4'>
                    <div className='p-3'>
                        <h2>About</h2>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                        </p>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={chhotu} alt="" style={{ width: '100%', height: 350 }} />
                            </div>
                            <div className='col-md-8'>
                                <h2>Web developer</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <FaChevronRight />
                                                <strong>Birthday:</strong> <span>11<su>th</su> Apr</span>
                                            </li>
                                            <li>
                                                <FaChevronRight /> <strong>Website:</strong> <span></span>
                                            </li>
                                            <li>
                                                <FaChevronRight />
                                                <strong>Phone:</strong> <span>+918210118348</span>
                                            </li>
                                            <li>
                                                <FaChevronRight />
                                                <strong>City:</strong> <span>Gaya,Bihar, India</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><FaChevronRight />
                                                <strong>Age:</strong> <span>30</span>
                                            </li>
                                            <li>
                                                <FaChevronRight />
                                                <strong>Degree:</strong> <span>Master</span>
                                            </li>
                                            <li>
                                                <FaChevronRight />
                                                <strong>Email:</strong> <span>chhotukumarsow@gmail.com</span>
                                            </li>
                                            <li>
                                                <FaChevronRight />
                                                <strong>Freelance:</strong> <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='skills p-3'>
                        <h2>Skills</h2>
                        <div className='row'>
                            {skills.map((item, index) => {
                                return (
                                    <div className=' col-md-6 pt-3' key={index}>
                                        <div style={skillsStyles}>
                                            <p>{item.title}</p>
                                            <p>{item.rank}%</p>
                                        </div>
                                        <ProgressBar now={item.rank} label={`${item.rank}%`} animated />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className='contactus p-3'>
                        <h2>Contact</h2>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="info">
                                    <div className="contact-container">
                                        <p><FaLocationArrow /></p>
                                        <div>
                                            <h4>Location:</h4>
                                            <label>Khizersarai, Gaya, Bihar, 824233</label>
                                        </div>
                                    </div>

                                    <div className="contact-container">
                                        <p><FaEnvelope /></p>
                                        <div>
                                            <h4>Email:</h4>
                                            <label>chhotukumarsow@gmail.com</label>
                                        </div>
                                    </div>
                                    <div className="contact-container">
                                        <p><FaPhone /></p>
                                        <div>
                                            <h4>Call:</h4>
                                            <label>+918210118348</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicname">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" placeholder="Message" style={{ height: '100px' }} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChhotuPortfolio
