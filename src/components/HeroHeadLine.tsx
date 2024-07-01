import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroHeadLine = () => {
    return (
        <header>
            <h1 className="text font-bold text-5xl text-center">Find Your Vacation</h1>
            <p className="text font-bold text-5xl text-center">Dream Home</p>
            <div className="text-center">
                <Link to="/rent"
                    style={{
                        borderRadius: '20px',
                        padding: '5px 10px',
                        display: 'inline-block',
                        marginTop: '10px',
                        backgroundColor: '#007bff',
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
        </header>
    )
}
export default HeroHeadLine