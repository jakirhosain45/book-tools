

const Carts = ({carts ,setcarts}) => {
    const total =carts.reduce((sum ,cart) =>sum +cart.price,0);
    const removehandel = (id)=>{
        const filtercart =carts.filter(cart=> cart.id !== id)
        setcarts(filtercart)
    }
    const handelpayment =()=>{
        setcarts([])
    }
    if(carts.length ===0){
        return
    }
    
    return (
        <div className="container mx-auto p-7 space-y-4 border border-gray-200 rounded-lg">
            <h1 className="text-2xl font-semibold ">Your Cart</h1>
            {
                carts.map(cart=>(
                    <div key={cart.id}>
                        <div className="flex items-center justify-between shadow-lg rounded-lg bg-gray-100 p-6 shadow-lg">
                            <h1 className="text-3xl font-bold">{cart.name}</h1>
                            <h1 className="text-2xl font-semibold">${cart.price}</h1>
                            <h1 onClick={()=>removehandel(cart.id)} className="text-red-600 font-bold btn bg-gray-100">Remove</h1>
                        </div>
                    </div>
                ))
            }
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-400">Total</h1>
                <h1 className="text-2xl font-semibold">${total}</h1>
                

            </div>
            <div onClick={handelpayment} className="btn w-full bg-amber-500 shadow-sm rounded-full text-white text-xl">Proceed To Checkout</div>
        </div>
    );
};

export default Carts;