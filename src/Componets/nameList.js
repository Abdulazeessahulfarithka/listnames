import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { yellow } from "@mui/material/colors";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },

  {
    field: "description",
    headerName: "Name Meaning",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function DataTable({ user }) {
  return (
    <div
      style={{
        height: 300,
        width: "70%",
        marginBottom: "10px",
        backgroundColor: "yellow",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 3 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
