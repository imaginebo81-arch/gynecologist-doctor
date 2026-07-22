import React, { useState } from "react";
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
  ];

  // Calendar logic
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">
                {step === 1 && "Select Date & Time"}
                {step === 2 && "Your Details"}
                {step === 3 && "Appointment Confirmed"}
              </h2>
              <button 
                onClick={handleClose}
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-[#8B5CF6]" />
                      {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h3>
                    <div className="flex items-center gap-2">
                      <button onClick={handlePrevMonth} className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
                      <button onClick={handleNextMonth} className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 md:gap-2 text-center mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                      <div key={day} className="text-xs font-semibold text-gray-400 py-2">{day}</div>
                    ))}
                    {blanks.map(blank => (
                      <div key={`blank-${blank}`} className="p-2" />
                    ))}
                    {days.map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`p-2 w-10 h-10 mx-auto flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                          selectedDate === day 
                            ? 'bg-[#8B5CF6] text-white shadow-md shadow-purple-500/30' 
                            : 'text-gray-700 hover:bg-purple-50 hover:text-[#8B5CF6]'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-[#8B5CF6]" />
                      Available Times
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-[#8B5CF6] text-white border-transparent shadow-md shadow-purple-500/30'
                              : 'bg-white border border-gray-200 text-gray-600 hover:border-[#8B5CF6] hover:text-[#8B5CF6]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setStep(2)}
                      className={`px-8 py-3 rounded-full font-semibold transition-all ${
                        selectedDate && selectedTime
                          ? 'bg-[#8B5CF6] text-white hover:bg-[#7c4deb] shadow-lg shadow-purple-500/25'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div className="bg-purple-50 rounded-2xl p-4 mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Selected Schedule</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {currentMonth.toLocaleString('default', { month: 'long' })} {selectedDate}, {currentMonth.getFullYear()} at {selectedTime}
                      </p>
                    </div>
                    <button onClick={() => setStep(1)} className="text-xs font-semibold text-[#8B5CF6] hover:text-[#7c4deb]">
                      Change
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all text-sm" placeholder="Jane Doe" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input type="tel" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all text-sm" placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input type="email" required className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all text-sm" placeholder="jane@example.com" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                      <textarea rows={3} className="block w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent outline-none transition-all text-sm resize-none" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
                    </div>

                    <div className="pt-4 flex justify-end gap-3">
                      <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-full text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                        Back
                      </button>
                      <button type="submit" className="px-8 py-3 rounded-full text-sm font-semibold bg-[#8B5CF6] text-white hover:bg-[#7c4deb] shadow-lg shadow-purple-500/25 transition-all">
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                  <p className="text-gray-500 max-w-sm mb-8">
                    Your appointment request for <strong>{currentMonth.toLocaleString('default', { month: 'long' })} {selectedDate}</strong> at <strong>{selectedTime}</strong> has been received. Our team will contact you shortly to confirm.
                  </p>
                  <button onClick={handleClose} className="px-8 py-3 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-black transition-colors w-full sm:w-auto">
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
