import React from 'react'; //import React Component
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export function Converter() {
    return (
        <div id='converter'>
            <Navigation />
            <main>
                <div className="welcome_board">
                    <h1 className="welcome_word">COURSE CONVERTER</h1>
                    <div className="line"></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}