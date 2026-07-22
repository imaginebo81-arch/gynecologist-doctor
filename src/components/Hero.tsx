import { ArrowRight, Calendar, Star, ArrowUpRight, BarChart3, Activity } from "lucide-react";
import { motion } from "motion/react";

export default function Hero({ onScheduleAppointment }: { onScheduleAppointment?: () => void }) {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 bg-white relative">
      <div className="relative w-full h-[calc(100dvh-140px)] min-h-[400px] md:min-h-[500px] rounded-[32px] overflow-hidden shadow-sm">
        {/* Background Image - Dental patient */}
        <img 
          src="https://i.pinimg.com/1200x/36/26/89/36268912b7ce777e1826a248129c4442.jpg" 
          alt="Gynecology Care" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>

        {/* Main Content (Left) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 text-white max-w-lg z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full text-xs font-medium mb-4 md:mb-5"
          >
            <Star className="w-3.5 h-3.5 fill-white" />
            24/7 Service Available
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold leading-[1.1] tracking-tight mb-6"
          >
            Expert Gynecology Care <br className="hidden md:block" /> for Women's Health
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#services" className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-[#8B5CF6] transition-colors duration-300 text-sm font-medium">
              <div className="bg-white/20 p-1 rounded-full"><ArrowRight className="w-3.5 h-3.5" /></div>
              Explore Services
            </a>
            <button 
              onClick={onScheduleAppointment}
              className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#F3E8FF] hover:text-[#8B5CF6] transition-colors duration-300 text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              Schedule appointment
            </button>
          </motion.div>
        </div>

        {/* Floating Cards (Glassmorphism) */}
        
        {/* Top Right Insights Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.3 },
            x: { duration: 0.6, delay: 0.3 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
          }}
          className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white w-56 shadow-2xl hidden lg:block"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-white/80">Insights</span>
            <div className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
              <ArrowUpRight className="w-2.5 h-2.5" /> 20%
            </div>
          </div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" className="w-8 h-8 rounded-full object-cover border-2 border-white/30" alt="User" />
            <div>
              <div className="font-semibold text-xs">Junaki</div>
              <div className="text-[10px] text-white/70">32 y.o (Female)</div>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] text-white/70 mb-0.5">Monthly Report <span className="ml-1">Oct</span></div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-display font-semibold">90</span>
                <span className="text-xs text-white/70">mg/dL</span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-6">
              {[40, 70, 45, 90, 60, 80].map((h, i) => (
                <div key={i} className="w-1 bg-white rounded-full" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Left Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-2 pr-3 md:pr-4 flex items-center gap-2 md:gap-3 text-white"
        >
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-white object-cover" alt="Doctor 1" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-white object-cover" alt="Doctor 2" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-white object-cover" alt="Doctor 3" />
          </div>
          <div className="text-[10px] font-medium leading-tight max-w-[70px] md:max-w-[80px]">
            More than 2k+ Doctors
          </div>
          <div className="bg-white text-black p-1.5 rounded-full ml-1">
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </motion.div>
        
        {/* Bottom Right Card (Top Right on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-4 right-4 md:top-auto md:bottom-6 md:right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-1.5 px-2.5 md:px-3 flex items-center gap-1.5 md:gap-2 text-white shadow-lg"
        >
          <div className="flex -space-x-1.5">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-400/80 border border-white/50 flex items-center justify-center"><Activity className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" /></div>
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-400/80 border border-white/50 flex items-center justify-center"><Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-white fill-white" /></div>
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-400/80 border border-white/50 flex items-center justify-center"><BarChart3 className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" /></div>
          </div>
          <div className="text-[9px] md:text-[10px] font-medium border-l border-white/30 pl-2">
            Specialist Doctors
          </div>
        </motion.div>
      </div>
      
      {/* Subtext below hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 text-center md:text-left md:ml-12"
      >
        <p className="text-gray-500 font-medium text-xs md:text-sm max-w-xs leading-relaxed mx-auto md:mx-0">
          We are ready to serve you with pleasure and fast response
        </p>
      </motion.div>
    </div>
  );
}
