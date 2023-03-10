import React, { useRef } from 'react'; //import React Component
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export function Comparison() {
    const choose_school = () => {

    }

    const tableRef = useRef("")
    const beginCompare = () => {
        tableRef.current.style.position = "relative"
        tableRef.current.style.top = "0"
        tableRef.current.style.left = "0"
    }
    return (
        <div id="comparison">
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">COMPARISON TOOL</h1>
                    <div className="line"></div>
                </div>

                <div className="introduction">
                    <h1>Introduction</h1>
                    <p>
                        The comparison tool is designed to assist potential transfer students
                        in comparing various majors they plan to apply for at three different
                        campuses. By utilizing this tool, students can gain a general
                        understanding of majors, admission requirements, and outcomes, which
                        can aid them in making an informed decision about their academic
                        future.
                    </p>
                </div>

                <div className="step">
                    <div className="step1 step_setting">
                        <div className="step_logo material-symbols-outlined">school</div>
                        <div className="step_content">
                            <p>01</p>
                            <p>Select campus</p>
                        </div>
                    </div>

                    <div className="step2 step_setting">
                        <div className="step_logo material-symbols-outlined">dataset</div>
                        <div className="step_content">
                            <p>02</p>
                            <p>Add major</p>
                        </div>
                    </div>

                    <div className="step3 step_setting">
                        <div className="step_logo material-symbols-outlined">menu_book</div>
                        <div className="step_content">
                            <p>03</p>
                            <p>Get result</p>
                        </div>
                    </div>
                </div>

                <div className="search_filter">
                    <form>
                        <div className="filter">
                            <label className="container2"
                            ><input type="radio" checked="checked" name="radio" onChange={choose_school} />All Campus
                            </label>
                            <label className="container2"
                            ><input type="radio" name="radio" onChange={choose_school} />Seattle
                            </label>
                            <label className="container2"
                            ><input type="radio" name="radio" onChange={choose_school} />Bothell
                            </label>
                            <label className="container2 clear"
                            ><input type="radio" name="radio" onChange={choose_school} />Tacoma
                            </label>
                        </div>

                        <div className="search">
                            <input type="text" name="search" placeholder="Search" />
                            <label htmlFor="search" className="search_icon" aria-label="search">Add to compare</label>
                        </div>
                    </form>

                    <div className="show_choose">
                        <div>
                            <p>Add up to 3 majors:</p>
                            <ul>
                                <li>
                                    Informatics<span className="material-symbols-outlined">close</span>
                                </li>
                                <li>
                                    Computer Science<span className="material-symbols-outlined">close</span>
                                </li>
                                <li className="clear">
                                    HCDE<span className="material-symbols-outlined">close</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div htmlFor="search" className="compare" aria-label="search" onClick={beginCompare}>Compare</div>
                </div>

                <div className="result" ref={tableRef}>
                    <h1>Comparison Result</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <img
                                        id="uw_img"
                                        src="https://cdn.glitch.global/28a221e8-d870-400e-b7e7-80c96af94aa4/university.png?v=1677134056018"
                                        alt="logo"
                                    />
                                </th>
                                <th>
                                    <img
                                        id="info_img"
                                        src="https://cdn.glitch.global/28a221e8-d870-400e-b7e7-80c96af94aa4/info.png?v=1677134053202"
                                        alt="logo"
                                    />
                                </th>
                                <th>
                                    <img
                                        id="cs_img"
                                        src="https://cdn.glitch.global/28a221e8-d870-400e-b7e7-80c96af94aa4/cs.png?v=1677134049533"
                                        alt="logo"
                                    />
                                </th>
                                <th>
                                    <img
                                        id="hcde_img"
                                        src="https://cdn.glitch.global/28a221e8-d870-400e-b7e7-80c96af94aa4/hcde.png?v=1677134050745"
                                        alt="logo"
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <p className="main_title">University of Washington</p>
                                </th>
                                <th>
                                    <p>Informatics</p>
                                    <button><span className="material-icons">favorite</span>Save</button>
                                </th>
                                <th>
                                    <p>Computer Science</p>
                                    <button><span className="material-icons">favorite</span>Save</button>
                                </th>
                                <th>
                                    <p>HCDE</p>
                                    <button><span className="material-icons">favorite</span>Save</button>
                                </th>
                            </tr>
                            <tr>
                                <td>Major Overview</td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="main_title" style={{ backgroundColor: "#FAF8FF" }}>Admissions</td>
                            </tr>
                            <tr>
                                <td>Application Deadline</td>
                            </tr>
                            <tr>
                                <td>Acceptance Rate</td>
                            </tr>
                            <tr>
                                <td>Types of Majors</td>
                            </tr>
                            <tr>
                                <td>GPA</td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="main_title" style={{ backgroundColor: "#FAF8FF" }}>Prerequisites</td>
                            </tr>
                            <tr>
                                <td>Prerequisite Courses</td>
                            </tr>
                            <tr>
                                <td>Transfer GPA</td>
                            </tr>
                            <tr>
                                <td colSpan="4" className="main_title" style={{ backgroundColor: "#FAF8FF" }}>Outcomes</td>
                            </tr>
                            <tr>
                                <td>Graduation Rate</td>
                            </tr>
                            <tr>
                                <td>Related careers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}