import React,{useEffect} from 'react'
import './home.css'
import {useHistory} from 'react-router-dom'
import FeaturedInfor from '../../components/admin/featuredinfor/FeaturedInfor.jsx'
import WidgetsSM from '../../components/admin/widgetsSM/WidgetsSM'
import WidgetsLG from '../../components/admin/widgetsLG/WidgetsLG'
import Chart from '../../components/admin/chart/Chart'

export default function Home() {
    const history = useHistory()

    useEffect(() => {
      if(!localStorage.getItem('token')){
          history.push('/adminLogin')
      }
    })
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
