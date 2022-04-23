import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        // le but ici, à la manière de Angular, c'est de persister notre navbar et notre footer sur chaque pages et components grâce au Layout 
        // Sinon, nous aurions du appeler nos navbar et footer dans chaque pages et components à la main, ce qui va les faire recharger et nous faire du temps 
        // à implémenter et à charger côté client.
        <div className='content'>
            <Navbar />
            {children}
            <Footer />
            
        </div>
    );
};

export default Layout;