import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white flex flex-col">
      <div className="max-w-[1400px] mx-auto overflow-hidden bg-white w-full">
        <Navbar />
        <Hero onScheduleAppointment={() => setIsAppointmentModalOpen(true)} />
        <Products onBookAppointment={() => setIsAppointmentModalOpen(true)} />
        <Awards />
        <Testimonials />
        <Contact />
      </div>
      
      <Footer />
      
      <AppointmentModal 
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </div>
  );
}

