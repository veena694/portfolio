import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "John is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are impressive.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5
  },
  {
    id: 2,
    content: "Working with John was a game-changer for our company. He understood our vision perfectly and transformed it into a beautiful, functional website.",
    author: "Michael Thompson",
    position: "Marketing Director, InnovateCorp",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5
  },
  {
    id: 3,
    content: "John's technical expertise and creative approach helped us solve complex problems with elegant solutions. I highly recommend his services.",
    author: "Emily Rodriguez",
    position: "Product Manager, SoftSolutions",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    // Reset animation state after transition
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const autoplayInterval = 5000;

  useEffect(() => {
    // Auto-advance testimonials
    const interval = setInterval(nextTestimonial, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            What clients and colleagues have to say about working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-gray-700 text-lg italic mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          <p className="text-blue-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-4 bg-white shadow-md rounded-full p-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-4 bg-white shadow-md rounded-full p-2 text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                } focus:outline-none transition-colors`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;