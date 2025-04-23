import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { Productdata } from "../../Dummy Data";
import Chart from "../../Components/lineChart/Chart";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContanier">
        <h1 className="productTitle">Edit Product</h1>
        <Link to="/newProduct">
          <button className="productButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopleft">
          <Chart
            data={Productdata}
            title="Sales Analytics"
            grid
            dataKey="Sales"
          />
        </div>
        <div className="productTopright">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/13650607/pexels-photo-13650607.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="productInfoimg"
            />
            <label className="productName">jbl headset</label>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfokey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">sales:</span>
              <span className="productInfoValue">512</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfokey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Jbl Headset"
              className="productInput"
            />
            <label>InStock</label>
            <select name="stock" id="stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>InStock</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productupload">
                <img src="https://images.pexels.com/photos/13650607/pexels-photo-13650607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="ProductUploadimg" />
                <label for="upload">
                <PublishIcon/>
                </label>
                <input type="file" id="upload" name="upload"  style={{display:"none"}}>
                
                </input>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
