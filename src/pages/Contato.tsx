import { useState } from "react";
import FormContato from "../components/contato/FormContato";

export default function Contato() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

        <FormContato 
          setSuccessMessage={setSuccessMessage} 
          setErrorMessage={setErrorMessage} 
        />
      </div>
    </div>
  );
}