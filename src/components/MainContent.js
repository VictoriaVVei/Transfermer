import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';

export function MainContent(props) {

    return (
        <main>
            <div className={"add-card"}>
                <NavLink to="/CreateActivity"><button><span className={"material-icons"}>add</span></button></NavLink>
            </div>
        </main>
    )
}