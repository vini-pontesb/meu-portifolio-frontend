export default function Sobre() {
  // Simulando temporariamente os dados que virão da API do Profile
  const perfilMock = {
    nome: "Vinicius Pontes",
    bio_longa: "Unindo formação técnica em Engenharia da Computação a um propósito claro: desenvolver soluções tecnológicas que gerem impacto social real. Transformo linhas de código em ferramentas acessíveis e funcionais para transformar o quotidiano das pessoas.",
    tech_stack: ["Python", "Django", "React", "TypeScript", "SQL", "Git"]
  };

  return (
    <div className="container mx-auto py-12 mt-10 px-5 flex-grow">
      <div className="max-w-4xl mx-auto bg-neutral-800 rounded-2xl border border-neutral-700/50 shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Espaço reservado para a Imagem de Perfil */}
          <div className="md:w-1/3 bg-neutral-950 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-neutral-700/50">
            <div className="w-40 h-40 rounded-full bg-neutral-700 flex items-center justify-center text-gray-400 border-2 border-blue-500">
              <i className="bi bi-person-fill text-6xl"></i>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="p-8 md:w-2/3">
            <h2 className="text-2xl font-mono text-blue-400 mb-4">// Sobre Mim</h2>
            <h4 className="text-2xl font-bold mb-3">{perfilMock.nome}</h4>
            <p className="text-gray-300 leading-relaxed mb-6">{perfilMock.bio_longa}</p>

            <div>
              <h6 className="font-mono text-sm text-gray-400 mb-3">Tech Stack:</h6>
              <div className="flex flex-wrap gap-2">
                {perfilMock.tech_stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-neutral-900 border border-neutral-700 text-gray-300 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}