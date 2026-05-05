import bannerimg from '/book.webp'
const Banner = () => {
    return (
        <div className="grid lg:grid-cols-2 container mx-auto items-center mt-12 gap-12 px-2">
            {/* left */}
            <div className="space-y-6">
                <p className="bg-orange-100 text-orange-600 w-1/2 rounded-lg">Trusted by 40,000+ authors</p>
                <h1 className="text-7xl font-bold">Write <span className="text-orange-500">Better</span> <br /> Publish smarter</h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore architecto doloremque soluta, asperiores numquam </p>
                <div className="flex gap-4">
                    <button className= "btn bg-black text-white">Browse All Tools</button>
                    <button className="btn">Browse All Tools</button>
                </div>
            </div>
            {/* right  */}
            <div>
            <img className='max-h-[600px] rounded-lg w-full' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;