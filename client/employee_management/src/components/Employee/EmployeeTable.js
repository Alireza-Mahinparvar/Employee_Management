import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const EmployeeTable = ({ filteredEmployees, openEditForm, deleteEmployee }) => {
  const columns = React.useMemo(
    () => [
      {
        // Code and Assigned will be shown in Admin page which will be implement in the future
        columns: [
          { Header: "ID", accessor: "e_id", minWidth: 50, maxWidth: 60 },
          { Header: "First Name", accessor: "firstname" },
          { Header: "Last Name", accessor: "lastname" },
          { Header: "Code", accessor: "code", show: false },
          { Header: "Profession", accessor: "role" },
          // { Header: "City", accessor: "city" },
          { Header: "Email", accessor: "email" },
          { Header: "Assigned", accessor: "assigned", show: false },
          {
            Header: "Actions",
            id: "actions",
            width: 140,
            Cell: ({ row }) => {
              return (
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => openEditForm(row.id)}
                  >
                    Edit
                  </Button>
                  <StyledButton
                    variant="danger"
                    size="sm"
                    onClick={() => deleteEmployee(row.id)}
                  >
                    Delete
                  </StyledButton>
                </div>
              );
            },
          },
        ],
      },
    ],
    []
  );

  return (
    <ReactTable
      className="-striped -highlight"
      data={filteredEmployees}
      columns={columns}
      defaultPageSize={10}
      style={{
        backgroundColor: "white",
        borderColor: "#a5a4a4",
        borderRadius: "5px",
        borderStyle: "outset",
      }}
    />
  );
};

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default EmployeeTable;
