import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="projetos/:id" element={<div className="p-10 text-center text-gray-400">Ecrã de Detalhes (Integrado na Fase 4)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}