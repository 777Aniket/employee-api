import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [validation, setValidatiojn]=useState(false);
  const navigate=useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    const empData = { id, name, email, phone, isActive };

    fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("save succesfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }; 

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const activeHandler = (e) => {
    setIsActive(e.target.checked);
  };
   
  const validationHandler = (e) => {
    setValidatiojn(true);
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={submitHandler}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                      
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onChange={nameHandler}
                        className="form-control"
                        onMouseDown={validationHandler}
                      ></input>
                      { name.length==0 && validation && <span className="text-danger" >Enter the Name</span>}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                       <input
                        type="email"
                        value={email}
                        onChange={emailHandler}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={phoneHandler}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={isActive}
                        onChange={activeHandler}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> */}
    </div>
  );
};

export default EmpCreate;
