import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchProductList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const Promise = axios.get(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    );

    Promise.then((response) => {
      setInfo(response.data.data.data);
    }).catch((err) => {
      setInfo(err);
    });
  }, []);

  return (
    <div className="border-2 border-red-600 md:grid mx-auto lg:grid  md:grid-cols-2 lg:grid-cols-3  lg:gap-6 md:gap-1">
      {info.map((products, index) => {
        return (
          <div key={products.id} className="mx-auto">
            <div className="h-[19rem] w-[19rem] md:h-[24rem] md:w-[24rem] my-6  mx-auto relative border-2 border-gray-200 bg-white rounded-lg">
              <img
                src={products.thumbnail}
                className="h-[100%]"
                alt={products.title}
              />

              <div className="flex border-2 items-center  absolute bottom-3 py-1 pl-4 pr-2 justify-between gap-4 left-2 border-gray-200 bg-white rounded-full">
                <p className="text-xs font-semibold">{products.brand}</p>
                <div className="bg-blue-500 rounded-full p-2 text-sm text-white font-semibold">
                  <p>${products.price}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
