import { Link, useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const homes = useLoaderData()
    const {id} = useParams()
    const home = homes.find(home => home.id == id )
    const {title, type} = home
    return (
        <div className="card card-compact w-3/6 mx-auto bg-base-100  ">
            <figure><img src="https://i.ibb.co/Mh1Ht79/single-family-home09.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{type}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link to='/' className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;