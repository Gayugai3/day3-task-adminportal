import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "*Required";
      } else if (values.username.length < 3) {
        errors.username = "Enter atleast 4 letters";
      } else if (values.username.length > 15) {
        errors.username =
          "Username name shouldn't exit more than 15 characters";
      }

      if (!values.email) {
        errors.email = "*Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Enter a valid email address";
      }

      if (!values.country) {
        errors.country = "*Required";
      }
      if (!values.state) {
        errors.state = "*Required";
      }
      if (!values.city) {
        errors.city = "*Required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          "https://6394ae6686829c49e8243706.mockapi.io/user",
          values
        );
        navigate("/portal/user-list");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={myFormik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              name="username"
              value={myFormik.values.username}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${
                myFormik.errors.username ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
          </div>
          <div className="col-lg-6">
            <label>E-mail</label>
            <input
              name="email"
              value={myFormik.values.email}
              onChange={myFormik.handleChange}
              type="text"
              className={`form-control ${
                myFormik.errors.email ? "is-invalid" : "is-valid"
              }`}
            />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>
          <div className="col-lg-4">
            <label>Country</label>
            <select
              name="country"
              value={myFormik.values.country}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.country ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>----Select----</option>
              <option value={"IN"}>India</option>
              <option value={"USA"}>United States of America</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div>
          <div className="col-lg-4">
            <label>State</label>
            <select
              name="state"
              value={myFormik.values.state}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.state ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>----Select----</option>
              <option value={"TN"}>Tamilnadu</option>
              <option value={"KL"}>Kerala</option>
              <option value={"NY"}>New york</option>
              <option value={"WT"}>Washington</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
          </div>
          <div className="col-lg-4">
            <label>City</label>
            <select
              name="city"
              value={myFormik.values.city}
              onChange={myFormik.handleChange}
              className={`form-control ${
                myFormik.errors.city ? "is-invalid" : "is-valid"
              }`}
            >
              <option value={""}>----Select----</option>
              <option value={"MD"}>Madras</option>
              <option value={"MDU"}>Madurai</option>
              <option value={"LV"}>Las Vegas</option>
              <option value={"LA"}>Los Angeles</option>
              <option value={"TY"}>Tokyo</option>
              <option value={"SC"}>Seattle</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>
          <div className="col-lg-12 mt-3">
            <input
              disabled={isLoading}
              type="Submit"
              value={isLoading ? "Loading..." : "Create"}
              className="btn btn-primary float-right"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserCreate;
