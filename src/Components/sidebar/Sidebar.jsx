import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">
            <div className="sidebarMenu">
                <h1 className="title">Dashbaord</h1>
                <ul className="sideBarList">
                    <li className="sidebarListItem active" >
                    <LineStyleIcon className='sideBarIcons'/>
                    Home
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon  className='sideBarIcons'/>
                    Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon  className='sideBarIcons'/>
                    Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h1 className="title">Quick Menu</h1>
                <ul className="sideBarList">
                    <li className="sidebarListItem active" >
                    <PersonOutlineOutlinedIcon className='sideBarIcons'/>
                    User
                    </li>
                    <li className="sidebarListItem">
                    <StorefrontOutlinedIcon  className='sideBarIcons'/>
                    Product
                    </li>
                    <li className="sidebarListItem">
                    <PaidOutlinedIcon  className='sideBarIcons'/>
                    Transaction 
                    </li>
                    <li className="sidebarListItem">
                    <BarChartOutlinedIcon  className='sideBarIcons'/>
                    Report 
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h1 className="title">Notification</h1>
                <ul className="sideBarList">
                    <li className="sidebarListItem active" >
                    <EmailOutlinedIcon className='sideBarIcons'/>
                    Mail
                    </li>
                    <li className="sidebarListItem">
                    <DynamicFeedOutlinedIcon  className='sideBarIcons'/>
                    FeedBack
                    </li>
                    <li className="sidebarListItem">
                    <ChatBubbleOutlineOutlinedIcon  className='sideBarIcons'/>
                    Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h1 className="title">Staff</h1>
                <ul className="sideBarList">
                    <li className="sidebarListItem active" >
                    <WorkOutlineOutlinedIcon className='sideBarIcons'/>
                    Manage
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon  className='sideBarIcons'/>
                    Analytics
                    </li>
                    <li className="sidebarListItem">
                    <ErrorOutlinedIcon  className='sideBarIcons'/>
                    Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
