import { Link } from "react-router-dom";
import type { Profile } from "../../types";

interface ApresentacaoProps {
    perfil: Profile;
}

export default function Apresentacao({ perfil }: ApresentacaoProps) {

    return (
        <>
        { perfil && (
            <div className="mb-10 lg:mb-0">
          <h4 className="text-gray-400 mb-3 font-mono text-lg">&lt;Olá, mundo! /&gt;</h4>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Eu sou o <span className="text-blue-500">{perfil.nome}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">{perfil.bio_curta}</p>
          <div className="flex gap-4">
            <Link to="/projetos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Ver Projetos
            </Link>
            <Link to="/sobre" className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition-colors">
              Sobre Mim
            </Link>
          </div>
        </div>
        )}
        </>
    );
}