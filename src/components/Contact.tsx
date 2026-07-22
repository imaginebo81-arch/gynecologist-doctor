import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 px-4 md:px-8 w-full max-w-[1400px] mx-auto bg-white">
      <div className="bg-[#8B5CF6] rounded-[32px] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side - Info */}
          <div className="w-full lg:w-5/12 p-6 lg:p-10 text-white flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-3">
              Get in Touch
            </h2>
            <p className="text-purple-100 mb-8 max-w-md text-sm leading-relaxed">
              We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Our Location</h4>
                  <p className="text-purple-100 text-xs md:text-sm">123 Health Avenue, Medical District<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Phone Number</h4>
                  <p className="text-purple-100 text-xs md:text-sm">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">Email Address</h4>
                  <p className="text-purple-100 text-xs md:text-sm">contact@womenshealth.com<br />support@womenshealth.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div className="w-full lg:w-7/12 bg-white m-1.5 lg:m-2 rounded-[24px] p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5">Send us a Message</h3>
            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">First Name</label>
                  <input type="text" className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Phone</label>
                  <input type="tel" className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full py-3 mt-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-black transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
