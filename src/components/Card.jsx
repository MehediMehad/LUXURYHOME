import PropTypes from 'prop-types';

const Card = ({ house }) => {
    const { title, type, name, image, status, price, description, bedrooms, bathrooms, area, facilities } = house
    return (
        <div className="card rounded-md  bg-base-100 shadow-xl mt-10">
            <h1 className="px-2 font-bold text-2xl">{name}</h1>
            <figure className="px-2 pt-2">
                <img  src={image} alt="Shoes" className=" w-full h-80" />
            </figure>
            <div className="card-body  px-3 py-2">
                <h1 className=" font-bold text-xs ">{type}</h1>
                <hr />
                <h2 className="font-bold text-xl ">{title}</h2>
                <hr />
                <p className="font-bold text-lg flex "> <span className=" text-slate-900 font-medium ">Status: {status}</span> <p className=" text-end mr-2">{price}</p></p>
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

                <div className="card-actions">
                    <button className="btn btn-link">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    house: PropTypes.object,
}
export default Card;