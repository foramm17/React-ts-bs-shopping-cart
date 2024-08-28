import { useNavigate } from "react-router-dom";

const categories = [
  "Clothes",
  "Accessories",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
  "Makeup",
];

export function FooterCategories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/store${category.toLowerCase() === 'all' ? '' : `/${category.toLowerCase()}`}`, {
      state: { selectedCategory: category }
    });
  };

  return (
    <div className="text-center md:text-right">
      <h3 className="text-xl text-cyan-300 font-bold mb-4">Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => handleCategoryClick(category)}
              className="hover:text-red-500 transition duration-300"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}