import React from 'react'; //import React Component
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export function MajorDetail() {
    return (
        <div id='majorDetail'>
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">EXPLORE MAJORS</h1>
                    <div className="line"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}