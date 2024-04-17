import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <section className=" ">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">About Us</h2>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">Experience since 1999</h3>
                            <p className="mt-3 text-lg text-gray-700">We have been working since 1999 to be sure you are getting the best MyHome service possible.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">OUR GOAL </h4>
                                        <p className="mt-2 text-gray-700">MyHome aims to unite MyHome brokers to provide their clients and partners with the top-notch level of brokerage services throughout the USA.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">ABOUT US</h4>
                                        <p className="mt-2 text-gray-600">MyHome is a full-service, luxury MyHome brokerage company representing clients worldwide.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">OUR MISSION</h4>
                                        <p className="mt-2 text-gray-600">Our mission is to be the most successful MyHome firm in the local states and beyond.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://i.ibb.co/5x5Gkpj/d1.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;