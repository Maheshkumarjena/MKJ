import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
// import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import ServicesSection from '@/components/Services';
import Navigation from  '@/components/Navigation'

// import WhyChooseMe from '@/components/WhyMe';
// import InfiniteTestimonials from '@/components/Testimonial';

export default function Home() {

  

  return (
    <main className=' overflow-x-hidden'>

      <Navigation  />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <InfiniteTestimonials/> */}
      <ServicesSection/>
      {/* <WhyChooseMe/> */}
      <Contact />
    </main>
  );
}
