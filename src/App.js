import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState([]);

  useEffect(() => {
    (async function getDataFunc() {
      await axios.get("/api/products").then((response) => {
        setLoader(false);
        setData(response.data.products);
      });
    })();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      <ol>
        {data.map((item) => (
          <li id={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}
