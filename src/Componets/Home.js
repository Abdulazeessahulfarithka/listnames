import axios from "axios";
import API from "../Global.js";
import React, { useEffect, useState } from "react";
import Namelist from "./nameList.js";

const Home = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API}/api/category/create`);
      console.log(response.data);
      setUserList(response.data.notes);
    } catch (error) {}
  };
  console.log("userList:", userList);
  return (
    <div className="container">
      <div className="col-lg-12 mt-5">
        {userList.map((user, index) => {
          return <Namelist user={user} />;
        })}
      </div>
    </div>
  );
};

export default Home;
