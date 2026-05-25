import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center px-5">
      <div className="grid lg:grid-cols-2 gap-10 w-full items-center">
        {/* Lado Esquerdo - Apresentação */}
        <div className="mb-10 lg:mb-0">
          <h4 className="text-gray-400 mb-3 font-mono text-lg">&lt;Olá, mundo! /&gt;</h4>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Eu sou <span className="text-blue-500">Vinicius Pontes</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Engenheiro de Computação em formação & Desenvolvedor Django/React.
            Transformo problemas complexos em soluções web elegantes.
          </p>
          <div className="flex gap-4">
            <Link to="/projetos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Ver Projetos
            </Link>
            <Link to="/sobre" className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
              Sobre Mim
            </Link>
          </div>
        </div>

        {/* Lado Direito - Terminal */}
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="ml-4 text-gray-400 text-xs font-mono">vinicius@portfolio:~</span>
          </div>
          <div className="p-6 font-mono text-[#a9b7c6] text-sm md:text-base leading-relaxed">
            <p className="mb-2"><span className="text-[#98c379]">➜</span> <span className="text-[#61afef]">~</span> python manage.py runserver</p>
            <p className="mb-4 text-gray-500">Starting development server at http://127.0.0.1:8000/</p>

            <p className="mb-2"><span className="text-[#98c379]">➜</span> <span className="text-[#61afef]">~</span> whoami</p>
            <div className="ml-4 mb-4">
              <span className="text-[#e06c75]">User:</span> Vinicius Pontes<br/>
              <span className="text-[#e06c75]">Role:</span> Software Engineer<br/>
              <span className="text-[#e06c75]">Stack:</span> [<span className="text-[#d19a66]">'React'</span>, <span className="text-[#d19a66]">'Django'</span>, <span className="text-[#d19a66]">'Tailwind'</span>]<br/>
              <span className="text-[#e06c75]">Focus:</span> Impacto Social & Tecnologia<br/>
            </div>
            <p className="mb-0 flex items-center"><span className="text-[#98c379] mr-2">➜</span> <span className="text-[#61afef] mr-2">~</span> <span className="animate-pulse w-2 h-4 bg-gray-400 inline-block"></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}