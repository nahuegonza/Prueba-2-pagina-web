import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title }) {
  return (
    <>
      <Head><title>{title}</title></Head>
      <nav>
        <Link href="/">Inicio</Link> | <Link href="/propiedades">Propiedades</Link> | <Link href="/tasaciones">Tasaciones</Link> | <Link href="/contacto">Contacto</Link>
      </nav>
      <main>{children}</main>
      <footer>© González Inmuebles</footer>
    </>
  );
}
