/* eslint-disable react/prop-types */
function CategoryCard({ category }) {
  return (
    <div
      className={`flex h-12 w-32 items-center space-x-2 rounded-lg border px-1 shadow-md sm:w-36 md:justify-center`}
    >
      <span
        className={`${category.bgColor} rounded-full border p-2 text-sm text-gray-700 sm:text-lg`}
      >
        {category.icon}
      </span>
      <span className="font-medium text-gray-800">{category.name}</span>
    </div>
  );
}

export default CategoryCard;
