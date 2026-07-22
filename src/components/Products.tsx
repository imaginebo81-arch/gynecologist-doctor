import { ArrowRight } from "lucide-react";

export default function Products({ onBookAppointment }: { onBookAppointment?: () => void }) {
  const services = [
    {
      title: "Period problems",
      desc: "Expert care for irregular, painful, or heavy menstrual cycles to improve your quality of life.",
      img: "https://i.pinimg.com/736x/cd/75/6b/cd756b9c6e68e055b7f8fed0d2ffbe3f.jpg"
    },
    {
      title: "PCOS / PCOD",
      desc: "Comprehensive management of hormonal imbalances and related symptoms for long-term health.",
      img: "https://i.pinimg.com/736x/44/1f/8c/441f8cb35585c0bb0101187187c03382.jpg"
    },
    {
      title: "Fibroids",
      desc: "Advanced diagnosis and personalized treatment options for uterine fibroids.",
      img: "https://i.pinimg.com/736x/0d/23/af/0d23af0e07ebf7c85f26b49ab7a2203d.jpg"
    },
    {
      title: "Ovarian cysts",
      desc: "Accurate diagnosis and minimally invasive care plans for various types of ovarian cysts.",
      img: "https://i.pinimg.com/736x/83/03/a1/8303a1bc7bb8bf6f44668bd3b1f1acfa.jpg"
    },
    {
      title: "Menopause",
      desc: "Support and treatments to manage transition symptoms and maintain wellness during menopause.",
      img: "https://i.pinimg.com/1200x/cb/e0/f5/cbe0f57167554dedf00b0177ca8d86ad.jpg"
    },
    {
      title: "Vaginal infections",
      desc: "Prompt and discreet expert diagnosis and care for all types of intimate infections.",
      img: "https://i.pinimg.com/736x/e3/ae/ba/e3aeba468aed129de7588ce6803f7501.jpg"
    }
  ];

  return (
    <div id="services" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16 bg-white">
      <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight mb-4 max-w-2xl leading-tight">
          Explore our specialized services
        </h2>
        <button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
          View All Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{service.title}</h3>
              <p className="text-gray-500 text-xs mb-4 flex-grow">{service.desc}</p>
              
              <div className="flex items-center gap-2">
                <button className="flex-1 px-3 py-2 rounded-full border border-gray-200 text-gray-700 text-[12px] font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all text-center">
                  Details
                </button>
                <button 
                  onClick={onBookAppointment}
                  className="flex-1 px-3 py-2 rounded-full bg-[#8B5CF6] text-white text-[12px] font-semibold hover:bg-[#7c4deb] transition-all shadow-md shadow-purple-500/20 text-center"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
