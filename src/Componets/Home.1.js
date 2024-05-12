import axios from "axios";
import API from "../Global.js";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/api/user/create`);
      console.log(response);
      setName(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input type={"text"} className="form-control" />
            </div>
            <div className="col-lg-6">
              <label>Definition</label>
              <input type={"text"} className="form-control" />
            </div>
            <div className="col-lg-12 mt-2">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-5">{name} map()= }</div>
      </div>
    </div>
  );
};
