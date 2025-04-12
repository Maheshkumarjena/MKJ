import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/Services';
import WhyChooseMe from '@/components/WhyMe';

export default function Home() {
  return (
    <main className=' overflow-x-hidden'>
      <Navigation/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ServicesSection/>
      <WhyChooseMe/>
      {/* <TechStack /> */}
      <Contact />
    </main>
  );
}
