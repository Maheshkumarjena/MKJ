import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className=' overflow-x-hidden'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <TechStack />
      <Contact />
    </main>
  );
}
