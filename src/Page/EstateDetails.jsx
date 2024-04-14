import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const homes = useLoaderData()
    const {id} = useParams()
    const home = homes.find(home => home.id == id )
    const { title, type, name, image,location, status, price, description, bedrooms, bathrooms, area, facilities } = home
    return (
        <div className="card rounded-md  bg-base-100 shadow-xl mt-10 w-3/5 mx-auto mb-36">
            <h1 className="px-6 font-bold text-2xl">{name}</h1>
            <figure className="px-6 pt-2">
                <img  src={image} alt="Shoes" className="w-full h-2/4" />
            </figure>
            <div className="card-body  px-6 py-2">
                <h1 className=" font-bold text-xs ">{type}</h1>
                <hr />
                <h2 className="font-bold text-xl ">{title}</h2>
                <hr />

                <p className="font-bold text-lg flex "> <span className=" text-slate-900 font-medium ">Status: {status}</span> <p className=" text-orange-600 text-end mr-2">{price}</p></p>
                <p className='font-semibold'>{location}📍</p>
                <p className="text-[15px] font-normal text-slate-600">{description}</p>
                <hr />
                <p className='font-semibold text-base'>Facilities</p>
                <div className=" flex  font-semibold text-stone-600 justify-stretch">
                    <div className="">
                        {
                            facilities.map((f, idx) => <li key={idx}>{f}</li>)
                        }
                    </div>
                    <div className="ml-7">
                        <li>bed {bedrooms}</li>
                        <li>bath {bathrooms}</li>
                        <li>{area}</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;