import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function Userlist() {
  const [userlist, setUserlist] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get(
        "https://6394ae6686829c49e8243706.mockapi.io/user"
      );
      setUserlist(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      console.log("Destroyed");
    };
  }, []);

  let handleDelete = async (id) => {
    try {
      const confirmdata = window.confirm("Do you want to delete this user?");
      if (confirmdata) {
        await axios.delete(
          `https://6394ae6686829c49e8243706.mockapi.io/user/${id}`
        );
        getUsers();
      }
    } catch (error) {
      alert("Error deleting");
    }
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="/portal/user-create"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                // cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userlist.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <th>
                          <Link
                            to={`/portal/user-view/${user.id}`}
                            className="btn btn-info btn-sm mr-1"
                          >
                            View
                          </Link> 
                          <Link
                            to={`/portal/user-edit/${user.id}`}
                            className="btn btn-primary btn-sm mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="btn btn-danger btn-sm mr-1"
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userlist;
