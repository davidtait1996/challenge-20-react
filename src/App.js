import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <div></div>;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>

  );
}

export default App;
