import React, { useEffect } from 'react'
import Base from '../Base/Base'
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const navigate=useNavigate("/");

    useEffect (()=>{
    if(!localStorage.getItem("token")){
       navigate("/login", {replace:true}) 
    }
    
},[]);

  return (
    <Base title={"Dashboard"} >                 
                        
<div className='chart'>
<div>
  <div class="Cards_custom__card__style__1fFQJ">
    <div class="Cards_card__header__1H8GS"></div>
      <div class="card Cards_card__border__xEgVC ">
        <div class="Dashboard_space__between__a7GVw">
         <div class="Dashboard_chart__topic__3JSqN">Codekata</div>
           <div class="Dashboard_chart__points__area__3tBUO">
            <div class="d-flex justify-content-end flex-column mr-3">
              <span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Today : 
               <span class="Dashboard_chart__points__font__22FyX">0</span></span>
                <span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Total : 
                 <span class="Dashboard_chart__points__font__22FyX">500</span></span></div>
                  <div class="d-flex justify-content-end flex-column">
                    <div class="d-flex align-items-center">
                     <span class="Dashboard_max_score_color__2dHY4"></span>
                      <p class="Dashboard_info_text__3ebg6">Max Scores : 530</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="Dashboard_points_earned_color__c2yTG"></span>
                      <p class="Dashboard_info_text__3ebg6">Points Earned : 10</p>
                    </div>
                    </div>
               </div></div>
             <div class="Dashboard_barCont__3wUzO"><svg width="400" height="140">
                <g class="axis x" transform="translate(30, 110)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0.5,6V0.5H370.5V6"></path>
                  <g class="tick" opacity="1" transform="translate(38.94736842105264,0)">
                   <line stroke="currentColor" y2="6"></line>
                    <text fill="currentColor" y="9" dy="0.71em">SAT</text></g>
                    <g class="tick" opacity="1" transform="translate(87.63157894736841,0)">
                     <line stroke="currentColor" y2="6"></line>
                      <text fill="currentColor" y="9" dy="0.71em">SUN</text> </g>
                     <g class="tick" opacity="1" transform="translate(136.31578947368422,0)">
                       <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">MON</text></g>
                     <g class="tick" opacity="1" transform="translate(185,0)">
                      <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">TUE</text></g>
                     <g class="tick" opacity="1" transform="translate(233.68421052631578,0)">
                       <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">WED</text></g>
                     <g class="tick" opacity="1" transform="translate(282.3684210526316,0)">
                        <line stroke="currentColor" y2="6"></line>
                         <text fill="currentColor" y="9" dy="0.71em">THU</text></g>
                     <g class="tick" opacity="1" transform="translate(331.0526315789474,0)">
                        <line stroke="currentColor" y2="6"></line>
                         <text fill="currentColor" y="9" dy="0.71em">FRI</text></g></g>
                     <g transform="translate(30, 20)">
                     <g transform="translate(29.21052631578948, 90)">
                        <rect width="19.473684210526315" height="0" fill="#B182FF"></rect>
                        <rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect>
                          <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
                           <g transform="translate(77.89473684210526, 90)">
                            <rect width="19.473684210526315" height="0" fill="#B182FF"></rect>
                            <rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect>
                            <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
                            <g transform="translate(126.57894736842105, 90)">
                             <rect width="19.473684210526315" height="0" fill="#B182FF"></rect>
                             <rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect>
                             <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
                            <g transform="translate(175.26315789473685, 90)">
                              <rect width="19.473684210526315" height="0" fill="#B182FF"></rect>
                              <rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect>
                               <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
                            <g transform="translate(223.94736842105263, 0)">
                               <rect width="19.473684210526315" height="90" fill="#B182FF"></rect>
                               <rect width="19.473684210526315" height="90" fill="#FFBEBE"></rect>
                                <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">10.00</text></g>
                            <g transform="translate(272.63157894736844, 90)">
                               <rect width="19.473684210526315" height="0" fill="#B182FF"></rect>
                               <rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect>
                               <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
                            <g transform="translate(321.3157894736842, 90)">
                               <rect width="19.473684210526315" height="0" fill="#B182FF"></rect>
                               <rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect>
                                <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text>
                            </g>
                        </g>   
                    </svg></div>
                    <div class="Dashboard_space__between__a7GVw">
                        <div class="" style={{cursor: "pointer"}}> </div>
                        <div class="">28/7/2023 - 03/11/2023</div>
                        <div class="" style={{cursor: "pointer"}}></div>
                     </div>
            </div>
        </div>
</div>





<div class="mt-3">
    <div class="Cards__style">
        <div class="Cards__header"></div>
        <div class="card ">
<div class="Dashboard">
  <div class="Dashboard_char">Webkata</div>
   <div class="Dashboard_chart__point">
    <div class="d-flex justify-content-end flex-column mr-3">
     <span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Today : 
     <span class="Dashboard_chart__points__font__22FyX">0</span></span>
     <span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Total :
     <span class="Dashboard_chart__points__font__22FyX">2240</span></span></div>
     <div class="d-flex justify-content-end flex-column">
        <div class="d-flex align-items-center">
          <p class="Dashboard_info_text__3ebg6">Max Scores</p></div>
            <div class="d-flex align-items-center">
                <p class="Dashboard_info_text__3ebg6">Points Earned</p>
            </div>
        </div>
    </div>
</div>
                    
    <div class="Dashboard_barCont__3wUzO">
        <svg width="400" height="140">
            <g class="axis x" transform="translate(30, 110)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                <path class="domain" stroke="currentColor" d="M0.5,6V0.5H370.5V6"></path>
            <g class="tick" opacity="1" transform="translate(38.94736842105264,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">SAT</text></g>
            <g class="tick" opacity="1" transform="translate(87.63157894736841,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">SUN</text>            
            </g>
             <g class="tick" opacity="1" >
                <line stroke="currentColor" y2="6"></line>
                    <text fill="currentColor" y="9" dy="0.71em">MON</text></g>
                    <g class="tick" opacity="1" transform="translate(185,0)">
                    <line stroke="currentColor" y2="6"></line>
                    <text fill="currentColor" y="9" dy="0.71em">TUE</text></g>
            <g class="tick" opacity="1" transform="translate(233.68421052631578,0)">
                    <line stroke="currentColor" y2="6"></line>
                    <text fill="currentColor" y="9" dy="0.71em">WED</text></g>
            <g class="tick" opacity="1" transform="translate(282.3684210526316,0)">
                    <line stroke="currentColor" y2="6"></line>
                    <text fill="currentColor" y="9" dy="0.71em">THU</text></g>
            <g class="tick" opacity="1" transform="translate(331.0526315789474,0)">
                    <line stroke="currentColor" y2="6"></line>
                    <text fill="currentColor" y="9" dy="0.71em">FRI</text></g></g>
            <g transform="translate(30, 20)">

            <g transform="translate(29.21052631578948, 90)">
                    <rect width="19" height="0" fill="#B182FF"></rect>
                    <rect width="19" height="0" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
            <g transform="translate(77.89473684210526, 90)">
                    <rect width="19" height="0" fill="#B182FF"></rect>
                    <rect width="19" height="0" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
            <g transform="translate(126.57894736842105, 90)">
                    <rect width="19" height="0" fill="#B182FF"></rect>
                    <rect width="19" height="0" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
            <g transform="translate(175.26315789473685, 90)">
                    <rect width="19" height="0" fill="#B182FF"></rect>
                    <rect width="19" height="0" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
            <g transform="translate(223.94736842105263, 0)">
                    <rect width="19" height="90" fill="#B182FF"></rect>
                    <rect width="19" height="90" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">10.00</text></g>
            <g transform="translate(272.63157894736844, 90)">
                    <rect width="19" height="0" fill="#B182FF"></rect>
                    <rect width="19" height="0" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
            <g transform="translate(321.3157894736842, 90)">
                    <rect width="19" height="0" fill="#B182FF"></rect>
                    <rect width="19" height="0" fill="#FFBEBE"></rect>
                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
            </g></svg></div>
         <div class="Dashboard_space__between__a7GVw">
            <div class="" style={{cursor: "pointer"}}></div>
                            <div class="">28/7/2023 - 03/11/2023</div>
                        <div class="" style={{cursor: "pointer"}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>



<div class="Dashboard_line__container__i2x_7">
    <div class="Dashboard_space__between__a7GVw">
        <div class="Dashboard_chart__topic__3JSqN">Task</div>
        <div class="Dashboard_chart__points__area__3tBUO"></div>
    </div>
    <div class="d-flex justify-content-center">
        <svg width="800" height="300"><g transform="translate(30,20)">
            <g class="axis x" transform="translate(30, 235)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                <path class="domain" stroke="currentColor" d="M0.5,6V0.5H740.5V6"></path>
            <g class="tick" opacity="1" transform="translate(0.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">0</text></g>
            <g class="tick" opacity="1" transform="translate(53.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">2</text></g>
            <g class="tick" opacity="1" transform="translate(106.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">4</text></g>
            <g class="tick" opacity="1" transform="translate(159.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">6</text></g>
            <g class="tick" opacity="1" transform="translate(211.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">8</text></g>
            <g class="tick" opacity="1" transform="translate(264.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">10</text></g>
            <g class="tick" opacity="1" transform="translate(317.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">12</text></g>
            <g class="tick" opacity="1" transform="translate(370.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">14</text></g>
            <g class="tick" opacity="1" transform="translate(423.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">16</text></g>
            <g class="tick" opacity="1" transform="translate(476.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">18</text></g>
            <g class="tick" opacity="1" transform="translate(529.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">20</text></g>
            <g class="tick" opacity="1" transform="translate(581.5,0)">
                <line stroke="currentColor" y2="6"></line>  
                <text fill="currentColor" y="9" dy="0.71em">22</text></g>
            <g class="tick" opacity="1" transform="translate(634.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">24</text></g>
            <g class="tick" opacity="1" transform="translate(687.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">26</text></g>
            <g class="tick" opacity="1" transform="translate(740.5,0)">
                <line stroke="currentColor" y2="6"></line>
                <text fill="currentColor" y="9" dy="0.71em">28</text></g> </g>


            <g class="axis y" transform="translate(30, 20)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end">
                <path class="domain" stroke="currentColor" d="M-6,215.5H0.5V0.5H-6"></path>
                <g class="tick" opacity="1" transform="translate(0,215.5)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">7.8</text></g>
                <g class="tick" opacity="1" transform="translate(0,195.95454545454544)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">8.0</text></g>
                <g class="tick" opacity="1" transform="translate(0,176.40909090909096)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">8.2</text></g>
                <g class="tick" opacity="1" transform="translate(0,156.86363636363632)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">8.4</text></g>
                <g class="tick" opacity="1" transform="translate(0,137.31818181818184)">
                   <line stroke="currentColor" x2="-6"></line>
                   <text fill="currentColor" x="-9" dy="0.32em">8.6</text></g>
                <g class="tick" opacity="1" transform="translate(0,117.7727272727272)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">8.8</text></g>
                <g class="tick" opacity="1" transform="translate(0,98.2272727272727)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">9.0</text></g>
                <g class="tick" opacity="1" transform="translate(0,78.68181818181826)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">9.2</text></g>
                <g class="tick" opacity="1" transform="translate(0,59.136363636363605)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">9.4</text></g>
                <g class="tick" opacity="1" transform="translate(0,39.59090909090913)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">9.6</text></g>
                <g class="tick" opacity="1" transform="translate(0,20.04545454545448)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">9.8</text></g>
                <g class="tick" opacity="1" transform="translate(0,0.5)">
                    <line stroke="currentColor" x2="-6"></line>
                    <text fill="currentColor" x="-9" dy="0.32em">10.0</text></g>
            </g>
        <g class="marks">
            <path fill="none" stroke="#B182FF" d="M30,215.455C38.545,190.531,47.089,165.607,56,215.455C64.911,
            265.302,74.187,389.921,83,313.182C91.813,236.443,100.163,-41.655,109,20C117.837,81.655,127.163,483.062,
            136,508.636C144.837,534.21,153.187,183.951,162,20C170.813,-143.951,180.089,-121.595,189,20C197.911,161.595,
            206.455,422.428,215,410.909C223.545,399.39,232.089,115.518,241,20C249.911,-75.518,259.187,17.316,268,
            117.727C276.813,218.138,285.163,326.126,294,313.182C302.837,300.238,312.163,166.362,321,117.727C329.837,
            69.093,338.187,105.699,347,215.455C355.813,325.21,365.089,508.114,374,606.364C382.911,704.614,391.455,
            718.21,400,606.364C408.545,494.518,417.089,257.23,426,117.727C434.911,-21.776,444.187,-63.493,453,
            117.727C461.813,298.948,470.163,703.107,479,899.545C487.837,1095.984,497.163,1084.701,506,997.273C514.837,
            909.845,523.187,746.272,532,508.636C540.813,271.001,550.089,-40.698,559,20C567.911,80.698,576.455,513.791,
            585,508.636C593.545,503.482,602.089,60.078,611,117.727C619.911,175.376,629.187,734.078,638,997.273C646.813,
            1260.468,655.163,1228.156,664,997.273C672.837,766.389,682.163,336.933,691,117.727C699.837,-101.478,708.187,
            -110.433,717,117.727C725.813,345.887,735.089,811.163,744,997.273C752.911,1183.383,761.455,1090.328,770,997.273"></path></g>
        <g class="marks">
            <path fill="none" stroke="#FFBEBE" d="M30,20C38.545,20,47.089,20,56,20C64.911,20,74.187,20,83,20C91.813,20,100.163,
            20,109,20C117.837,20,127.163,20,136,20C144.837,20,153.187,20,162,20C170.813,20,180.089,20,189,20C197.911,20,206.455,
            19.999,215,20C223.545,20.001,232.089,20.003,241,20C249.911,19.997,259.187,19.99,268,20C276.813,20.01,285.163,
            20.038,294,20C302.837,19.962,312.163,19.858,321,20C329.837,20.142,338.187,20.53,347,20C355.813,19.47,365.089,
            18.021,374,20C382.911,21.979,391.455,27.385,400,20C408.545,12.615,417.089,-7.563,426,20C434.911,47.563,444.187,
            122.866,453,117.727C461.813,112.589,470.163,27.009,479,20C487.837,12.991,497.163,84.553,506,117.727C514.837,
            150.902,523.187,145.689,532,117.727C540.813,89.765,550.089,39.053,559,20C567.911,0.947,576.455,13.553,585,
            20C593.545,26.447,602.089,26.736,611,20C619.911,13.264,629.187,-0.497,638,20C646.813,40.497,655.163,95.251,
            664,117.727C672.837,140.203,682.163,130.401,691,117.727C699.837,105.053,708.187,89.507,717,117.727C725.813,
            145.947,735.089,217.933,744,225.227C752.911,232.522,761.455,175.124,770,117.727"></path></g>
        <g class="marks">
            <path fill="none" stroke="#FFDCDC" d="M30,313.182C38.545,270.981,47.089,228.78,56,215.455C64.911,202.129,74.187,
            217.679,83,215.455C91.813,213.23,100.163,193.232,109,215.455C117.837,237.677,127.163,302.119,136,313.182C144.837
            ,324.245,153.187,281.929,162,215.455C170.813,148.98,180.089,58.347,189,117.727C197.911,177.107,206.455,386.5,215,
            410.909C223.545,435.319,232.089,274.745,241,215.455C249.911,156.164,259.187,198.157,268,215.455C276.813,232.752,
            285.163,225.354,294,215.455C302.837,205.555,312.163,193.155,321,215.455C329.837,237.754,338.187,294.754,347,
            313.182C355.813,331.609,365.089,311.465,374,313.182C382.911,314.899,391.455,338.478,400,313.182C408.545,287.885,
            417.089,213.713,426,215.455C434.911,217.196,444.187,294.851,453,313.182C461.813,331.513,470.163,290.52,479,
            410.909C487.837,531.298,497.163,813.07,506,801.818C514.837,790.567,523.187,486.293,532,313.182C540.813,140.071,
            550.089,98.124,559,117.727C567.911,137.331,576.455,218.484,585,215.455C593.545,212.425,602.089,125.211,611,
            117.727C619.911,110.243,629.187,182.489,638,215.455C646.813,248.42,655.163,242.106,664,215.455C672.837,188.804,
            682.163,141.816,691,117.727C699.837,93.638,708.187,92.448,717,117.727C725.813,143.006,735.089,194.755,744,
            215.455C752.911,236.154,761.455,225.804,770,215.455"></path></g></g></svg></div></div>
    
    
    </Base>

    
  )
}



export default Dashboard