import { useProfile } from "../hooks/useProfile";

export default function Sobre() {
  // Consumimos o perfil com ID 1 (padrão do seu antigo template)
  const { data: perfil, isLoading, error } = useProfile(1);

  // Lista estática de fallback para as competências, caso queira mantê-las separadas
  const techStack = ["Python", "Django", "React", "TypeScript", "SQL", "Git"];

  return (
    <div className="container mx-auto py-12 mt-10 px-5 flex-grow">
      <div className="max-w-4xl mx-auto bg-neutral-800 rounded-2xl border border-neutral-700/50 shadow-xl overflow-hidden">
        
        {isLoading && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4 font-mono">A carregar perfil...</p>
          </div>
        )}

        {error && (
          <div className="p-8 text-center text-red-400 font-mono">
            {error}
            <p className="text-sm text-gray-500 mt-2">Certifique-se de que criou o perfil ID 1 no Django Admin.</p>
          </div>
        )}

        {!isLoading && !error && perfil && (
          <div className="md:flex">
            {/* Lado Esquerdo - Imagem Dinâmica */}
            <div className="md:w-1/3 bg-neutral-950 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-neutral-700/50">
              <div className="w-40 h-40 rounded-full flex items-center justify-center border-2 border-blue-500 overflow-hidden bg-neutral-800">
                {perfil.foto_perfil ? (
                  <img 
                    // Regra de segurança para a URL do Django
                    src={perfil.foto_perfil.startsWith('http') ? perfil.foto_perfil : `http://localhost:8000${perfil.foto_perfil}`} 
                    alt={perfil.nome} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Fallback: Ícone padrão caso você não tenha feito upload de foto no painel
                  <i className="bi bi-person-fill text-6xl text-gray-500"></i>
                )}
              </div>
            </div>

            {/* Lado Direito - Conteúdo Dinâmico da API */}
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-mono text-blue-400 mb-4">// Sobre Mim</h2>
              <h4 className="text-2xl font-bold mb-1">{perfil.nome}</h4>
              <p className="text-sm text-blue-400 font-mono mb-4">{perfil.titulo_profissional}</p>
              
              <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                {perfil.bio_longa}
              </p>

              <div className="mb-6">
                <h6 className="font-mono text-sm text-gray-400 mb-3">Tech Stack:</h6>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-neutral-900 border border-neutral-700 text-gray-300 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links de Redes Sociais Dinâmicos */}
              <div className="flex gap-4 text-xl border-t border-neutral-700/50 pt-4">
                {perfil.link_git && (
                  <a href={perfil.link_git} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <i className="bi bi-github"></i>
                  </a>
                )}
                {perfil.link_linkedin && (
                  <a href={perfil.link_linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <i className="bi bi-linkedin"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}