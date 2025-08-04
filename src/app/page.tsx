import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
// import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import ServicesSection from '@/components/Services';

// import WhyChooseMe from '@/components/WhyMe';
// import InfiniteTestimonials from '@/components/Testimonial';

export default function Home() {

  
  // const navItems = [
  //     {
  //       name: "Home",
  //       link: "#Home"
  //     },
      
  //     {
  //       name: "About",
  //       link: "#about"
  //     },
  //     {
  //       name: "Projects",
  //       link: "#projects"
  //     },
  //     {
  //       name: "Skills",
  //       link: "#skills"
  //     },
  //     {
  //       name: "Services",
  //       link: "#services"
  //     },
      
  //     {
  //       name: "Contact",
  //       link: "#contact"
  //     },

      
  //   ];

  return (
    <main className=' overflow-x-hidden'>
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
