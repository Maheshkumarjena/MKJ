import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className=' overflow-x-hidden'>
      <Navigation/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <TechStack /> */}
      <Contact />
    </main>
  );
}
