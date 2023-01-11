import React from 'react'; //import React Component
import { Navigation } from './Navigation.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { MainContent } from './MainContent.js'

export function MainPage(props) {


  return (
    <div>
      <Navigation />
      <Header />
      {/* <MainContent /> */}
      <Footer />
    </div>
  );
}