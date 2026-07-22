import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Patient",
      content: "The care and attention I received here was exceptional. The doctors truly listen and provide comprehensive solutions for women's health issues.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Emily Chen",
      role: "Patient",
      content: "I finally found a clinic that understands PCOS. The holistic approach and personalized treatment plan have made a huge difference in my life.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      name: "Jessica Taylor",
      role: "Patient",
      content: "Booking an appointment was seamless, and the staff is incredibly welcoming. Highly recommend for any gynecological concerns.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 w-full max-w-[1400px] mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 md:gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-display font-semibold text-gray-900 mb-2 md:mb-4 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed max-w-md">
            Real stories from women who have experienced our dedicated care and transformative treatments.
          </p>
        </div>
        <button className="px-5 py-2 rounded-full border border-gray-200 text-gray-700 text-xs font-semibold hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors shrink-0">
          View All Reviews
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 rounded-[24px] p-5 md:p-6 relative group hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="absolute top-5 right-5 text-gray-200 group-hover:text-purple-100 transition-colors">
              <Quote className="w-8 h-8" />
            </div>
            
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed mb-6 relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[13px] font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-[11px] text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
