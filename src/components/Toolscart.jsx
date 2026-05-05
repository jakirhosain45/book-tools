import { use } from "react";
import toast from "react-hot-toast";

const toolspromise = fetch("./tools.json").then((res) => res.json());
const Toolscart = ({ carts, setcarts }) => {
  const tools = use(toolspromise);
  const addtocart = (tool) => {
    const isexist = carts.find((c) => c.id === tool.id);
    if (isexist) {
      toast.error("Item is already in cart");
      return;
    }
    setcarts([...carts, tool]);
    toast.success("Item added to cart");
  };

  const tagColor = (tagtype) => {
    if (tagtype === "popular") return "badge-warning";
    if (tagtype === "favourite") return "badge-success";
    if (tagtype === "mostwanted") return "badge-error";
    return "badge-neutral";
  };

  const isIncart = (id) => carts.find((cart) => cart.id == id);

  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 px-2">
      {tools.map((tool) => (
        <div key={tool.id} className="card w-full bg-base-200 shadow-sm hover:shadow-amber-50 hover:bg-amber-50 hover-3d">
          <div className="card-body">
            <span className={`badge badge-xs ${tagColor(tool.tagtype)} p-3 text-xl`}>
              {tool.tag}
            </span>
            <div>
                <img className="w-10" src={tool.icon} alt="" />
            </div>
              <h2 className="text-3xl font-bold">{tool.name}</h2>

             
            
            <p className="text-gray-400">{tool.description}</p>
            <ul className="mt-4 space-y-2">
              {tool.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
             <span className="text-xl font-bold">${tool.price}/{tool.period}</span>
            <div className="mt-6">
              <button
                disabled={isIncart(tool.id)}
                onClick={() => addtocart(tool)}
                className="btn btn-warning btn-block text-black"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toolscart;
