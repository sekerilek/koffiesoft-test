import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  }
  function submit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post("http://202.157.184.201:8000/login", formData, config)
      .then((response) => {
        alert(response.data.status.kode);
        window.location.href = "/welcome";
        localStorage.setItem("firstLogin", true);
      });
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="email"
            name="username"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => handle(e)}
            value={data.username}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => handle(e)}
            value={data.password}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
