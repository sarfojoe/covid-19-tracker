import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((
        country //go through the countries and return the data in a table
      ) => (
        <tr>
          <td>{country.country}</td> {/* returns a country */}
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>{" "}
            {/* returns the country's cases */}
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
