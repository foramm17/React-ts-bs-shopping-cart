interface Item {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}

interface SearchResultsProps {
  searchResults: Item[] | undefined;
  searchTerm: string;
  clearSearch: () => void;
}

export function SearchResults({
  searchResults,
  searchTerm,
  clearSearch,
}: SearchResultsProps) {
  if (!searchResults || searchResults.length === 0) return null;

  return (
    <div className="mb-4 text-lg">
      Showing search results for "{searchTerm}"
      <button
        className="ml-4 text-cyan-600 hover:text-cyan-800"
        onClick={clearSearch}
      >
        Clear search
      </button>
    </div>
  );
}
