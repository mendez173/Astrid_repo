import Presentacion from './components/Presentacion';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Metas from './components/Metas';
import Mensajes from './components/Mensajes';

export default function Home() {
  return (
    <main>
      <Presentacion />
      <SobreMi />
      <Proyectos />
      <Metas />
      <Mensajes />
    </main>
  );
}