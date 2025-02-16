import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

export default function FetchProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Promise = axios.get(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    );

    Promise.then((response) => {
      setProducts(response.data.data.data);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);

      if (isAxiosError(err)) {
        if (err.response) {
          setError(
            "error from server. don't know the message format yet. we will create our own server and send the agreed msg format between client and server"
          );
        } else if (err.request) {
          setError(err.message);
        } else {
          setError(err.message);
        }
      } else {
        setError("something went wrong");
      }
      setIsLoading(false);
    });
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return (
      <div className="loading-spinner border-[8px] border-t-blue-500 border-t-[8px] border-gray-300 rounded-[50%] h-[40px] w-[40px]"></div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto flex  justify-center">
      {/* collection */}
      <div className="flex flex-col px-3 text-[14px] gap-1">
        <p className="text-[13px] text-gray-500">Collections</p>
        <p className="underline">All</p>
        <ul>
          <li className="flex flex-col">
            <a className="hover:underline" href="#">
              Bags
            </a>
            <a className="hover:underline" href="#">
              Drinkware
            </a>
            <a className="hover:underline" href="#">
              Footware
            </a>
            <a className="hover:underline" href="#">
              Headwear
            </a>
            <a className="hover:underline" href="#">
              Hoodies
            </a>
            <a className="hover:underline" href="#">
              Jackets
            </a>
            <a className="hover:underline" href="#">
              Kids
            </a>
            <a className="hover:underline" href="#">
              Pets
            </a>
            <a className="hover:underline" href="#">
              Shirts
            </a>
            <a className="hover:underline" href="#">
              Stickers
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 flex-1 lg:grid-cols-3 lg:gap-8 md:gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="relative border-2 border-gray-200 rounded-lg"
            >
              {/* product image  */}
              <div className="rounded-lg">
                <img
                  src={product.thumbnail}
                  className="h-full w-full"
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
      <div className="flex flex-col  text-[14px] px-3 gap-1">
        <p className="text-[13px] text-gray-500">Sort by</p>
        <p className="underline"> Relevance</p>
        <ul>
          <li className="flex flex-col ">
            <a className="hover:underline" href="#">
              Trending
            </a>
            <a className="hover:underline" href="#">
              Latest
            </a>
            <a className="hover:underline " href="#">
              arrivals
            </a>
            <a className="hover:underline " href="#">
              Price: Low to high
            </a>
            <a className="hover:underline " href="#">
              Price: High to low
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
