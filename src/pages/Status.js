import React, { useEffect, useRef } from 'react'; //import React Component
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
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div className='grid3 ssforgrid'>
                            <h1>General Education Requirements Completion Overview</h1>
                            <div className='record sperecord'>
                                <div className='stitile'><div>Informatics</div><span className="material-symbols-outlined">close</span></div>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div className='grid4 ssforgrid'>
                            <h1>General Education Requirements Completion Overview</h1>
                            <div className='record sperecord'>
                                <div className='stitile'><div>Computer Sciences</div><span className="material-symbols-outlined">close</span></div>
                                <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
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