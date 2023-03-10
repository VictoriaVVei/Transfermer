import React, { useEffect, useRef, useState } from 'react'; //import React Component
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export function Status() {
    const pie1 = useRef(null);
    const pie2 = useRef(null);
    const pie3 = useRef(null);
    useEffect(() => {
        pie1.current.style.setProperty("--percentage", "25");
        pie1.current.style.setProperty("--color", "#B7A57A");
        pie2.current.style.setProperty("--percentage", "65");
        pie2.current.style.setProperty("--color", "#4b2e83");
        pie3.current.style.setProperty("--percentage", "100");
        pie3.current.style.setProperty("--color", "#F1EFFB");
    })

    const [ifclick, setif] = useState(false)
    const showpre = () => {
        if (!ifclick) {
            document.querySelector(".preq").classList.add("show")
            document.querySelector(".preq").classList.remove("notShow")
            setif(true)
        } else {
            document.querySelector(".preq").classList.add("notShow")
            document.querySelector(".preq").classList.remove("show")
            setif(false)
        }

    }

    return (
        <div id='status'>
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">COMPLETION STATUS</h1>
                    <div className="line"></div>
                </div>


                <div className="introduction">
                    <h1>Introduction</h1>
                    <p>
                        The tool for Completion Status is intended to aid potential students in verifying which of their
                        previous coursework will transfer to the University of Washington and satisfy the degree requirements
                        for their intended major. In essence, this tool delivers a straightforward and concise overview of a transfer
                        student's progress towards completing the application requirements for UW.
                    </p>
                </div>

                <div className="sstep">
                    <div className='sstep_content'>
                        <div className="step_logo material-symbols-outlined">person</div>
                        <div className="step_content">
                            <p>Login account</p>
                        </div>
                    </div>

                    <div className="sstep_content">
                        <div className="step_logo material-symbols-outlined">cloud_upload</div>
                        <div className="step_content">
                            <p>Upload coursework</p>
                        </div>
                    </div>

                    <div className="sstep_content">
                        <div className="step_logo material-symbols-outlined">menu_book</div>
                        <div className="step_content">
                            <p>Select majors</p>
                        </div>
                    </div>

                    <div className="sstep_content">
                        <div className="step_logo material-symbols-outlined">library_books</div>
                        <div className="step_content">
                            <p>Generate a report</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='title'>Check Completion Status</h1>
                    <div className='sforgrid'>
                        <div className='grid1'>
                            <div className='forColor' style={{ padding: "30px", height: "78px" }}>Hi Student132,</div>
                            <div className='student_choose_class'>
                                <div>
                                    <p>You have selected majors</p>
                                    <div className='class_choose'>Informatics<span className="material-symbols-outlined">close</span></div>
                                </div>
                                <div>
                                    <p>Change another major?</p>
                                    <div className='submit'>Select major</div>
                                </div>
                            </div>
                        </div>

                        <div className='grid2 ssforgrid'>
                            <h1>General Education Requirements Completion Overview</h1>
                            <div className='record'>
                                <div className='stitile'>College Academic Distribution Requirements (CADRs)</div>
                                <div className='sgrid'>
                                    <div>
                                        <div style={{ position: "relative" }}>
                                            <div className="pie animate first" ref={pie1}></div>
                                            <div className="pie animate second" ref={pie2}> 65%</div>
                                            <div className="pie animate base" ref={pie3}></div>
                                        </div>
                                    </div>
                                    <div className='charttips'>
                                        <h2>Completion Details</h2>
                                        <div><div className='rectan' style={{ backgroundColor: "#4b2e83" }}></div>English</div>
                                        <div><div className='rectan' style={{ backgroundColor: "#4b2e83" }}></div>Mathematics</div>
                                        <div><div className='rectan' style={{ backgroundColor: "#4b2e83" }}></div>Social Sciences</div>
                                        <div><div className='rectan' style={{ backgroundColor: "#4b2e83" }}></div>World language</div>
                                        <div><div className='rectan' style={{ backgroundColor: "#E2E2E2" }}></div>Fine, visual or performing arts</div>
                                        <div><div className='rectan' style={{ backgroundColor: "#E2E2E2" }}></div>Academic elective</div>
                                    </div>

                                    <div className='charttips2'>
                                        <div><div className='rectan' style={{ backgroundColor: "#4b2e83" }}></div>Completed</div>
                                        <div><div className='rectan' style={{ backgroundColor: "#E2E2E2" }}></div>Uncompleted</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='grid3 ssforgrid'>
                            <h1>General Education Requirements Completion Overview</h1>
                            <div className='record sperecord'>
                                <div className='stitile spestitile'><div>Informatics</div><span className="material-symbols-outlined">close</span></div>
                                <div>
                                    <div className="container">
                                        <div className="bar info">50%</div>
                                    </div>
                                    <div className="expand" onClick={showpre} style={{ cursor: "pointer" }}>
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>
                                    </div>
                                    <div className="notShow preq">
                                        <p><strong>The course you need to finish: </strong></p>
                                        <p>STAT 220, STAT 221 or STAT 311; Arry course with SSc (Social Sciences)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='grid4 ssforgrid'>
                            <h1>General Education Requirements Completion Overview</h1>
                            <div className='record sperecord'>
                                <div className='stitile spestitile'><div>Computer Sciences</div><span className="material-symbols-outlined">close</span></div>
                                <div>
                                    <div className="container">
                                        <div className="bar cs">30%</div>
                                    </div>
                                    <div></div>
                                    <div className="expand">
                                        <span className="material-symbols-outlined">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
}