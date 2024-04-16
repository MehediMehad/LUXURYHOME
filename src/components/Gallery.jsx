
const Gallery = () => {
    return (
        <>
        <div className="text-center font-bold mt-24">
            <p data-aos="fade-up" className="text-xl">OUR GALLERY</p>
            <h1 data-aos="fade-up" className="text-4xl font-serif">Make Your Home A Piece Of Art.</h1>
        </div>
        <section className="py-6">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/XSx05pC/student7.png" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="https://i.ibb.co/58mnCyW/apartment.webp" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="https://i.ibb.co/92w7bm4/vacation.webp" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="https://i.ibb.co/5x5Gkpj/d1.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 " src="https://i.ibb.co/m6CNpwW/townhouse.webp" />
		
	</div>
</section>
        </>
    );
};

export default Gallery;