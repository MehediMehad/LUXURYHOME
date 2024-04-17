import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import { useContext } from "react";
import Card from "../components/Card";
import { AuthContext } from "../providers/AuthProvider";
import Highest from "../components/Highest";
import Communities from "../components/Communities";
import Gallery from "../components/Gallery";
import Articles from "../components/Articles";

const Home = () => {
    const { houses } = useContext(AuthContext)
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Highest></Highest>
            <Communities></Communities>
            {/* more add */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mx-48 gap-x-16 ">
                {
                    houses.map(house => <Card
                        key={house.id}
                        house={house}
                    ></Card>)
                }
            </div>
            {

            }
            <Gallery></Gallery>
            <Articles></Articles>
        </div>
    );
};

export default Home;