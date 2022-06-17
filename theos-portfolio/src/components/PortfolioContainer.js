import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}