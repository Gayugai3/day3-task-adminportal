import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFormik } from "formik";

function UserView() {
  const params = useParams();
  // console.log(params);

  // const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
  });

  let getUsers = async () => {
    try {
      const user = await axios.get(
        `https://6394ae6686829c49e8243706.mockapi.io/user/${params.id}`
      );
      myFormik.setValues(user.data);
      console.log(user.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary ">
            Userview - {params.id}
          </h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="50%">
              <tbody>
                <tr>
                  <td>User Name</td>
                  <td>{myFormik.values.username}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{myFormik.values.email}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{myFormik.values.country}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{myFormik.values.state}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{myFormik.values.city}</td>
                </tr>
              </tbody>
            </table>
            <div className="col-lg-12 mt-3">
              <Link
                to={`/portal/user-list`}
                className="btn btn-primary btn-sm mr-1 float-right"
              >
                BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserView;
