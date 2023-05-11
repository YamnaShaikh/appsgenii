import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import axios from "axios";
import "../App.css";

function CountriesList() {
  const [countriesList, setCountriesList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountriesList(response.data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  //   const filteredCountry = countriesList.filter((country) =>
  //     country.name.common.toLowerCase().includes(searchItem.toLowerCase())
  //   );

  const filteredCountry = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchItem}`
      );
      //debugger;
      setCountriesList(response.data);
    } catch (error) {
      alert(error.message)
    }
  };

  function handleSearch(e) {
    setSearchItem(e.target.value);
  }

  return (
    <div>
      <Header />
      <br />
      <div className="container rounded">
        <div
          className="form-group"
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <div style={{ padding: "5px" }}>
            <input
              type="text"
              className="form-control"
              value={searchItem}
              placeholder="Search your country"
              onChange={handleSearch}
            />
          </div>
          <div style={{ padding: "5px" }}>
            <Button onClick={filteredCountry}>Search</Button>
          </div>
        </div>
        <Table
          striped
          bordered
          hover
          variant="primary"
          style={{ marginTop: "10px" }}
        >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Capital</th>
              <th scope="col">Currency</th>
              <th scope="col">Calling Code</th>
            </tr>
          </thead>
          <tbody>
            {countriesList.map((country) => (
              <tr key={country.cca2}>
                <td>{country.name.common}</td>
                <td>{country.cca2}</td>
                <td>{country.capital}</td>
                <td>
                  {country.currencies &&
                    Object.values(country.currencies)[0].name}
                </td>
                <td>
                  {country.callingCodes && country.callingCodes.length > 0
                    ? `+${country.callingCodes}`
                    : "N/A"}
                </td> 
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CountriesList;
