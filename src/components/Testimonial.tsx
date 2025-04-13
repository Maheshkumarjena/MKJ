"use client";

import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Working with you was an absolute pleasure! The attention to detail and creative solutions you brought to our project exceeded all expectations.",
      avatar: "/avatars/1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartUp Innovations",
      content: "Your technical expertise and problem-solving skills helped us overcome critical challenges. The deliverables were always on time and of exceptional quality.",
      avatar: "/avatars/2.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Creative Director",
      company: "DesignHub",
      content: "Your design sensibility and user-focused approach resulted in a product that our clients love. You understood our vision perfectly.",
      avatar: "/avatars/3.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Marketing Director",
      company: "Global Brands",
      content: "The campaign you developed increased our engagement by 300%. Your strategic thinking and execution were impeccable.",
      avatar: "/avatars/4.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<Testimonial[]>([]);

  // Duplicate testimonials for seamless looping
  useEffect(() => {
    setDuplicatedTestimonials([...testimonials, ...testimonials]);
  }, [testimonials]);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || duplicatedTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        if (newIndex >= testimonials.length) {
          // When we reach the end, instantly reset to 0 without animation
          if (trackRef.current) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = `translateX(0)`;
            // Force reflow
            trackRef.current.offsetHeight;
            trackRef.current.style.transition = 'transform 0.5s ease-in-out';
          }
          return 0;
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, duplicatedTestimonials.length, testimonials.length]);

  // Handle transform on index change
  useEffect(() => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.children[0]?.clientWidth || 0;
      trackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) {
        // If at start, jump to end (but show first duplicate)
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(-${testimonials.length * (trackRef.current.children[0]?.clientWidth || 0)}px)`;
          // Force reflow
          trackRef.current.offsetHeight;
          trackRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      if (prev >= testimonials.length - 1) {
        // If at end, jump to start (but show first duplicate)
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(0)`;
          // Force reflow
          trackRef.current.offsetHeight;
          trackRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section  className="py-16 bg-gray-50 dark:bg-gray-900 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What People Say
        </h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${duplicatedTestimonials.length * 100}%` }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="w-full px-4 flex-shrink-0"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex % testimonials.length === index ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}