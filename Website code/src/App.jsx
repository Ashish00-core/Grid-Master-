import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisitingCard from './components/VisitingCard';
import Services from './components/Services';
import DesignSamples from './components/DesignSamples';
import EquipmentCatalog from './components/EquipmentCatalog';
import SolarCalculator from './components/SolarCalculator';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');
  const [isVisitingCardModalOpen, setIsVisitingCardModalOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const handleOpenBooking = (serviceName = '') => {
    setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingService('');
  };

  const handleOpenVisitingCardModal = () => {
    setIsVisitingCardModalOpen(true);
  };

  const handleCloseVisitingCardModal = () => {
    setIsVisitingCardModalOpen(false);
  };

  const handleAddToQuote = (item) => {
    if (selectedEquipment.some(e => e.id === item.id)) {
      setSelectedEquipment(selectedEquipment.filter(e => e.id !== item.id));
    } else {
      setSelectedEquipment([...selectedEquipment, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        onOpenVisitingCard={handleOpenVisitingCardModal}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onOpenVisitingCard={handleOpenVisitingCardModal}
        />

        {/* Head Engineer Visiting Card Section */}
        <VisitingCard />

        {/* Core Services (Home & Building) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Solar Designing Samples & CAD Portfolio */}
        <DesignSamples onOpenBooking={handleOpenBooking} />

        {/* Equipment Catalog & Transparent Prices */}
        <EquipmentCatalog 
          onAddToQuote={handleAddToQuote}
          selectedEquipment={selectedEquipment}
          onOpenBooking={handleOpenBooking}
        />

        {/* Solar Needs Calculator & System Engine */}
        <SolarCalculator onOpenBooking={handleOpenBooking} />

        {/* Employee List & Head Engineer GANDHAMANENI GOUTHAM & Ashish Kumar */}
        <Team 
          onOpenVisitingCard={handleOpenVisitingCardModal}
          onOpenBooking={handleOpenBooking}
        />

        {/* Customer Reviews & FAQs */}
        <Testimonials />

      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking}
        onOpenVisitingCard={handleOpenVisitingCardModal}
      />

      {/* Modal Dialogs */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={bookingService}
      />

      {isVisitingCardModalOpen && (
        <VisitingCard 
          isModal={true}
          onClose={handleCloseVisitingCardModal}
        />
      )}

    </div>
  );
}
