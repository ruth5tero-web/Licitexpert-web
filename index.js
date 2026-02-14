import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LicitaExper - Asesoría y Soluciones Empresariales</title>
        <meta name="description" content="Asesoría profesional en licitaciones y soluciones empresariales" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
