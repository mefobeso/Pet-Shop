import React from 'react'
import './home.css'
import FeaturedInfor from '../../components/admin/featuredinfor/FeaturedInfor.jsx'
import WidgetsSM from '../../components/admin/widgetsSM/WidgetsSM'
import WidgetsLG from '../../components/admin/widgetsLG/WidgetsLG'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfor />
           <div className="homeWidgets">
               <WidgetsSM/>
               <WidgetsLG/>
           </div>
        </div>
    )
}
