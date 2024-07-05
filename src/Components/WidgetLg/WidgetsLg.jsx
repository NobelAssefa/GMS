import React from 'react'
import "./widgetsLg.css"
export default function WidgetsLg() {

  const Button = ({type}) => {
    return <button className = {"widgetLgbutton" +" " + type}>{type}</button>
  };
  return (
    <div className='widgetLg'>
        <span className="widgetLgTitle">Latest transaction</span>
        <table className="widgetLgtable">
          <tr className="widgetLgtr">
            <th className="widgetLgth">Customer</th>
            <th className="widgetLgth">Date</th>
            <th className="widgetLgth">Amount</th>
            <th className="widgetLgth">Status</th>
          </tr>
          <tr className="widgetLgtr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLguserimg" />
              <span className="widgetLgName">Naima tilahun</span>
            </td>
            <td className="widgetLgdate">2 Jun 2024</td>
            <td className="widgetLgAmount">$200.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>

          </tr>
          <tr className="widgetLgtr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLguserimg" />
              <span className="widgetLgName">Naima tilahun</span>
            </td>
            <td className="widgetLgdate">2 Jun 2024</td>
            <td className="widgetLgAmount">$200.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>

          </tr>
          <tr className="widgetLgtr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLguserimg" />
              <span className="widgetLgName">Naima tilahun</span>
            </td>
            <td className="widgetLgdate">2 Jun 2024</td>
            <td className="widgetLgAmount">$200.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>

          </tr>
          <tr className="widgetLgtr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="widgetLguserimg" />
              <span className="widgetLgName">Naima tilahun</span>
            </td>
            <td className="widgetLgdate">2 Jun 2024</td>
            <td className="widgetLgAmount">$200.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>

          </tr>
        </table>
    </div>
  )
}
