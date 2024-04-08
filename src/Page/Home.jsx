import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className="text-green-500">Home Page</h1>
        </div>
    );
};

export default Home;