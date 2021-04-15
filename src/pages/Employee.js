import React from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";


class Employee extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=500&nat=us")
      .then((records) => {
        let empdata = records.data.results;
        let employeeRecordstemp = [];
        console.log(empdata)
        for (let i = 0; i < empdata.length; i++) {
          let erecord = {
            name: empdata[i].name.first + " " + empdata[i].name.last,
            email: empdata[i].email,
            image: empdata[i].picture.medium,
            phone: empdata[i].cell,
            dob: empdata[i].dob.date,
          };
          employeeRecordstemp.push(erecord);
        }
        console.log(employeeRecordstemp);
        this.setState({ employeeRecords: employeeRecordstemp });
      });
  };

  render() {
    return (
      <div>
        <h2>Employee Details</h2>
        <EmployeeData employees={this.state.employeeRecords} />
      </div>
    );
  }
}

export default Employee;