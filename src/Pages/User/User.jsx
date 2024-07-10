import React from "react";
import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="userShowTopImg"
            />
            <div className="userShowTopTitle">
              <span className="userTopUsername">Abel</span>
              <span className="userTopUserTitle">Software engineering</span>
            </div>
          </div>

          <div className="useShowBottom">
            <span className="userBottomTitle">Account Detail</span>

            <div className="userBottomInfo">
              <PermIdentityIcon className="userBottomIcon" />
              <span className="userBottomInfoTitle">Abel.a</span>
            </div>

            <div className="userBottomInfo">
              <CalendarTodayIcon className="userBottomIcon" />
              <span className="userBottomInfoTitle">10.2.2000</span>
            </div>
            <span className="userBottomTitle">Contact Detail</span>

            <div className="userBottomInfo">
              <SmartphoneIcon className="userBottomIcon" />
              <span className="userBottomInfoTitle">+251 941134055</span>
            </div>

            <div className="userBottomInfo">
              <MailOutlineIcon className="userBottomIcon" />
              <span className="userBottomInfoTitle">abelnati124@gmail.com</span>
            </div>
            <div className="userBottomInfo">
              <GpsNotFixedIcon className="userBottomIcon" />
              <span className="userBottomInfoTitle">Addis Ababa| Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateForm">
            <div className="userupdateRight">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Abel.a"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>BirthDate</label>
                <input
                  type="text"
                  placeholder="10.2.2000"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone number</label>
                <input
                  type="text"
                  placeholder="+251 941134055"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="abelnati124@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Addis Ababa| Ethiopia"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                  className="userUploadImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="publishIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="UserUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
