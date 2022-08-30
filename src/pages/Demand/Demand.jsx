
import React, {useState, useRef} from "react";
import DemandList from "../../components/Table/components/DemandList/DemandList";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./Demand.css";
import Split from "react-split";
import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
 import { BsArrowLeftCircleFill } from 'react-icons/bs';
import ArrowLeft from "../../components/Message/ArrowLeft";
function Demand() {
  const [hide, showDiv]=useState(true);
  const[classs, setClasss]=useState('demand_list_detail');
 const animation=useRef(null);
  const showDetailPanel=(e)=>{
    if(hide){
      // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
      //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
    //  document.getElementById('demand_list_detail_id').style.transition='2s';
 // setClasss('demand_list_animation');
     document.getElementById('demand_list_id').style.width='75%';
  //   setClasss('demand_list_animation');
   //  setClasss('demand_list_detail_collapse');
    showDiv(false);
    return;
  }
  if(!hide){
    // document.getElementById('demand_list_detail_id').style.display='contents';
   // setClasss('demand_list_animation');
     document.getElementById('demand_list_id').style.width='50%';
    // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';
    showDiv(true);
    return;
  } 
}
  return (
    <>
      <div className="demand" >
        <div className="demandWrapper">
          <h2 className="demand_title" onClick={showDetailPanel}>Demands</h2>
          <div className="demand_list_container">  
          <div className="demand_list" id='demand_list_id'>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
            <DemandList/>
          </div> 
          {
           hide? 
          <div className={classs} id="demand_list_detail_id" >
          <div className="demand_list_collapser">
            <div className="demand_list_collapserWrap" onClick={showDetailPanel}>
              {/* <BsArrowLeftCircleFill className="demand_list_arrowLeft"  size={"60px"} onClick={showDetailPanel}
              /> */}
              <ArrowLeft showDiv={showDiv}/>
            </div>
          </div>
          <DemandListDetail/>
          </div>:null
}    </div>
        </div>
      </div>
    </> );
}export default Demand;
//////////////////////////////
// import React, {useState} from "react";
// import DemandList from "../../components/Table/components/DemandList/DemandList";
// import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import "./Demand.css";
// import Split from "react-split";
// import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
//  import { BsArrowLeftCircleFill } from 'react-icons/bs';



// function Demand() {
//   const [hide, showDiv]=useState(true);
//   const[classs, setClasss]=useState('demand_list_detail');
//   const showDetailPanel=()=>{
//     if(hide){
//       // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
//       //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
//     //  document.getElementById('demand_list_detail_id').style.transition='2s';

//      document.getElementById('demand_list_id').style.width='80%';
//    //  setClasss('demand_list_detail_collapse');
//     showDiv(false);
//     return;
//   }
//   if(!hide){
//     // document.getElementById('demand_list_detail_id').style.display='contents';
//      document.getElementById('demand_list_id').style.width='50%';
//     // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';
//     showDiv(true);
//     return;
//   }

//   }
//   return (
//     <>
//       <div className="demand">
//         <div className="demandWrapper">
//           <h2 className="demand_title" onClick={showDetailPanel}>Demands</h2>
//           <div className="demand_list_container">
           
//           <div className="demand_list" id='demand_list_id'>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//           </div>
          
//           {hide? 
//           <div className={classs} id="demand_list_detail_id">
//           <div className="demand_list_collapser">
           
//             <div className="demand_list_collapserWrap">
//               <BsArrowLeftCircleFill className="demand_list_arrowLeft"  size={"60px"} onClick={showDetailPanel}/>
//             </div>
//           </div>
//           <DemandListDetail/>
//           </div>:null
// }
         


//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Demand;