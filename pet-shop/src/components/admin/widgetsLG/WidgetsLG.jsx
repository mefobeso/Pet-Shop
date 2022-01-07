import React from 'react'
import "./widgetslg.css"

export default function WidgetsLG() {

    const Button = ({type}) =>{
        return  <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Lastest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="wigdetLgUser">
                        <span className="widgetLgUsername">Huu Tin</span>
                    </td>
                    <td className="WidgetLgDate">31 Dec 2021</td>
                    <td className="WidgetLgAmount">$200</td>
                    <td className="WidgetLgStatus"><Button type="Pending"></Button></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="wigdetLgUser">
                        <span className="widgetLgUsername">Huu Tin</span>
                    </td>
                    <td className="WidgetLgDate">31 Dec 2021</td>
                    <td className="WidgetLgAmount">$200</td>
                    <td className="WidgetLgStatus"><Button type="Declined"></Button></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="wigdetLgUser">
                        <span className="widgetLgUsername">Huu Tin</span>
                    </td>
                    <td className="WidgetLgDate">31 Dec 2021</td>
                    <td className="WidgetLgAmount">$200</td>
                    <td className="WidgetLgStatus"><Button type="Approved"></Button></td>
                </tr>
            </table>
        </div>
    )
}

