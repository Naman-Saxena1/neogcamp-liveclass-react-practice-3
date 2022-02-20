import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  let [loader, setLoader] = useState(false);
  let [data, setData] = useState([]);
  let [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    (async function getDataFunc() {
      setLoader(true);
      await axios
        .get("/api/products")
        .then((response) => {
          setLoader(false);
          setErrorMsg(false);
          setData(response.data.products);
        })
        .catch((error) => {
          setLoader(false);
          setErrorMsg(true);
        });
    })();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      {loader ? <h2>Loading...</h2> : ""}
      {errorMsg ? <h2>Something Went Wrong! :(</h2> : ""}
      <ol>
        {data.map((item) => (
          <li id={item.id}>
            <img
              style={{ width: "300px", height: "200px" }}
              src={item.image}
              alt={item.name}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
