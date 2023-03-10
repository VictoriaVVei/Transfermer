import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';


export function HomePage() {
    return (
        <div id="home">
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">TRANSFER TOOLS</h1>
                    <div className="line"></div>
                </div>

                <div className='homeintro'>
                    <h1>Transfer students are an important part of the UW Community.</h1>
                    <p>Whether you are a prospective applicant, in the process of applying, or a current transfer student,
                        this portal site will connect you to the tools and resources you need to be successful in your transfer process.</p>
                </div>

                <div className='hometool'>
                    <div className='toolmajor tool'>
                        <div className='forColor'></div>
                        <h1>EXPLORE MAJOR</h1>
                        <p>Browse all majors at the University of Washington with detail major descriptions, requirements, and outcome information</p>
                        <div className='button'>START <NavLink to="/converter"><span className="material-symbols-outlined">arrow_forward_ios</span></NavLink></div>
                    </div>
                    <div className='toolcompare tool'>
                        <div className='forColor'></div>
                        <h1>COMPARISON TOOL</h1>
                        <p>Compare majors at the University of Washington to better plan out your undergraduate journey</p>
                        <div className='button'>START <NavLink to="/converter"><span className="material-symbols-outlined">arrow_forward_ios</span></NavLink></div>
                    </div>
                    <div className='toolstatus tool'>
                        <div className='forColor'></div>
                        <h1>COMPLETION STATUS</h1>
                        <p>Track you progress towards transferring to the University of Washington when you get started</p>
                        <div className='button'>START <NavLink to="/converter"><span className="material-symbols-outlined">arrow_forward_ios</span></NavLink></div>
                    </div>
                    <div className='toolconverter tool'>
                        <div className='forColor'></div>
                        <h1>COURSE CONVERTER</h1>
                        <p>The course convertor allows you to input your current transcript to see what could be transfer over to UW and what courses are equivalent</p>
                        <div className='button'>START <NavLink to="/converter"><span className="material-symbols-outlined">arrow_forward_ios</span></NavLink></div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}