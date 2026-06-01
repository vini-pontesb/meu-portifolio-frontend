import { Link } from "react-router-dom";
import type { Project } from "../../../types";

interface CardsProjetosProps {
    projeto: Project
}

export default function CardsProjetos({ projeto }: CardsProjetosProps) {
  return (
    <div
      key={projeto.id}
      className="bg-neutral-800 border border-neutral-700/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:flex items-center"
    >
      {/* Imagem Real do Backend */}
      <div className="md:w-2/5 aspect-video md:aspect-auto md:h-48 overflow-hidden bg-neutral-900">
        {projeto.thumb_projeto ? (
          <img
            // Como o Django retorna o caminho relativo do media, precisamos concatenar com a base URL se não estiver configurado absolute
            src={
              projeto.thumb_projeto.startsWith("http")
                ? projeto.thumb_projeto
                : `http://localhost:8000${projeto.thumb_projeto}`
            }
            alt={projeto.titulo}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-600">
            <i className="bi bi-image text-4xl"></i>
          </div>
        )}
      </div>

      {/* Dados Reais */}
      <div className="p-6 md:w-3/5 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{projeto.titulo}</h3>
            {projeto.url_git && (
              <a
                href={projeto.url_git}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="bi bi-github text-xl"></i>
              </a>
            )}
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
            {projeto.descricao_curta}
          </p>
          <div className="mb-4">
            <span className="text-xs font-mono text-gray-500 block mb-1">
              TECNOLOGIAS:
            </span>
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias_array.map((tech, index) => (
                <span key={index} className="text-xs text-blue-400 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2">
          <Link
            to={`/projetos/${projeto.id}`}
            className="inline-block bg-neutral-900 border border-neutral-700 hover:border-blue-500 text-gray-300 hover:text-white px-4 py-2 rounded text-xs font-mono transition-colors"
          >
            Detalhes &gt;_
          </Link>
        </div>
      </div>
    </div>
  );
}
