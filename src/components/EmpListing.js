import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpListing() {
  const [emdata, setemdata] = useState("");
  const navigate = useNavigate();

  const detailsHandler = (id) => {
    navigate("/employee/detail/" + id);
  };

  const deleteHandler = (id) => {
    fetch(" http://localhost:3000/employee/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Are you sure you want to delete");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editBtnHandler = (id) => {
    navigate("/employee/edit/" + id);
  };

  useEffect(() => {
    fetch(" http://localhost:3000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setemdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h4>Employee listing</h4>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td className="bg-dark text-white">ID</td>
                <td className="bg-dark text-white">Name</td>
                <td className="bg-dark text-white">E-mail</td>
                <td className="bg-dark text-white">Phone</td>
                <td className="bg-dark text-white">Actions</td>
              </tr>
            </thead>
            <tbody>
              {emdata &&
                emdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          editBtnHandler(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          deleteHandler(item.id);
                        }}
                        className="btn btn-danger m-1"
                      >
                        Delete
                      </a>
                      <a
                        onClick={() => {
                          detailsHandler(item.id);
                        }}
                        className="btn btn-info"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpListing;
