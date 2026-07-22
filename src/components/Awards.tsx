import { ArrowUpRight, Play } from "lucide-react";

export default function Awards() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 bg-white">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 md:gap-6">
        <h2 className="text-2xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight max-w-sm leading-tight">
          Our awards & recognition
        </h2>
        <p className="text-gray-500 font-medium text-xs md:text-sm max-w-[320px] leading-relaxed">
          We are proud of the awards that highlight our contributions to the fields of gynecology and women's health.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        
        {/* Image Card (Left) */}
        <div className="w-full lg:w-1/2 relative rounded-[32px] overflow-hidden aspect-square lg:aspect-[4/5] shadow-sm">
          <img 
            src="https://i.pinimg.com/736x/0c/40/b9/0c40b9ac64a7179919c6bd5e64d983af.jpg" 
            alt="Awards and Recognition" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Bottom Left Learn More */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg cursor-pointer hover:bg-white transition-colors">
            <span className="text-[11px] font-bold text-gray-800">Learn More</span>
            <div className="bg-gray-100 rounded-full p-1 border border-gray-200">
               <ArrowUpRight className="w-3 h-3 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Awards List (Right) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3">
          
          {/* Active Purple Card */}
          <div className="bg-[#8B5CF6] text-white rounded-3xl p-5 flex items-center justify-between group cursor-pointer hover:bg-[#7c4deb] transition-colors shadow-lg shadow-purple-500/20">
            <div>
              <h3 className="text-lg font-medium mb-1">Excellence in Women's Health</h3>
              <p className="text-purple-100 text-[11px] md:text-xs max-w-[280px] leading-relaxed">
                Recognizing our dedication to comprehensive gynecological care.
              </p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-5 h-5 text-[#8B5CF6]" />
            </div>
          </div>

          {/* White Card 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 flex items-center justify-between group cursor-pointer hover:border-gray-200 hover:shadow-sm transition-all">
            <h3 className="text-[15px] md:text-base font-medium text-gray-800">Medical Medal of Excellentia</h3>
            <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gray-50 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* White Card 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 flex items-center justify-between group cursor-pointer hover:border-gray-200 hover:shadow-sm transition-all">
            <h3 className="text-[15px] md:text-base font-medium text-gray-800">Maternal Health Innovator</h3>
            <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gray-50 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-gray-600" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
