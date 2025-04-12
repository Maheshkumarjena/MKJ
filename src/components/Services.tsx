'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
    title: string;
    description: string;
    icon: string;
    color: string;
    price: string;
    features: string[];
    timeframe?: string;
    shadowColor: string;
}

const services: Service[] = [
    {
        title: "Landing Pages",
        description: "Skyrocket your conversions with a stunning landing page!",
        icon: "📄",
        color: "from-blue-500 to-cyan-400",
        price: "From ₹1000",
        features: ["Responsive design", "Lead capture forms", "Fast loading", "SEO optimized"],
        timeframe: "7-10 days",
        shadowColor: "shadow-blue-500/30"
    },
    {
        title: "Portfolio",
        description: "Showcase your brilliance with an elegant portfolio!",
        icon: "🎨",
        color: "from-purple-500 to-pink-500",
        price: "From ₹1500",
        features: ["Custom design", "Image galleries", "Project descriptions", "Contact form"],
        timeframe: "10-14 days",
        shadowColor: "shadow-purple-500/30"
    },
    {
        title: "E-Commerce",
        description: "Turn clicks into customers with a powerful online store!",
        icon: "🛒",
        color: "from-green-500 to-teal-400",
        price: "From ₹15000",
        features: ["Product catalog", "Shopping cart", "Payment gateway", "Order management"],
        timeframe: "4-6 weeks",
        shadowColor: "shadow-green-500/30"
    },
    {
        title: "Business Site",
        description: "Establish your brand's digital presence!",
        icon: "🏢",
        color: "from-amber-500 to-orange-500",
        price: "From ₹8000",
        features: ["Custom design", "Company info", "Services pages", "Contact form"],
        timeframe: "2-3 weeks",
        shadowColor: "shadow-amber-500/30"
    },
    {
        title: "AI Integration",
        description: "Automate and innovate with cutting-edge AI solutions!",
        icon: "🤖",
        color: "from-red-500 to-pink-500",
        price: "From ₹12000",
        features: ["Chatbot development", "Automation workflows", "Data analysis"],
        timeframe: "3-4 weeks",
        shadowColor: "shadow-red-500/30"
    },
    // {
    //     title: "App Dev",
    //     description: "Reach your audience on the go with a seamless mobile app!",
    //     icon: "📱",
    //     color: "from-indigo-500 to-blue-500",
    //     price: "From ₹25000",
    //     features: ["Cross-platform development", "UI/UX design", "Backend integration"],
    //     timeframe: "6-8 weeks",
    //     shadowColor: "shadow-indigo-500/30"
    // },
    {
        title: "Maintenance",
        description: "Keep your digital assets running smoothly!",
        icon: "🔧",
        color: "from-gray-600 to-gray-400",
        price: "From ₹2000/mo",
        features: ["Regular updates", "Security monitoring", "Technical support"],
        timeframe: "Ongoing",
        shadowColor: "shadow-gray-500/30"
    },
    // {
    //     title: "UI/UX Design",
    //     description: "Craft intuitive and beautiful interfaces!",
    //     icon: "✨",
    //     color: "from-violet-500 to-purple-500",
    //     price: "From ₹5000",
    //     features: ["Wireframing", "Prototyping", "User testing", "Visual design"],
    //     timeframe: "2-3 weeks",
    //     shadowColor: "shadow-violet-500/30"
    // }
];

const ServicesSection: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCardClick = (index: number) => {
        if (isMobile) {
            setExpandedCard(expandedCard === index ? null : index);
        }
    };

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-blue-500 mb-2"
                >
                    My Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-300"
                >
                    Professional solutions at competitive prices
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="relative">
                        {/* Desktop Hover Card */}
                        {!isMobile && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: `0 10px 25px -5px ${service.shadowColor.replace('/30', '/50')}`
                                }}
                                onMouseEnter={() => setExpandedCard(index)}
                                onMouseLeave={() => setExpandedCard(null)}
                                className={`bg-transparent backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all border border-white/10 ${
                                    expandedCard === index ? 'absolute z-50 w-full h-auto min-h-[160px]' : 'h-40'
                                } ${service.shadowColor} hover:${service.shadowColor.replace('/30', '/50')}`}
                            >
                                <ServiceCardContent 
                                    service={service} 
                                    isExpanded={expandedCard === index}
                                    isMobile={isMobile}
                                />
                            </motion.div>
                        )}

                        {/* Mobile Click Card */}
                        {isMobile && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10
                                }}
                                onClick={() => handleCardClick(index)}
                                className={`bg-transparent backdrop-blur-sm rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all border border-white/10 ${
                                    expandedCard === index ? 'h-auto' : 'h-40'
                                } ${service.shadowColor}`}
                                whileTap={{ scale: 0.98 }}
                            >
                                <ServiceCardContent 
                                    service={service} 
                                    isExpanded={expandedCard === index}
                                    isMobile={isMobile}
                                />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-sm text-yellow-200 mt-6"
            >
                {isMobile ? 'Tap' : 'Hover over'} any service for details • Prices are starting points
            </motion.p>
        </section>
    );
};

const ServiceCardContent: React.FC<{ 
    service: Service; 
    isExpanded: boolean; 
    isMobile: boolean 
}> = ({ service, isExpanded, isMobile }) => {
    return (
        <div className={`h-full p-4 flex flex-col ${isExpanded ? 'justify-start' : 'justify-between'}`}>
            <div className="flex items-start justify-between">
                <motion.span 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-3xl"
                >
                    {service.icon}
                </motion.span>
                <span className={`font-bold bg-gradient-to-r ${service.color} text-gray-300 bg-clip-text`}>
                    {service.price}
                </span>
            </div>

            <div>
                <motion.h3 
                    whileHover={{ x: 5 }}
                    className="font-bold text-gray-100 mt-2"
                >
                    {service.title}
                </motion.h3>
                <p className={`text-gray-300 ${isMobile && !isExpanded ? 'truncate' : ''}`}>
                    {service.description}
                </p>
            </div>

            <AnimatePresence>
                {(isExpanded || !isMobile) && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4 text-sm">
                            <ul className="space-y-1 mb-2">
                                {service.features.map((feature, featureIndex) => (
                                    <motion.li 
                                        key={featureIndex}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: featureIndex * 0.05 }}
                                        className="flex items-start text-gray-300"
                                    >
                                        <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            {service.timeframe && (
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xs text-gray-300 mb-2"
                                >
                                    Delivery: {service.timeframe}
                                </motion.p>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md text-sm font-medium mb-2"
                            >
                                Get Quote
                            </motion.button>
                            
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-xs text-gray-200 text-center"
                            >
                                * Price negotiable based on requirements
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicesSection;