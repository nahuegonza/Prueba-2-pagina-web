import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="González Inmuebles">
      <section className="hero">
        <h1>Tu próximo hogar empieza con confianza</h1>
        <p>Compra, venta y alquiler de propiedades en Argentina</p>
        <div className="cta">
          <Link href="/propiedades">Buscar Propiedades</Link>
          <Link href="/tasaciones">Tasá tu propiedad</Link>
        </div>
      </section>
    </Layout>
  );
}
