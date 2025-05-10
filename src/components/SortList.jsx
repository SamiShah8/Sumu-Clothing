import Sort from "../data/Sort";

function SortList(props) {
  const clickSortHandler = (query) => {
    if (query) {
      props.updateQuery(query);
    }
  };
  return (
    <div className="flex flex-col  text-[0.8rem] px-3 gap-1">
      <p className="text-[0.7rem] text-gray-500">Sort by</p>
      <p className="underline"> Relevance</p>
      <ul>
        {Sort.map((sorting) => (
          <li key={sorting.id} className="flex flex-col ">
            <a
              onClick={() => clickSortHandler(sorting.query)}
              className="hover:underline"
              href="#"
            >
              {sorting.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SortList;
