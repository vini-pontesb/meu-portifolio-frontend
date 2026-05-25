import { useState, type FormEvent } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // A integração real com a API será feita na Fase 4 utilizando axios/fetch
    console.log("Dados prontos para envio ao Django REST:", formData);
  };

  return (
    <div className="container mx-auto py-12 mt-10 px-5 flex-grow flex items-center justify-center">
      <div className="w-full max-w-md bg-neutral-800 border border-neutral-700/50 rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-2xl font-bold mb-2">Entre em Contacto</h2>
        <p className="text-center text-sm text-gray-400 mb-6">Tem alguma dúvida ou proposta? Preencha abaixo.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <input 
              type="text"
              required
              value={formData.nome}
              onChange={e => setFormData({...formData, nome: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
            <input 
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Assunto</label>
            <input 
              type="text"
              required
              value={formData.assunto}
              onChange={e => setFormData({...formData, assunto: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
            <textarea 
              rows={4}
              required
              value={formData.mensagem}
              onChange={e => setFormData({...formData, mensagem: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}