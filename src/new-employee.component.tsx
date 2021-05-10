import * as React from "react";
import { EmployeeModel } from "./employee.model";

const NewEmployeeComponent = (backToList: any) => {
  const [employee, setEmployee] = React.useState<EmployeeModel | any>({
    Position: "Junior"
  });

  const addNewEmployee = () => {
    const apiUrl = `https://6093bbe7a7e53a0017951709.mockapi.io/Employees`;
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee) // body data type must match "Content-Type" header
    }).then((res) => {
      return res.json();
    });
  };

  const onChange = (event: any) => {
    const newEmployee: any = employee || {};
    const name = event.target.name;
    newEmployee[name] = event.target.value;
    setEmployee(newEmployee);
    console.log(employee);
  };

  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input
          name="Name"
          type="text"
          className="form-control"
          placeholder="name@example.com"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          name="Email"
          type="email"
          className="form-control"
          placeholder="name@example.com"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Position</label>
        <select name="Position" className="form-control" onChange={onChange}>
          <option value={"Junior"}>Junior</option>
          <option value={"Senior"}>Senior</option>
        </select>
      </div>

      <button
        type="submit"
        onClick={backToList}
        className="btn btn-primary mb-2"
      >
        Back
      </button>
      <button
        onClick={() => addNewEmployee && addNewEmployee()}
        className="btn btn-primary mb-2"
      >
        Add employee
      </button>
    </form>
  );
};

export default NewEmployeeComponent;
