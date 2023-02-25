import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ProjectSection } from '@/components/ProjectSection';
import { HeroSection } from '../components/HeroSection';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

