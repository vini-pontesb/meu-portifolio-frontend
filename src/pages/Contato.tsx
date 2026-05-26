import { useState, type FormEvent } from "react";
import { api } from "../services/api";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  // Estados para gerir o feedback visual do utilizador
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      // Envia o POST para /api/contatos/
      await api.post("/contatos/", formData);
      
      setSuccessMessage("Mensagem enviada com sucesso! O e-mail de notificação foi disparado.");
      // Limpa o formulário após o sucesso
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch (err) {
      console.error("Erro ao submeter formulário:", err);
      setErrorMessage("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 mt-10 px-5 flex-grow flex items-center justify-center">
      <div className="w-full max-w-md bg-neutral-800 border border-neutral-700/50 rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-2xl font-bold mb-2">Entre em Contato</h2>
        <p className="text-center text-sm text-gray-400 mb-6">Tem alguma dúvida ou proposta? Preencha abaixo.</p>

        {/* Alertas de Feedback */}
        {successMessage && (
          <div className="mb-4 bg-green-900/40 border border-green-500 text-green-200 p-3 rounded-lg text-sm font-mono">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 bg-red-900/40 border border-red-500 text-red-200 p-3 rounded-lg text-sm font-mono">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <input 
              type="text"
              required
              disabled={isSubmitting}
              value={formData.nome}
              onChange={e => setFormData({...formData, nome: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
            <input 
              type="email"
              required
              disabled={isSubmitting}
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Assunto</label>
            <input 
              type="text"
              required
              disabled={isSubmitting}
              value={formData.assunto}
              onChange={e => setFormData({...formData, assunto: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
            <textarea 
              rows={4}
              required
              disabled={isSubmitting}
              value={formData.mensagem}
              onChange={e => setFormData({...formData, mensagem: e.target.value})}
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-shadow resize-none disabled:opacity-50"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  A enviar...
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}