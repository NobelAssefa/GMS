import React from "react";
import "./newUser.css";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">NewUser</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="userName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="full name" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="password" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="phone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="address" />
        </div>
        <div className="newUserItemGender">
          <label htmlFor="">Gender</label>
          <label htmlFor="male">Male</label>
          <input type="radio" name="male" id="male" value="male" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="female" id="female" value="female" />
        </div>

        <div className="newUserItem">
          <label htmlFor="">Active</label>
          <select className="newUserItemSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="userNewButton">Create</button>
        </div>
      </form>
    </div>
  );
}
