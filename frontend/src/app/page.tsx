"use client"
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';
import HospitalMap from '../components/HospitalMap';
import SpecialtySection from '../components/SpecialtySection';
import TestimonialsSection from '../components/TestimonialsSection';

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

