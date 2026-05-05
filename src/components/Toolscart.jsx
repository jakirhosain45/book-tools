import { use } from "react";
import toast from "react-hot-toast";

const toolspromise = fetch("./tools.json").then((res) => res.json());
const Toolscart = ({carts,setcarts}) => {
  const tools = use(toolspromise);
  const addtocart =(tool)=>{
    const isexist =carts.find(c=>c.id ===tool.id);
    if(isexist){
        toast.error("Item is already in cart")
        return
    }
    setcarts([...carts,tool])
    toast.success("Item added to cart")
    
  }

  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-6">
      {
      tools.map((tool) => (
        
        <div
         key={tool.id} 
        className="card w-96 bg-base-200 shadow-sm ">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Premium</h2>
              <span className="text-xl">$29/mo</span>
            </div>

            <div className="mt-6">
              <button onClick={()=> addtocart(tool)} className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toolscart;
