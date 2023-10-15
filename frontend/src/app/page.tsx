"use client"

import HeaderHome from '../components/HeaderHome';
import CTAButton from '../components/CTAButton';
import SpecialtySection from '../components/SpecialtySection';
import TestimonialsSection from '../components/TestimonialsSection';
import HospitalMap from '../components/HospitalMap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <CTAButton />
      <SpecialtySection />
      <TestimonialsSection />
      <HospitalMap />
      <Footer />
    </div>
  );
};

export default Home;

