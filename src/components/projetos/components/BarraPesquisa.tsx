import { useState } from "react";

interface BarrraPesquisaProps {
  activeSearch: string;
  setActiveSearch: (search: string) => void;
}

export default function BarraPesquisa({
  activeSearch,
  setActiveSearch,
}: BarrraPesquisaProps) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchInput);
  };

  const handleClear = () => {
    setSearchInput("");
    setActiveSearch("");
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <form
        onSubmit={handleSearch}
        className="flex gap-2 p-2 bg-neutral-800 border border-neutral-700 rounded-full shadow-inner"
      >
        <input
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Buscar projeto..."
          className="w-full bg-transparent border-0 text-white placeholder-gray-500 focus:ring-0 focus:outline-none ps-4"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors"
        >
          Buscar
        </button>
        {activeSearch && (
          <button
            type="button"
            onClick={handleClear}
            className="bg-neutral-600 hover:bg-neutral-500 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors"
          >
            Limpar
          </button>
        )}
      </form>
    </div>
  );
}
