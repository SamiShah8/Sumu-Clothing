import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductFetching() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = axios.get(
      "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches"
    );

    promise
      .then((response) => {
        setProducts(response.data.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading..............</h2>;
  }

  if (error) {
    return <h1>error occured</h1>;
  }

  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <p>{product.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
