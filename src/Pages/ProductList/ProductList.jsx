import React from "react";
import "./productlist.css";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../Dummy Data";
import { Link } from "react-router-dom";
export default function ProductList() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListuser">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 100 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 100,
    },
    {
      field: "price",
      headerName: "Proce",
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
          <div className="productListAction">
            <Link to = {"/product/" + params.row.id}  >
              <button className="productListEdit" >Edit</button>
            </Link>
            <DeleteOutlineIcon className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
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
