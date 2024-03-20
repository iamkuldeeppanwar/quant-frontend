import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { PiUserCircleLight } from "react-icons/pi";
import { FaUserLarge } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import request from "../api";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      date,
      email,
      password,
    };

    try {
      const { data } = await request.post("/signup", userData);
      localStorage.setItem("token", data.authToken);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="user_auth h-50">
      <div className="form_head">
        <div>SIGN UP</div>
      </div>
      <div className=" d-flex justify-content-center">
        <PiUserCircleLight size={100} color="#808080" />
      </div>
      <Form onSubmit={handleLogin}>
        <InputGroup className=" mb-3">
          <InputGroup.Text className="group" id="basic-addon1">
            @
          </InputGroup.Text>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            aria-label="Enter name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className=" mb-3">
          <InputGroup.Text className="group" id="basic-addon1">
            <FaUserLarge />
          </InputGroup.Text>
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
            aria-label="Date"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className=" mb-3">
          <InputGroup.Text className="group" id="basic-addon1">
            <FaUserLarge />
          </InputGroup.Text>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            <MdLock />
          </InputGroup.Text>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <div className="d-flex justify-content-between">
          <Form.Check
            className="font_size"
            type="checkbox"
            label={`Remember me`}
          />
          <div className="font_size">Forget Password?</div>
        </div>

        <button className="auth_button" variant="primary" type="submit">
          Sign up
        </button>
      </Form>

      <div className="font_size text-center mt-3">
        <Link to="/">Already have an account?</Link>
      </div>
    </div>
  );
};

export default Signup;
