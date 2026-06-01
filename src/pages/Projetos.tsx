import { useState } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../hooks/useProjects";
import BarraPesquisa from "../components/projetos/components/BarraPesquisa";

export default function Projetos() {
  const [activeSearch, setActiveSearch] = useState("");

  // Consumimos o nosso Custom Hook passando o termo de busca ativo
  const { data, isLoading, error } = useProjects(activeSearch);

  return (
    <div className="container mx-auto py-12 mt-10 px-5 flex-grow">
      <h2 className="text-center text-4xl font-bold mb-10">
        Meus <span className="text-blue-500">Projetos</span>
      </h2>

      <BarraPesquisa
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
      />

      {/* Gerenciamento de Estados de UI */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {isLoading && (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4 font-mono">
              Carregando dados da API...
            </p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Renderização Condicional dos Dados Reais */}
        {!isLoading &&
          !error &&
          data?.results &&
          (data.results.length > 0 ? (
            data.results.map((projeto) => (
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
                          <span
                            key={index}
                            className="text-xs text-blue-400 font-mono"
                          >
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
            ))
          ) : (
            <div className="text-center py-10 bg-neutral-800 rounded-xl border border-dashed border-neutral-700 text-gray-400">
              Nenhum projeto encontrado.
            </div>
          ))}
      </div>
    </div>
  );
}
