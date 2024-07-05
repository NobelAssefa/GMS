import React from "react";
import "./widgetsSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function WidgetsSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="profile Photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abel Assefa</span>
            <span className="widgetSmJobcatagory">Software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <VisibilityIcon className="widgetsmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="profile Photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abel Assefa</span>
            <span className="widgetSmJobcatagory">Software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <VisibilityIcon className="widgetsmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="profile Photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abel Assefa</span>
            <span className="widgetSmJobcatagory">Software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <VisibilityIcon className="widgetsmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="profile Photo"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Abel Assefa</span>
            <span className="widgetSmJobcatagory">Software engineer</span>
          </div>
          <button className="widgetSmbutton">
            <VisibilityIcon className="widgetsmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}
