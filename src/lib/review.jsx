import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/api/placeholder/64/64",
    text: "This product has completely transformed how our team works. The efficiency gains have been remarkable, and the support team is always there when we need them."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer",
    company: "InnovateLabs",
    image: "/api/placeholder/64/64",
    text: "I've tried many similar solutions, but this one stands out for its intuitive design and powerful features. It's become an essential part of our daily workflow."
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "GrowthWave",
    image: "/api/placeholder/64/64",
    text: "The analytics capabilities are outstanding. We've gained invaluable insights that have helped us make better decisions and drive real results."
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setDirection('right');
        handleNextTestimonial();
      }, 3000); // Change testimonial every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('right');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('left');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-6000"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our User Say</h2>
          <p className="text-lg text-gray-600">Discover why companies trust us for their needs</p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10 ">
            <div className="absolute -top-6 left-8 text-purple-500">
              <Quote size={48} />
            </div>
            
            <div 
              className={`flex flex-col items-center space-y-8 transition-all duration-500 ${
                isAnimating 
                  ? direction === 'right' 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
                  : 'translate-x-0 opacity-100'
              }`}
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mt-8">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-purple-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-purple-600' 
                    : 'w-2 bg-purple-200'
                }`}
              ></div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={handlePrevTestimonial}
              className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;