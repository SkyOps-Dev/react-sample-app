import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [data, setData] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL || "API URL not set";
  const appEnv = process.env.REACT_APP_ENV || "Environment not set";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/endpoint`);
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        setData("Failed to fetch data");
        console.error("Error fetching data:", error);
      }
    };

    if (apiUrl !== "API URL not set") {
      fetchData();
    }
  }, [apiUrl]);

  return (
    <div className="app">
      <header>
        <h1>React Sample App</h1>
        <p>A simple app demonstrating React</p>
      </header>
      <main>
    <section>
      <img src="/logo192.png" alt="React Logo" width="500" height="500" />
    </section>
      </main>
      <footer>
        <p>&copy; 2025 React Sample App</p>
      </footer>
    </div>
  );
};

export default App;
