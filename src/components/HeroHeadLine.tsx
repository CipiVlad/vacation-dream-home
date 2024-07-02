import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroHeadLine = () => {
    return (
        <header className="text-center pt-10 bg-[#f8df7f5]">
            <h1 className="text font-bold text-5xl text-center">Let's Find Your</h1>
            <p className="text font-bold text-5xl text-center text-blue-400">Dream Home</p>
            <div className="text-center">
                <Link to="/rent"
                    style={{
                        borderRadius: '20px',
                        padding: '10px 25px',
                        display: 'inline-block',
                        marginTop: '50px',
                        backgroundColor: '#60A5FA',
                        color: 'white',
                    }}
                >
                    Expore Our Homes
                </Link>
                <FaLocationArrow
                    className="text font-bold text-2xl text-center cursor-pointer"
                    style={{ display: 'inline-block' }}
                />
            </div>
            <div className="grid grid-cols-1 size-container mt-10 mb-10 ">
                <div className="family-img"

                    style={{
                        backgroundImage: "url(/family.jpg)",
                        backgroundPosition: ' center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        margin: "5vh auto",
                        width: '75%',
                        height: '85vh',
                        borderRadius: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                        overflow: 'hidden',


                    }}
                ></div>
            </div>
        </header>
    )
}
export default HeroHeadLine