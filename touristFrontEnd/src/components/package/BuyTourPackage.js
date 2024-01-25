import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Packages from "./Packages";
import "./Packages.css";
import { NavLink } from "react-router-dom";
const BuyTourPackage = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const res = await axios.get("http://localhost:8800/tour_package");
        setPackages(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch packages only once when the component mounts
    fetchAllPackages();
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div className="package-page">
        <h1>Available Tour Packages</h1>
        <div className="pacage-container">
          {packages.map((each_tour, index) => (
            <Packages className="card" key={index} {...each_tour}></Packages>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BuyTourPackage;
