import React from 'react'
import './home.css'
import FeaturedInfor from '../../components/admin/featuredinfor/FeaturedInfor.jsx'
import WidgetsSM from '../../components/admin/widgetsSM/WidgetsSM'
import WidgetsLG from '../../components/admin/widgetsLG/WidgetsLG'
import Chart from '../../components/admin/chart/Chart'

export default function Home() {
    return (
        <div className="homeAdmin">
            <FeaturedInfor />
            <Chart />
           <div className="homeWidgets">
               <WidgetsSM/>
               <WidgetsLG/>
           </div>
        </div>
    )
}
