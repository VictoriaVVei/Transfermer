import React from 'react'; //import React Component
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { NavLink } from 'react-router-dom';

export function Major() {
    return (
        <div id="major">
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">EXPLORE MAJORS</h1>
                    <div className="line"></div>
                </div>

                <div className="introduction" style={{ marginBottom: "60px" }}>
                    <h1>Introduction</h1>
                    <p>
                        The explore majors tool is designed to assist potential transfer students
                        in exploring various majors they plan to apply for at three different campuses.
                        By utilizing this tool, students can explore UW majors by department, areas
                        of interest,  capacity, or search by keyword for what interests  you. With
                        over 180 majors at the UW, many paths can lead from a single interest. The
                        program that’s right for you might be one you haven’t considered (or even
                        heard of) yet.
                    </p>
                </div>
                <div className='choose_class'>
                    <form>
                        <div className='choose_class_search'>
                            <input type="text" name="search" placeholder="Search" />
                            <label htmlFor="search" className="material-symbols-outlined" aria-label="search">search</label>
                        </div>
                        <select>
                            <option>Department</option>
                            <option>Computer Science</option>
                            <option>Information School</option>
                            <option>HCDE</option>
                            <option>Arts</option>
                        </select>
                        <select>
                            <option>Interests area</option>
                            <option>Computer-related</option>
                            <option>Business</option>
                            <option>Art, humanity and design</option>
                            <option>Engineering</option>
                        </select>
                        <select>
                            <option>Capacity</option>
                            <option>Open</option>
                            <option>Minimum requirements</option>
                            <option>Capacity-constrained</option>
                        </select>
                        <div className='majorbutton'>All</div>
                    </form>
                </div>

                <div className='forGrid'>
                    <div className='depEtc'>
                        <form>
                            <select>
                                <option>College of Art and Science</option>
                            </select>
                            <select>
                                <option>College of Engineering</option>
                                <option>Chemical Engineering</option>
                                <option>Civil Engineering</option>
                                <option>Mechanical Engineering</option>
                            </select>
                            <select>
                                <option>Information School</option>
                            </select>
                            <select>
                                <option>Foster School of Business</option>
                            </select>
                        </form>
                    </div>

                    <div className='labeltips'>
                        <div className='forColor'>Key: Click for more details</div>
                        <div className='labeltips_content'>
                            <div><span class="material-symbols-outlined" style={{ color: "#B7A57A" }}>add</span>Open</div>
                            <div><span class="material-symbols-outlined" style={{ color: "#B7A57A" }}>remove</span>Minimum requirements</div>
                            <div><div className='triangle'></div><div>Capacity-constrained</div></div>
                            <div><div className='circle' style={{ backgroundColor: "#2B8B63" }}></div><div>Arts, humanities, and design</div></div>
                            <div><div className='circle' style={{ backgroundColor: "#0A55AD" }}></div><div>Business</div></div>
                            <div><div className='circle' style={{ backgroundColor: "#F08725" }}></div><div>Computing-related</div></div>
                            <div><div className='circle' style={{ backgroundColor: "#E7C065" }}></div><div>Engineering</div></div>
                            <div><div className='circle' style={{ backgroundColor: "#E971FC" }}></div><div>Health</div></div>
                        </div>
                    </div>
                </div>

                <div className="introduction" style={{ marginBottom: "60px" }}>
                    <h1>Major List</h1>
                    <div className='forInline'>
                        <div><div className='triangle' style={{ color: "#B7A57A" }}></div><div></div></div>
                        <div><div className='circle' style={{ backgroundColor: "#F08725" }}></div><div></div></div>
                        <div><div className='circle' style={{ backgroundColor: "#0A55AD" }}></div><div></div></div>
                        <div><div className='circle' style={{ backgroundColor: "#2B8B63" }}></div><div></div></div>
                        <h2>Informatics</h2>
                    </div>
                    <p>
                        Informatics is the study of people, information, and technology. Students are prepared to design, build,
                        manage, and secure information systems that make a difference in society, organizations, and individual
                        lives. The curriculum uses an experiential learning approach that emphasizes problem solving, group work,
                        research, writing, oral presentations, and technology. <NavLink to="/majorDetail"><span style={{ color: "#158FE8" }}>More information&gt;&gt;</span></NavLink>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}