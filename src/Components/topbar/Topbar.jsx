import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
   <div className="topbar">
    <div className="topbarWrapper">
        <div className="topleft">
            <div className="logo">DamascusAdmin</div>
        </div>
        <div className="topright">
            <div className="topbarIconcontainer">
                <NotificationsIcon></NotificationsIcon>
                <span className="topiconbadge">2</span>
            </div>
            <div className="topbarIconcontainer">
                <LanguageIcon></LanguageIcon>
                <span className="topiconbadge">2</span>
            </div> <div className="topbarIconcontainer">
                <SettingsIcon></SettingsIcon>
                
            </div>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="avatar" />
        </div>
    </div>
   </div>
  )
}


