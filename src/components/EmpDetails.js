import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();
  const [empData, setEmpData] = useState({});

  useEffect(() => {
    fetch(" http://localhost:3000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(empData);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h1>Employee details</h1>
          <div className="card-body"></div>

          {empData && (
           <div> <h2>
              The Employee Name is : {empData.name} ({empData.id})
            </h2>
            <h2>
              Contact details
            </h2>
            <h4>
              Email : {empData.email}
            </h4>
            <h4>
              Phone : {empData.phone}
            </h4>
            <Link to="/" className="btn btn-dark"> Back to listing </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;
