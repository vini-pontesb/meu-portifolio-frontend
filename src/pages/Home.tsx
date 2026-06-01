import Apresentacao from "../components/home/Apresentacao";
import Terminal from "../components/home/Terminal";
import { useProfile } from "../hooks/useProfile";

export default function Home() {
  const {isLoading, error, data: perfil } = useProfile(1);
  
  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center px-5">
      {isLoading && (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4 font-mono">A carregar perfil...</p>
          </div>
        )}

        {error && (
          <div className="p-8 text-center text-red-400 font-mono">
            {error}
            <p className="text-sm text-gray-500 mt-2">Certifique-se de que criou o perfil ID 1 no Django Admin e inseriu os campos "profissao" e "foco".</p>
          </div>
        )}
      <div className="grid lg:grid-cols-2 gap-10 w-full items-center">
        {!isLoading && !error && perfil && (
          <>
            <Apresentacao
              perfil={perfil}
            />
            <Terminal
              perfil={perfil}
            />
          </>
        )}
      </div>
    </div>
  );
}