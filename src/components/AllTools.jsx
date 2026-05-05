import Toolscart from "./Toolscart";
import Carts from "./Carts";
import { useState } from "react";
const AllTools = ({carts,setcarts}) => {
    const [activetab, setactivetab] =useState("tools")
  return (
    <div>
      {/* static content */}
      <div className="text-center my-20 space-y-3">
        <div className="space-y-2">
            <p className="text-orange-500">OUR TOOLKIT</p>
        <h1 className="font-bold text-4xl">Tools Built for Every Stage</h1>
        <p>
          From outlining to publishing--every tool need, priced fairly,No
          bloated subscriptions.
        </p>
        </div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 font-bold"
            aria-label="All Tools"
            onClick={()=>setactivetab("tools")}
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40 font-bold "
            aria-label="Cart"
            onClick={()=>setactivetab("cart")}
            
          />
          
        </div>
      </div>
      {/* dynamic content */}
      <div>
        
        
        {
            activetab === "tools" ?(<Toolscart carts={carts} setcarts={setcarts}/>) :(<Carts setcarts={setcarts} carts={carts}/>)
        }
      </div>
    </div>
  );
};

export default AllTools;
