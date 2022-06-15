import React from "react";
import "./nested1.css";

const EmployeeName = () => "Lokesh Jawale";
const Age = () => 25;
const Designation = () => "software engineer";
const JobLocatioN = () => "Pune";

function Nested1() {
  return (
    <div className="employeeDetails">
      <h1>Employee Details</h1>
      Name: <EmployeeName />
      <br></br>
      Age:
      <Age />
      <br></br>
      Designation:
      <Designation />
      <br></br>
      JobLocation:
      <JobLocatioN />
    </div>
  );
}

export default Nested1;
