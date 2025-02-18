import ShortList from "../components/shortList.jsx";
import CategoryList from "./categoryList.jsx";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

const url = "https://api.freeapi.app/api/v1/public/randomproducts?query=";

export default function FetchProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("mens-watches");

  useEffect(() => {
    axios
      .get(url + query)
      .then((response) => {
        setProducts(response.data.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (isAxiosError(err)) {
          if (err.response) {
            setError(
              "error from server. don't know the message format yet. we will create our own server and send the agreed msg format between client and server"
            );
          } else {
            setError(err.message);
          }
        } else {
          setError("something went wrong");
        }
        setIsLoading(false);
      });
  }, [query]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="loading-spinner border-[8px] border-t-blue-500 border-t-[8px] border-gray-300 rounded-[50%] h-[40px] w-[40px]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto flex  justify-center">
      {/* collection */}
      <CategoryList updateCategoryQuery={setQuery} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 flex-1 lg:grid-cols-3  lg:gap-8 md:gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="relative border-2 border-gray-200 rounded-lg hover:border-blue-500"
            >
              {/* product image  */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src={product.thumbnail}
                  className="h-full w-full rounded-lg transition-transform duration-300 hover:scale-105 ease-in-out product-img"
                  alt={product.title}
                />
              </div>
              {/* product price and title  */}
              <div className="flex border-2 items-center absolute bottom-3 py-1.5 px-3 justify-between gap-4 left-2 border-gray-200 bg-white rounded-full">
                <p className="text-xs font-semibold">{product.brand}</p>
                <div className="bg-blue-500 rounded-full p-2 text-sm text-white font-semibold">
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* short by */}
      <ShortList updateQuery={setQuery} />
    </div>
  );
}
