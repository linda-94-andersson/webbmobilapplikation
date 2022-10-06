import React, { useEffect, useState } from "react";
import axios from "axios";
import FeatchBeer from "./FeatchBeer";

function Beer() {
  const [beers, setBeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await axios.get("https://api.punkapi.com/v2/beers", {
          signal: controller.signal,
        });
        if (!Array.isArray(res.data)) {
          throw `Unexpected API Response :(`;
        }
        setBeers(res.data);
      } catch (err) {
        if (axios.isCancel(err)) return;
        console.error(err);
      }
    })();
    return () => controller.abort();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = beers.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(beers);
    }
  };

  return (
    <div>
      {/* <FeatchBeer /> */}
      <span>Filter beers: </span>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {searchInput.length > 1
            ? filteredResults.map((b) => (
                <tr key={b.id}>
                  <td>
                    <img
                      src={b.image_url}
                      alt="beer_img"
                      style={{ height: 150 }}
                    ></img>
                  </td>
                  <td>{b.name}</td>
                  <td>{b.description}</td>
                </tr>
              ))
            : beers.map((b) => (
                <tr key={b.id}>
                  <td>
                    <img
                      src={b.image_url}
                      alt="beer_img"
                      style={{ height: 150 }}
                    ></img>
                  </td>
                  <td>{b.name}</td>
                  <td>{b.description}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Beer;
