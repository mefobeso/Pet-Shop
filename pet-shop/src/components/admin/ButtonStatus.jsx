import React from 'react'
import "./widgetsLG/widgetslg.css"

export default function ButtonStatus  ({type}) {
    return  <button className={"widgetLgButton " + type}>{type}</button>
}