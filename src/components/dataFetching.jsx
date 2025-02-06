import axios from "axios";
import { useEffect, useState } from "react";

export default function DataFetching() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataPromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    dataPromise
      .then((res) => {
        console.log(res);
        setData(res.data);
        setIsLoading(false);
        
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2>error occured. try again</h2>;
  }

  return (
    <ul>
      {data.map((singleData) => {
        return <h2 key={singleData.id}>{singleData.title}</h2>;
      })}
    </ul>
  );
}
