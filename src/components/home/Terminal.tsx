import type { Profile } from "../../types";

interface TerminalProps {
    perfil: Profile;
}

export default function Terminal({ perfil }: TerminalProps) {
    return (
        <div className="bg-[#1e1e1e] rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
        { perfil && (
            <>
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-gray-400 text-xs font-mono">dev@portfolio:~</span>
            </div>
            <div className="p-6 font-mono text-[#a9b7c6] text-sm md:text-base leading-relaxed">
                <p className="mb-2"><span className="text-[#98c379]">➜</span> <span className="text-[#61afef]">~</span> python manage.py runserver</p>
                <p className="mb-4 text-gray-500">Starting development server at http://127.0.0.1:8000/</p>

                <p className="mb-2"><span className="text-[#98c379]">➜</span> <span className="text-[#61afef]">~</span> whoami</p>
                <div className="ml-4 mb-4">
                <span className="text-[#e06c75]">User:</span> {perfil.titulo_profissional} <br/>
                <span className="text-[#e06c75]">Role:</span> {perfil.profissao}<br/>
                <span className="text-[#e06c75]">Stack:</span> [
                    {perfil.stack_array && perfil.stack_array.map((tech, index) => (
                        <span key={index}>
                            <span className="text-[#d19a66]">'{tech}'</span>
                            {index < perfil.stack_array.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                    ]<br/>
                <span className="text-[#e06c75]">Focus:</span> {perfil.foco}<br/>
                </div>
                <p className="mb-0 flex items-center"><span className="text-[#98c379] mr-2">➜</span> <span className="text-[#61afef] mr-2">~</span> <span className="animate-pulse w-0.25 h-5 bg-gray-200 inline-block"></span></p>
            </div>
          </>
        )} 
          
        </div>
    )
}