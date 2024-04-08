import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";

const Home = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className="text-green-500">Home Page</h1>
            <Banner></Banner>
        </div>
    );
};

export default Home;