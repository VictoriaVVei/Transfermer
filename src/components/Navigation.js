import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';

export function Navigation(props) {

    return (
        <nav>
            <div>
                <section>
                    <ul>
                        <li><NavLink to="/main"><span className={"material-icons"} >home</span></NavLink></li>
                        <li><NavLink to="/Project"></NavLink></li>
                        <li><NavLink to="/Experience"></NavLink></li>
                        <li><NavLink to="/CV"></NavLink></li>
                    </ul>
                </section>
            </div>

            <div>
                <section>
                    <ul>
                        <li><a href={"#Introduction"}></a></li>
                        <li><a href={"#Education"}></a></li>
                        <li><a href={"#Research_Interest"}></a></li>
                        <li><a href={"#Skill"}></a></li>
                        <li><a href={"#Latest_Project"}></a></li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}