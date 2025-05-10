import Categories from "../data/Category";

function CategoryList(props) {
  const QueryUpdate = (category) => {
    if (category) {
      props.updateCategoryQuery(category.query);
    }
  };
  return (
    <div className="flex flex-col px-3 text-[0.8rem] gap-1">
      <p className="text-[0.7rem] text-gray-500">Collections</p>
      <p className="underline">All</p>
      <ul>
        {Categories.map((category) => (
          <li key={category.id} className="flex flex-col">
            <a onClick={QueryUpdate} className="hover:underline" href="#">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryList;
