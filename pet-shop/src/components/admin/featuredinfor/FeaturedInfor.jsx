import React from 'react'
import "./featuredinfor.css"
import { ArrowDownward,ArrowUpward} from '@material-ui/icons';

export default function FeaturedInfor() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,2223</span>
                    <span className="featuredMoneyRate">
                        -10,2 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,323</span>
                    <span className="featuredMoneyRate">
                        +15,2 <ArrowUpward className="featuredIcon "/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,223</span>
                    <span className="featuredMoneyRate">
                        -20,2 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
