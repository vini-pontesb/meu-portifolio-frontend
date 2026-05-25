import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white">
      {/* Navigation */}
      <nav className="bg-black py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-5 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-blue-500">&lt;</span>
            VP
            <span className="text-blue-500">/&gt;</span>
          </Link>
          
          {/* Navegação Simplificada para Mobile - Numa versão avançada poderíamos adicionar um Menu Hamburger */}
          <ul className="flex items-center gap-6 text-sm font-semibold text-gray-300">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre</Link></li>
            <li><Link to="/projetos" className="hover:text-blue-400 transition-colors">Projetos</Link></li>
            <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Contato</Link></li>
          </ul>
        </div>
      </nav>

      {/* Conteúdo Dinâmico das Páginas */}
      <main className="flex-grow flex flex-col">
        <Outlet /> 
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 py-6 mt-auto border-t border-neutral-700">
        <div className="container mx-auto px-5 text-center sm:text-left sm:flex sm:justify-between items-center text-sm text-gray-400">
           <p>Copyright &copy; Portfólio Vinicius Pontes {new Date().getFullYear()}</p>
           <div className="flex justify-center gap-4 mt-3 sm:mt-0 text-xl">
             <a href="https://www.instagram.com/vini_pontesb/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><i className="bi bi-instagram"></i></a>
             <a href="https://www.linkedin.com/in/vinipontesb/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><i className="bi bi-linkedin"></i></a>
             <a href="https://github.com/vini-pontesb" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><i className="bi bi-github"></i></a>
           </div>
        </div>
      </footer>
    </div>
  );
}