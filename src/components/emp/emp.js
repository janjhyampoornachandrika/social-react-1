import React, { useContext } from "react";
import { useFetch } from "../../useFetch";
import { AppContext } from "../../context/appContext";
export default function Emp() {
  const {user} = useContext(AppContext)
  const url = `http://localhost:8080/employees`;
  const data = useFetch(url);
  return (
    <div>
      <h1>Employees</h1>
      <div className="Home-container">
        {data &&
          data.map((elem) => (
            <div key={elem.id}>
              {elem.name}
              <hr></hr>
            </div>
           
          ))}
      </div>
    </div>
  );
}
