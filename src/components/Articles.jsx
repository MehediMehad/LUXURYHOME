
const Articles = () => {
    return (
        <div className="mb-20 mt-14 mx-5 md:mx-0">
            <div className="text-center mb-3">
                <h1 className="text-xl">OUR LATEST HOMES</h1>
                <h1 className="text-4xl font-bold">News & Articles</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mx-48 gap-x-16">
                <div className="">
                    <div className="">
                    <img className="w-full mx-auto py-5 h-96" src="https://i.ibb.co/mHM9BS4/Mask-group-82.jpg" alt="" />
                    </div>
                    <h1 className="font-semibold">Cooming soon </h1>
                    <h2 className="text-3xl font-bold">How To Make A Huge Impact With Multiples</h2>
                </div>
                <div className=""> 
                    <img className="w-full mx-auto py-5 h-96" src="https://i.ibb.co/grVsYDy/Mask-group-81.jpg" alt="" />
                    <h1 className=" font-semibold">Cooming soon </h1>
                    <h2 className=" text-3xl font-bold">How To Make A Huge Impact With Multiples</h2>
                </div>
                <div className=""> 
                    <img className="w-full mx-auto py-5 h-96" src="https://i.ibb.co/FYwdDD6/Mask-group-80-1.jpg" alt="" />
                    <h1 className=" font-semibold">Cooming soon </h1>
                    <h2 className=" text-3xl font-bold">Emerging Trends: Exploring The Latest In Interior Design</h2>
                </div>
            </div>
        </div>
    );
};

export default Articles;