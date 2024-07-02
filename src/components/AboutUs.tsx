const AboutUs = () => {
    return (
        <div className="text-center">
            <h2 className="text font-bold text-5xl text-center">Why
                <span className="text font-bold text-5xl text-center text-blue-400"> Choose</span> Us
            </h2>
            <div className="flex justify-items-center m-10">
                <div className="grid grid-rows-3 justify-items-center w-1/3">
                    <img src="/heim.png" alt="home" className="w-12 h-12 cursor-pointer" />
                    <h3>Premium Porperties</h3>
                    <p className="text text-center  ">We have all kinds of properties. Each home is exactly selected by us.</p>
                </div>

                <div className="grid grid-rows-3 justify-items-center w-1/3">
                    <img src="/service.png" alt="service" className="w-12 h-12 cursor-pointer" />
                    <h3>Personalized Service </h3>
                    <p className="text text-center">
                        Our Service is designed with you in mind. We will take care of everything.
                    </p>
                </div>

                <div className="grid grid-rows-3 justify-items-center w-1/3">
                    <img src="/maps-and-location.png" alt="" className="w-12 h-12 cursor-pointer" />
                    <h3>Unbeatable Locations</h3>
                    <p className="text text-center">
                        Locations are selected by us. We have all kinds of locations.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default AboutUs