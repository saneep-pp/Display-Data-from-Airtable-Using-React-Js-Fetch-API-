import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appIaGZmLz0PvosOP/Table1/",
        {
          headers: {
            Authorization:
              "Bearer pato0xvMppECQkQzX.8c16c36c57c3bdd3c421b622591f2a1957243c2e90286e1b4bf29ba9fb21a4a7",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching data from Airtable");
      }

      const responseData = await response.json();
      let details = responseData.records;
      setData(details);
      data.map((item) => {
        console.log(item.fields);
      });
    } catch (error) {
      console.error("Error fetching data from Airtable:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="main">
        <table>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>

          {data.map((item) => (
            <tr>
              <td>{item.fields.Name}</td>
              <td>{item.fields.Email}</td>
              <td>{item.fields.Phone}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
