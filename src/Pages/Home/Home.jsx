import React from 'react'
import "./home.css"
import Chart from '../../Components/chart/Chart'
import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import { Userdata } from '../../Dummy Data'
import WidgetsSm from '../../Components/WidgetSm/WidgetsSm'
import WidgetsLg from '../../Components/WidgetLg/WidgetsLg'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart data = {Userdata} title="User Analytics" grid dataKey="Active User"/>
      <div className="widgets">
        <WidgetsSm/>
        <WidgetsLg/>
      </div>
    </div>
  )
}
