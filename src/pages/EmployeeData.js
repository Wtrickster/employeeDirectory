import React from "react";
import { MDBDataTable } from "mdbreact";

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 500,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 300,
      },
      {
        label: "DOB",
        field: "dob",
        sort: "asc",
        width: 250,
      }
    ],
    rows:props.employees
  };
  console.log("Props", props);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default EmployeeData;