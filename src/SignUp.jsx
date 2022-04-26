import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [data, setData] = useState({
    email: "",
    hp: "",
    firstname: "",
    lastname: "",
    grup: "member",
    role: "string",
    tgl_lahir: "",
    jenis_kelamin: 0,
    password: "",
    referral_code: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    //console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();

    const dataPost = {
      email: data.email,
      hp: data.hp,
      firstname: data.firstname,
      lastname: data.lastname,
      grup: data.grup,
      role: data.role,
      tgl_lahir: data.tgl_lahir,
      jenis_kelamin: JSON.parse(data.jenis_kelamin),
      password: data.password,
      referral_code: data.referral_code,
    };
    console.log(dataPost);
    const config = {
      headers: { "content-type": "application/json" },
    };

    axios
      .post("http://202.157.184.201:8000/users", dataPost, config)
      .then((response) => {
        console.log(response);
        alert(response.data.status.kode);
        window.location.href = "/sign-in";
      });
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <h4>Sign Up</h4>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          name="firstname"
          className="form-control"
          placeholder="First name"
          onChange={(e) => handle(e)}
          value={data.firstname}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          name="lastname"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => handle(e)}
          value={data.lastname}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => handle(e)}
          value={data.email}
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
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="number"
          name="hp"
          className="form-control"
          placeholder="Enter phone number"
          onChange={(e) => handle(e)}
          value={data.hp}
        />
      </div>
      <div className="mb-3">
        <label>Gender</label>
        Male
        <input
          type="radio"
          name="jenis_kelamin"
          onChange={(e) => handle(e)}
          value={1}
        />
        Female
        <input
          type="radio"
          name="jenis_kelamin"
          onChange={(e) => handle(e)}
          value={2}
        />
      </div>
      <div className="mb-3">
        <label>Date of birth</label>
        <input
          type="date"
          name="tgl_lahir"
          onChange={(e) => handle(e)}
          value={data.tgl_lahir}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
