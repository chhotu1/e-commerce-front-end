import React, { useState } from 'react'
import {
    FaChevronRight
} from 'react-icons/fa';
import Sidebar from '../../Components/portfolio/sidebar';
import chhotu from '../../Components/portfolio/chhotu.jpg'
const ChhotuPortfolio = () => {

    const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
        setToggled(value)
    }

    return (
        <div className={`admin-app ${toggled ? 'toggled' : ''}`}>
            <Sidebar handleToggleSidebar={handleToggleSidebar} toggled={toggled} />
            <div className='portfolio'>
                <div className='p-3'>
                    <h3>About</h3>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
                    </p>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={chhotu} alt="" style={{ width: '100%', height: 350 }} />
                        </div>
                        <div className='col-md-8'>
                            <h1>Web developer</h1>
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
                <div className='p-3'>
                    <div class="row skills-content">
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                            <div class="progress">
                                <span class="skill">HTML <i class="val">100%</i>
                                </span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChhotuPortfolio
