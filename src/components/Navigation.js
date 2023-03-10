import React, { useRef, useState } from 'react'; //import React Component
import { NavLink } from 'react-router-dom';

export function Navigation() {
    const [emailL, setemailL] = useState("");
    const [passwordL, setpasswordL] = useState("");
    const [email, setemail] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [current_school, setcurrent_school] = useState("");
    const [current_school_year, setcurrent_school_year] = useState("");
    const [transfer_time, settransfer_time] = useState("");
    const [transcript, settranscript] = useState("");
    const fileRef = useRef("")
    const handleInputChange = (e) => {
        let { id, value } = e.target
        if (id === "emailL") {
            setemailL(value)
        }
        if (id === "passwordL") {
            setpasswordL(value)
        }
        if (id === "email") {
            setemail(value)
        }
        if (id === "userName") {
            setuserName(value)
        }
        if (id === "password") {
            setpassword(value)
        }
        if (id === "password2") {
            setpassword2(value)
        }
        if (id === "current_school") {
            setcurrent_school(value)
        }
        if (id === "current_school_year") {
            setcurrent_school_year(value)
        }
        if (id === "transfer_time") {
            settransfer_time(value)
        }
        if (id === "upload") {
            settranscript(fileRef.files)
            var divsToRemove = document.querySelectorAll(".file_tips");
            if (divsToRemove.length > 0) {
                for (var i = 0; i < divsToRemove.length; i++) {
                    divsToRemove[i].parentNode.removeChild(divsToRemove[i]);
                }
            }
            let filename = fileRef.current.value.split('\\')[2]
            const file_tips = document.createElement("div");
            var text = document.createTextNode(filename);
            file_tips.appendChild(text);
            file_tips.classList.add("file_tips");
            let uploadbutton = document.querySelector(".uploadbutton")
            uploadbutton.after(file_tips);
        }
    }

    const signupRef = useRef("")
    const loginRef = useRef("")
    const signupcontentRef = useRef("")
    const logincontentRef = useRef("")
    const checkAccountStatus = () => {
        logincontentRef.current.style.top = "50%"
        loginRef.current.style.top = "0"
        loginRef.current.style.bottom = "0"
        signupRef.current.style.top = "-5000px"
        signupRef.current.style.bottom = "auto"
        signupcontentRef.current.style.top = "-5000px"
    }

    const close = (e) => {
        loginRef.current.style.top = "-5000px"
        loginRef.current.style.bottom = "auto"
        logincontentRef.current.style.top = "-5000px"
        signupRef.current.style.top = "-5000px"
        signupRef.current.style.bottom = "auto"
        signupcontentRef.current.style.top = "-5000px"
    }

    const goSignin = () => {
        loginRef.current.style.top = "-5000px"
        loginRef.current.style.bottom = "auto"
        logincontentRef.current.style.top = "-5000px"
        signupcontentRef.current.style.top = "50%"
        signupRef.current.style.top = "0"
        signupRef.current.style.bottom = "0"
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <div className="logo_img">
                        <img
                            id="nav_logo"
                            src="https://cdn.glitch.global/28a221e8-d870-400e-b7e7-80c96af94aa4/logo.png?v=1677105528583"
                            alt="logo"
                        />
                    </div>

                    <div>
                        <div className="profile_avatar material-symbols-outlined" onClick={checkAccountStatus}>
                            account_circle
                        </div>
                        <div className="profile_dropdown" onClick={checkAccountStatus}></div>
                    </div>
                </div>
                <div className="menu">
                    <ul className="breadcrumb">
                        <li><NavLink to="/main">HOMEPAGE</NavLink></li>
                        <li><NavLink to="/major">EXPLORE MAJORS</NavLink></li>
                        <li><NavLink to="/comparison">COMPARISON TOOL</NavLink></li>
                        <li><NavLink to="/status">COMPLETION STATUS</NavLink></li>
                        <li><NavLink to="/converter">COURSE CONVERTER</NavLink></li>
                    </ul>
                </div>

                <div className='login'>
                    <div className="blocker" ref={loginRef} onClick={(e) => close(e)}></div>
                    <div className='login_content' ref={logincontentRef}>
                        <h1>Log in to your account</h1>
                        <form>
                            <label htmlFor="email">Email: </label>
                            <input
                                type="text"
                                id="emailL"
                                placeholder="Email"
                                onChange={(e) => handleInputChange(e)}
                                value={emailL}
                            />
                            <br />
                            <label htmlFor="Password">Password: </label>
                            <input
                                type="text"
                                id="passwordL"
                                placeholder="Password"
                                onChange={(e) => handleInputChange(e)}
                                value={passwordL}
                            />
                            <div className='submit'>Login</div>
                            <div className='switch' onClick={goSignin}>Sign up for an account</div>
                        </form>
                    </div>
                </div>

                <div className='signup'>
                    <div className="blocker" ref={signupRef} onClick={(e) => close(e)}></div>
                    <div className='signup_content' ref={signupcontentRef}>
                        <h1>Sign up for an account</h1>
                        <form>
                            <label htmlFor="email"></label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Email"
                                onChange={(e) => handleInputChange(e)}
                                value={email}
                            />
                            <hr />
                            <label htmlFor="userName"></label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="Write your User Name"
                                onChange={(e) => handleInputChange(e)}
                                value={userName}
                            />
                            <hr />
                            <label htmlFor="Password"></label>
                            <input
                                type="text"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => handleInputChange(e)}
                                value={password}
                            />
                            <hr />
                            <label htmlFor="password2"></label>
                            <input
                                type="text"
                                id="password2"
                                placeholder="Confirm Password"
                                onChange={(e) => handleInputChange(e)}
                                value={password2}
                            />
                            <hr />
                            <label htmlFor="current_school"></label>
                            <input
                                id="current_school"
                                type="text"
                                placeholder="What is your current school?"
                                onChange={(e) => handleInputChange(e)}
                                value={current_school}
                            />
                            <hr />
                            <label htmlFor="current_school_year"></label>
                            <input
                                type="text"
                                id="current_school_year"
                                placeholder="What is your current school year?"
                                onChange={(e) => handleInputChange(e)}
                                value={current_school_year}
                            />
                            <hr />
                            <label htmlFor="transfer_time"></label>
                            <input
                                type="text"
                                id="transfer_time"
                                placeholder="When do you plan to transfer?"
                                onChange={(e) => handleInputChange(e)}
                                value={transfer_time}
                            />
                            <hr />
                            <div className="transcript">
                                <div className="button-wrap">
                                    <label className="uploadbutton" htmlFor="upload">Upload your current transcript</label>
                                    <input
                                        type="file"
                                        id="upload"
                                        onChange={(e) => handleInputChange(e)}
                                        ref={fileRef} />
                                </div>
                            </div>
                            <div className='submit'>Sign up</div>
                            <div className='switch' onClick={checkAccountStatus}>Back to sign in</div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}