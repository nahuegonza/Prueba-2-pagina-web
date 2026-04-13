import Layout from '../components/Layout';
import { useState } from 'react';

export default function Tasaciones() {
  const [m2, setM2] = useState(0);
  const [valor, setValor] = useState(null);

  const calcular = () => {
    const base = 2000;
    setValor({ min: m2 * base * 0.95, max: m2 * base * 1.05 });
  }

  return (
    <Layout title="Tasaciones Online">
      <h1>Tasaciones Online</h1>
      <input type="number" placeholder="Metros cuadrados" onChange={e => setM2(e.target.value)} />
      <button onClick={calcular}>Calcular</button>
      {valor && <p>Valor estimado: USD {valor.min.toFixed(0)} - {valor.max.toFixed(0)}</p>}
    </Layout>
  );
}
