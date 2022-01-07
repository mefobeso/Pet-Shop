import React from 'react'
import './widgetssm.css'
import {Visibility} from '@material-ui/icons'

export default function WidgetsSM() {
    return (
        <div className="widgetSm">
            <span className="WidgetSmTitle">Products</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="/assets/img/product/fashion/1.jpg" alt="" className="widgetSmImg" />
                    <div className="wigdetProduct">
                        <span className="widgetSmProName">Shoe nike air force one</span>
                        <span className="widgetSmProPrice">$50</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="/assets/img/product/fashion/1.jpg" alt="" className="widgetSmImg" />
                    <div className="wigdetProduct">
                        <span className="widgetSmProName">Shoe nike air force one</span>
                        <span className="widgetSmProPrice">$50</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                    </button>
                </li>
            </ul>
        </div>
    )
}
