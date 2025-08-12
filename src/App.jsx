import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='font-inter'>
      <Nav />
      <main>
        <Hero />
        {/* <Showcase /> */}
        <Features />
        <Process />
        {/* <Testimonials /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

