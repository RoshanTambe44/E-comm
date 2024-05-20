import React, { useState } from "react";
import { Link } from "react-router-dom";
// import user from "../../model/usermodel"

// const user = require('../../model/usermodel');

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function userName(e) {
    setName(e.target.value);
  }
  function userEmail(e) {
    setEmail(e.target.value);
  }
  function userPassword(e) {
    setPassword(e.target.value);
  }

  async function signupDetail() {
    const respons = await fetch("http://localhost:2000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    });

    const json = await respons.json();
    console.log(json);
  }

  return (
    <div
      className="flex flex-column text-end justify-content-center align-items-center overflow-x-hidden pb-4"
      style={{ width: "100vw", height: "100vh" }}
    ><div className="" style={{padding:"20px"}} >
      <Link
        style={{
          textDecoration: "none",
        }}
        to="/"
      >
        &#10060;
      </Link></div>
      <div className="row justify-content-center ">
        <form
          className=" col-6 text-start p-5"
          style={{
            border: "1px solid black",
            borderRadius: "10PX",
            webkitBoxShadow: "10px 10px 42px -29px rgba(0,0,0,0.75)",
            mozboxshadow: "10px 10px 42px -29px rgba(0,0,0,0.75)",
            boxShadow: "10px 10px 42px -29px rgba(0,0,0,0.75)",
          }}
        >
          <div className="mb-3 text-center fw-bolder fs-1">Sign up</div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              name
            </label>
            <input
              onChange={userName}
              name="name"
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={userEmail}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={userPassword}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {name && email && password ? (
            <Link
              className="btn btn-primary"
              onClick={signupDetail}
              to="/login"
            >
              signup
            </Link>
          ) : (
            <div className="btn btn-primary">signup</div>
          )}
          <Link className="px-4 link-underline-dark " to="/login">
            i have an already account
          </Link>
        </form>
      </div>
    </div>
  );
}
