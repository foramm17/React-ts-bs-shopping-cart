interface CategoryListProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}

export function CategoryList({ categories, selectedCategory, handleCategoryChange }: CategoryListProps) {
  return (
    <ul className="mb-4 hidden md:block">
      {categories.map((cat) => (
        <li key={cat} className="text-sm md:text-lg p-3 hover:bg-gray-50">
          <button
            onClick={() => handleCategoryChange(cat)}
            className={
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? "text-cyan-600 font-semibold"
                : "text-gray-600 hover:text-cyan-600"
            }
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  );
}