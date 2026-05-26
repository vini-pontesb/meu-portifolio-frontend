import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProject } from "../../hooks/useProject";

export default function ProjetoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const { data: projeto, isLoading, error } = useProject(id);
  
  // Estado para controlar qual imagem aparece em destaque na galeria
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (isLoading) {
    return (
      <div className="container mx-auto py-20 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !projeto) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl text-red-400 font-mono mb-4">Erro: {error || "Projeto não encontrado"}</h2>
        <Link to="/projetos" className="text-blue-400 hover:text-blue-300 underline">Voltar para a lista</Link>
      </div>
    );
  }

  // Helper de segurança para URLs de imagens vindas do Django
  const getImageUrl = (url: string) => url.startsWith('http') ? url : `http://localhost:8000${url}`;

  // Combina a thumbnail principal com as imagens aninhadas para a galeria
  const allImages = [];
  if (projeto.thumb_projeto) allImages.push(getImageUrl(projeto.thumb_projeto));
  if (projeto.images && projeto.images.length > 0) {
    projeto.images.forEach(img => allImages.push(getImageUrl(img.image)));
  }

  return (
    <div className="container mx-auto py-12 mt-5 px-5 flex-grow">
      <div className="max-w-5xl mx-auto">
        
        {/* Botão Voltar */}
        <Link to="/projetos" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 font-mono text-sm">
          <span className="text-blue-500 mr-2">&lt;</span> Voltar para Projetos
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Coluna da Esquerda - Galeria de Imagens */}
          <div>
            {allImages.length > 0 ? (
              <div className="space-y-4">
                {/* Imagem Principal */}
                <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700/50 shadow-lg">
                  <img 
                    src={allImages[activeImageIndex]} 
                    alt={projeto.titulo} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Miniaturas */}
                {allImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {allImages.map((img, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${activeImageIndex === index ? 'border-blue-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                      >
                        <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="aspect-video bg-neutral-900 rounded-xl border border-neutral-700/50 shadow-lg flex items-center justify-center text-neutral-600">
                <i className="bi bi-image text-5xl"></i>
              </div>
            )}
          </div>

          {/* Coluna da Direita - Dados do Projeto */}
          <div className="flex flex-col justify-center border-l border-neutral-800 md:pl-10">
            <h1 className="text-4xl font-bold mb-2">{projeto.titulo}</h1>
            <p className="text-gray-500 text-sm font-mono mb-6">
              Criado em: {new Date(projeto.data_criacao).toLocaleDateString('pt-BR')}
            </p>

            <div className="mb-6">
              <h5 className="text-blue-400 font-mono mb-3">// Sobre o Projeto:</h5>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {projeto.descricao_detalhada}
              </p>
            </div>

            <div className="mb-8">
              <strong className="text-gray-400 text-sm block mb-2 font-mono">Tecnologias:</strong>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias_array.map((tech, index) => (
                  <span key={index} className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-700/50 text-blue-200 px-3 py-1 rounded-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {projeto.url_git && (
                <a 
                  href={projeto.url_git} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
                >
                  <i className="bi bi-github"></i> Ver no GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}