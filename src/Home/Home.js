import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import request from "../api";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    getUsers();
  }, [navigate]);

  const getUsers = async () => {
    try {
      const { data } = await request("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(data.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Date Of Birth</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => {
          return (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.date}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Home;
