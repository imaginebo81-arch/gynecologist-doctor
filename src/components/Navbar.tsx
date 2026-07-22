import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-3 px-4 md:px-8 w-full max-w-[1400px] mx-auto bg-white relative z-50">
      {/* Left Links */}
      <div className="hidden md:flex items-center gap-5 text-[13px] font-medium text-gray-600">
        <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-black font-semibold">
          <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
          Home
        </div>
        <a href="#" className="hover:text-black transition-colors">Contribution</a>
        <a href="#" className="hover:text-black transition-colors">Our Mission</a>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 font-display font-bold text-base md:text-lg tracking-tight cursor-pointer absolute left-1/2 -translate-x-1/2">
        <div className="text-[#8B5CF6]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.5 8.5L22 12L15.5 15.5L12 22L8.5 15.5L2 12L8.5 8.5L12 2Z" />
          </svg>
        </div>
        IBNESINA
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-1.5 text-gray-600 hover:bg-gray-50 rounded-full transition-colors z-50 relative"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex flex-col gap-2 md:hidden"
          >
            <a href="#" className="px-3 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium transition-colors">Home</a>
            <a href="#" className="px-3 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium transition-colors">Contribution</a>
            <a href="#" className="px-3 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium transition-colors">Our Mission</a>
            <div className="h-px bg-gray-100 my-1"></div>
            <a href="#" className="px-3 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium transition-colors">Services</a>
            <a href="#" className="px-3 py-2 text-sm hover:bg-gray-50 rounded-lg font-medium transition-colors">Projects</a>
            <div className="h-px bg-gray-100 my-1"></div>
            <button className="bg-[#8B5CF6] text-white px-4 py-2.5 rounded-full hover:bg-[#7c4deb] transition-all text-sm font-semibold w-full">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Links */}
      <div className="hidden md:flex items-center gap-5 text-[13px] font-medium text-gray-600">
        
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors bg-gray-50 px-3 py-1.5 rounded-full">
            Services <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {/* Dropdown Menu */}
          <div 
            className={`absolute top-full right-0 mt-2 w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 p-3 grid grid-cols-2 gap-2 transition-all duration-200 ${
              isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
            }`}
          >
            {/* Service Item 1 */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img src="https://i.pinimg.com/736x/cd/75/6b/cd756b9c6e68e055b7f8fed0d2ffbe3f.jpg" alt="Period problems" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-semibold text-[13px] text-gray-900 mb-0.5">Period problems</div>
                <div className="text-[10px] text-gray-500">Irregular or painful cycles</div>
              </div>
            </div>
            
            {/* Service Item 2 */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img src="https://i.pinimg.com/736x/44/1f/8c/441f8cb35585c0bb0101187187c03382.jpg" alt="PCOS/PCOD" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-semibold text-[13px] text-gray-900 mb-0.5">PCOS / PCOD</div>
                <div className="text-[10px] text-gray-500">Hormonal imbalance care</div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img src="https://i.pinimg.com/736x/0d/23/af/0d23af0e07ebf7c85f26b49ab7a2203d.jpg" alt="Fibroids" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-semibold text-[13px] text-gray-900 mb-0.5">Fibroids</div>
                <div className="text-[10px] text-gray-500">Non-cancerous growths</div>
              </div>
            </div>

            {/* Service Item 4 */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img src="https://i.pinimg.com/736x/83/03/a1/8303a1bc7bb8bf6f44668bd3b1f1acfa.jpg" alt="Ovarian cysts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-semibold text-[13px] text-gray-900 mb-0.5">Ovarian cysts</div>
                <div className="text-[10px] text-gray-500">Diagnosis & treatment</div>
              </div>
            </div>

            {/* Service Item 5 */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img src="https://i.pinimg.com/1200x/cb/e0/f5/cbe0f57167554dedf00b0177ca8d86ad.jpg" alt="Menopause" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-semibold text-[13px] text-gray-900 mb-0.5">Menopause</div>
                <div className="text-[10px] text-gray-500">Transition management</div>
              </div>
            </div>

            {/* Service Item 6 */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                <img src="https://i.pinimg.com/736x/e3/ae/ba/e3aeba468aed129de7588ce6803f7501.jpg" alt="Vaginal infections" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="font-semibold text-[13px] text-gray-900 mb-0.5">Vaginal infections</div>
                <div className="text-[10px] text-gray-500">Expert diagnosis & care</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors bg-gray-50 px-3 py-1.5 rounded-full">
          Projects <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </div>
        <button className="bg-[#8B5CF6] text-white px-5 py-2 rounded-full hover:bg-[#7c4deb] transition-all shadow-md shadow-purple-500/20 text-xs font-semibold">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
