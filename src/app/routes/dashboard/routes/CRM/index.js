import React from "react";
import Spending from "./Spending";
import RecentActivity from "./RecentActivity";
import Recentpurchases from "./Recentpurchases";
import WelComeCard from "./WelComeCard";
import Cards from "./Cards";
import Widget from "components/Widget/index";
import {recentActivity} from "./data";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import PopUp from './PopUp';




const CRM = ({match}) => {
  return (

    <div className="dashboard animated slideInUpTiny animation-duration-3">

      <ContainerHeader match={match} title={<IntlMessages id="Ema's Dashboard"/>}/>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <Widget styleName="p-4">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <WelComeCard/>
              </div>


              <div className=" jr-audi-col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <Recentpurchases/>
                </div>

              <div className="jr-visit-col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <Spending/>
              </div>
          
              </div>
          </Widget>
        </div>
      
 
      
        <div className="col-xl-8 col-lg-8 col-md-12 col-12 ">
        <Widget styleName="p-4">
      
            <Cards/>
        <div className="col-xl-12 col-lg-12 col-md-12 col-12 "   >
          
          <PopUp/>
          
        </div>
       
        </Widget>
                
          </div>
  

        <div className="col-xl-4 col-lg-4 col-md-12 col-12 order-sm-2">
          <Widget>
            <RecentActivity recentList={recentActivity} shape="rounded"/>
          </Widget>
          </div>
        
      </div>

    </div>
  );
};

export default CRM;
