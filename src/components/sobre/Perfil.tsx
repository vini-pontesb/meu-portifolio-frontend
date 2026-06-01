import type { Profile } from "../../types";

interface PerfilProps {
  perfil: Profile;
}

export default function Perfil({ perfil }: PerfilProps) {
  return (
    <div className="md:w-1/3 bg-neutral-950 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-neutral-700/50">
      <div className="w-40 h-40 rounded-full flex items-center justify-center border-2 border-blue-500 overflow-hidden bg-neutral-800">
        {perfil.foto_perfil ? (
          <img
            // Regra de segurança para a URL do Django
            src={
              perfil.foto_perfil.startsWith("http")
                ? perfil.foto_perfil
                : `http://localhost:8000${perfil.foto_perfil}`
            }
            alt={perfil.nome}
            className="w-full h-full object-cover"
          />
        ) : (
          // Fallback: Ícone padrão caso você não tenha feito upload de foto no painel
          <i className="bi bi-person-fill text-6xl text-gray-500"></i>
        )}
      </div>
    </div>
  );
}
