import GButton from "../../Components/GButton";
import third from "../../../assets/banner/third.png"

const Banner3 = () => {
    return (
        <div className='lg:mx-36 my-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={third} className="max-w-full lg:max-w-md rounded-lg shadow-2xl my-6 lg:my-0" />
                    <div>
                        <h1 className="text-5xl font-bold text-[#4D4D4D]">How to design your site footer like we did</h1>
                        <p className="py-6">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <GButton content={'Learn More'}></GButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner3;