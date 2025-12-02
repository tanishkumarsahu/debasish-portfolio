import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CraftingDesigns from './components/CraftingDesigns';
import DesignExpertise from './components/DesignExpertise';
import ShowcasingProjects from './components/ShowcasingProjects';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <CraftingDesigns />
      <DesignExpertise />
      <ShowcasingProjects />
      <Testimonials />
      <CallToAction />
      <Footer />
      <ChatBot />
    </main>
  );
}
