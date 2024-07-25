import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSelection';
import ProjectComposition from './components/ProjectComposition';
import CustomerReviews from './components/CustomerReviews';
import OurWorks from './components/OurWorks';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectComposition />
      <CustomerReviews />
      <OurWorks />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
