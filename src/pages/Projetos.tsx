import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projetos() {
  const [searchTerm, setSearchTerm] = useState("");

  // Lista simulada estruturada com base no modelo do Django REST
  const projetosMock = [
    {
      id: 1,
      titulo: "BlinkTech",
      descricao_curta: "Projeto de óculos assistivos inovadores capazes de controlar cadeiras de rodas através de piscadelas de olhos estruturadas.",
      tecnologias_array: ["Python", "C++", "Arduino", "Django"]
    },
    {
      id: 2,
      titulo: "Plataforma de Economia Solidária",
      descricao_curta: "Solução de tecnologia social voltada para incubadoras tecnológicas de empreendimentos solidários em Niterói.",
      tecnologias_array: ["React", "TypeScript", "Tailwind CSS", "Supabase"]
    }
  ];

  const filteredProjects = projetosMock.filter(projeto =>
    projeto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 mt-10 px-5 flex-grow">
      <h2 className="text-center text-4xl font-bold mb-10">
        Meus <span className="text-blue-500">Projetos</span>
      </h2>

      {/* Barra de Pesquisa */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex gap-2 p-2 bg-neutral-800 border border-neutral-700 rounded-full shadow-inner">
          <input 
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar projeto..."
            className="w-full bg-transparent border-0 text-white placeholder-gray-500 focus:ring-0 focus:outline-none ps-4"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors">
            Buscar
          </button>
        </div>
      </div>

      {/* Grid de Cartões de Projetos */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((projeto) => (
            <div 
              key={projeto.id} 
              className="bg-neutral-800 border border-neutral-700/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:flex items-center"
            >
              {/* Thumbnail mockada */}
              <div className="md:w-2/5 bg-neutral-950 aspect-video md:aspect-auto md:h-48 flex items-center justify-center text-gray-600 border-b md:border-b-0 md:border-r border-neutral-700/50">
                <i className="bi bi-code-slash text-5xl text-neutral-700"></i>
              </div>

              {/* Informações do Projeto */}
              <div className="p-6 md:w-3/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{projeto.titulo}</h3>
                  <i className="bi bi-github text-gray-400 text-lg"></i>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {projeto.descricao_curta}
                </p>
                <div className="mb-4">
                  <span className="text-xs font-mono text-gray-500 block mb-1">TECNOLOGIAS:</span>
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias_array.map(tech => (
                      <span key={tech} className="text-xs text-blue-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/projetos/${projeto.id}`} 
                  className="inline-block bg-neutral-900 border border-neutral-700 hover:border-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded text-xs font-mono transition-colors"
                >
                  Detalhes &gt;_
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-neutral-800 rounded-xl border border-dashed border-neutral-700 text-gray-400">
            Nenhum projeto encontrado para o termo especificado.
          </div>
        )}
      </div>
    </div>
  );
}