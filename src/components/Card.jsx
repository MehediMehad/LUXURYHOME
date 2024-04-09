import PropTypes from 'prop-types';

const Card = ({house}) => {
    const {title} = house
    return (
        <div className="card rounded-md  bg-base-100 shadow-xl mt-10">
            <h1 className="px-2 font-bold text-2xl">Sunset Villa</h1>
            <figure className="px-2 pt-2">
                <img src="https://i.ibb.co/Mh1Ht79/single-family-home09.png" alt="Shoes" className="" />
            </figure>
            <div className="card-body  px-3 py-2">
            <h1 className=" font-bold text-xs ">Single-family home</h1>
                <hr />
                <h2 className="font-bold text-xl ">{title}</h2>
                <hr />
                <p className="font-bold text-lg flex "> <span className=" text-slate-900 font-medium ">Status: sale</span> <p className=" text-end mr-2">$500,000</p></p>
                <p className="text-[15px] font-normal text-slate-600">Beautiful single-family home in a quiet neighborhood. Spacious rooms and modern amenities.</p>
                <div className=" flex  font-semibold text-stone-600">
                    <p>bed 3</p>
                    <p>bath 3</p>
                    <p>2000 sq ft</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-link">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes ={
    house: PropTypes.object,
}
export default Card;