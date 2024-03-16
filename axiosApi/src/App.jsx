import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "./components/axios";

// const API = "https://jsonplaceholder.typicode.com";

function App() {
  const [myData, setmyData] = useState([]);
  const [isError, setisError] = useState("");
  const getApiData = async () => {
    try {
      const response = await axios.get("/posts");
      setmyData(response.data);
    } catch (error) {
      setisError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="grid">
        {myData.slice(0, 12).map((data) => (
          <div className="card" key={data.id}>
            <h2> {data.title.slice(0, 15).toUpperCase()}</h2>
            <p>{data.body.slice(0, 100)}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => setmyData(response.data))
//   .catch((error) => setisError(error.message));
