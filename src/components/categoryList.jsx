import Categories from "../data/category";

function CategoryList(props) {
  return (
    <div className="flex flex-col px-3 text-[0.8rem] gap-1">
      <p className="text-[0.7rem] text-gray-500">Collections</p>
      <p className="underline">All</p>
      <ul>
        {Categories.map((category) => (
          <li key={category.id} className="flex flex-col">
            <a
              onClick={() =>
                category.query
                  ? props.updateCategoryQuery(category.query)
                  : null
              }
              className="hover:underline"
              href="#"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryList;
