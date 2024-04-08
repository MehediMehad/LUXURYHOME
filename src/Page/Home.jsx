import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
const Home = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;