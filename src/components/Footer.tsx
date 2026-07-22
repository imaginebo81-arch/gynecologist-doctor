import { Heart, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 px-4 md:px-8 mt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-5">
              <div className="w-8 h-8 rounded-full bg-[#8B5CF6] flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-tight">FemCare</span>
            </div>
            <p className="text-gray-500 mb-5 text-sm leading-relaxed max-w-sm">
              Providing expert, compassionate gynecological care for women at every stage of life.
            </p>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 md:mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Our Doctors</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Services</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 md:mb-5">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Period Problems</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">PCOS / PCOD</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Fibroids</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Menopause</a></li>
              <li><a href="#" className="text-[13px] text-gray-500 hover:text-[#8B5CF6] transition-colors">Pregnancy Care</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 md:mb-5">Newsletter</h4>
            <p className="text-[13px] text-gray-500 mb-3">
              Subscribe to our newsletter for the latest health tips and clinic updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all bg-white"
              />
              <button className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold hover:bg-black transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © 2026 FemCare. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
