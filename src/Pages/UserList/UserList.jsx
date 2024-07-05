import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../Dummy Data";
import {
  Link,
} from "react-router-dom";
export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id)=>{
    setData(data.filter((item)=>item.id !== id))

  }
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "userName",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListuser">
            <img src={params.row.avatar} alt="" className="userListUserImg" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 110,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to = {"/user/" + params.row.id}  >
              <button className="userListEdit" >Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </div>
        );
      },
    },
  ];

  return (
    <div className="UserList">
      <DataGrid
        disableRowSelectionOnClick
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
