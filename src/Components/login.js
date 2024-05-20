import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setHandlebtn, setUname, setUid, setRoll }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  function loginPassword(e) {
    setPassword(e.target.value);
  }

  function loginMail(e) {
    setEmail(e.target.value);
  }

  async function loginDetail(e) {
    e.preventDefault();

    const respons = await fetch(`http://localhost:2000/api/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await respons.json();
    if (!json.success) {
      return alert(json.error);
    }
    localStorage.setItem("token", json.token);
    setRoll(json.roll);
    if (json.roll === "admin" || "superadmin") {
      setHandlebtn(false);
      setUname(json.name);
      setUid(json.id);
      return navigate("/");
    } else {
      setHandlebtn(false);
      setUname(json.name);
      setUid(json.id);
      navigate("/");
    }
  }

  return (
    <div className="flex  flex-column  text-end justify-content-center align-items-center overflow-hidden" style={{width:"100vw", height:"100vh"}} >
      <div className="" style={{padding:"20px"}} ><Link
        style={{ textDecoration:"none" }}
        to="/"
      >
       &#10060;
      </Link></div>
      <div className="row  justify-content-center ">
      
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
        <div className="mb-3 text-center fw-bolder fs-1">Login</div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={loginMail}
            type="email"
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
            onChange={loginPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={loginDetail}>
          Login
        </button>
        <Link className="px-4 link-underline-dark " to="/signup">
          i'm new
        </Link>
      </form>
    </div>
    </div>
    
  );
}
