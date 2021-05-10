import * as React from "react";
import PaginationComponent from "./pagination.component";
import NewEmployeeComponent from "./new-employee.component";

import { EmployeeModel } from "./employee.model";
import { PAGE_SIZE, PageModel } from "./page.model";

const EmployeesComponent = () => {
  const [employees, setEmployees] = React.useState<PageModel[] | any>(
    undefined
  );
  const [isAddEmployee, setIsAddEmployee] = React.useState<boolean>(false);

  const fetchEmployees = async (page: number) => {
    const apiUrl = `https://6093bbe7a7e53a0017951709.mockapi.io/Employees?page=${page}&limit=5&sortBy=Name`;
    fetch(apiUrl).then(async (res) => {
      if (res.ok) {
        setEmployees(await res.json());
      }
    });
  };

  React.useEffect(() => {
    // Update the document title using the browser API
    if (!employees) {
      fetchEmployees(1);
    }
  }, [fetchEmployees]);

  return (
    <>
      <div>
        A page which displays this table and has the “+ New” button as well:
      </div>
      <div>
        I am using (https://www.mockapi.io/) and my api enpoint
        https://mockapi.io/projects/6093bbe7a7e53a001795170a
      </div>
      <div>
        I have a set of employee which 57 items and implement a pagination for
        every 5 items (per table page).
      </div>

      {!isAddEmployee && (
        <>
          <div style={{ minHeight: 550 }}>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
              </tr>
              {employees?.items?.map((employee: EmployeeModel) => (
                <tr key={employee.Id}>
                  <td>{employee.Name}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.Position}</td>
                </tr>
              ))}
              <tr key={0}>
                <td colSpan={3}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsAddEmployee(!isAddEmployee)}
                  >
                    + New
                  </button>
                </td>
              </tr>
            </table>
          </div>

          <PaginationComponent
            itemsPerPage={PAGE_SIZE}
            totalItems={employees?.count}
            loadPage={fetchEmployees}
          />
        </>
      )}

      {isAddEmployee && (
        <NewEmployeeComponent
          backToList={() => setIsAddEmployee(!isAddEmployee)}
        />
      )}
    </>
  );
};

export default EmployeesComponent;
