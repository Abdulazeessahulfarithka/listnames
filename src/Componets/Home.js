import axios from "axios";
import API from "../Global.js";
import React, { useEffect, useState } from "react";

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
      <div className="col-lg-6 mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
            </tr>
          </thead>s
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
