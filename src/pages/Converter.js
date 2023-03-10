import React, { useRef } from 'react'; //import React Component
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export function Converter() {
    const tableRef = useRef("")
    const beginCompare = () => {
        tableRef.current.style.position = "relative"
        tableRef.current.style.top = "0"
        tableRef.current.style.left = "0"
    }

    return (
        <div id='converter'>
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">COURSE CONVERTER</h1>
                    <div className="line"></div>
                </div>


                <div className="introduction">
                    <h1>Introduction</h1>
                    <p>
                        The Course Converter tool is designed to help you find course equivalency between UW and your institution. By selecting your current institution
                        and the UW major you want to pursue, this tool will generate a form to provide a list of courses in your current institution that can meet UW’s
                        General Education Requirements or a UW major’s pre-requisite courses. This form only contains popular courses that come from students who have
                        successfully transferred credits to UW. To find out more course equivalency, please refer to University of Washington Equivalency Guide.
                    </p>
                </div>

                <div className='forconverter'>
                    <form>
                        <label>Select your current institution</label>
                        <select>
                            <option></option>
                        </select>
                        <label>Select your current institution</label>
                        <select>
                            <option></option>
                        </select>
                        <div className='submit' onClick={beginCompare}>Generate</div>
                    </form>
                </div>

                <div className="result" ref={tableRef}>
                    <h1>Your Course Equivalency Guide</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <td style={{ backgroundColor: "#4b2e83", textAlign: "center" }}>UW Course</td>
                                </th>
                                <th>
                                    <td style={{ backgroundColor: "#4b2e83" }}>Popular Equivalent Courses At Your Institution</td>
                                </th>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ backgroundColor: "#B7A57A", textAlign: "center" }}>GENERAL EDUCATION REQUIREMENTS</td>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ backgroundColor: "#B7A57A", textAlign: "center" }}>PREREQUISITE COURSES FOR Informatics MAJORS</td>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}