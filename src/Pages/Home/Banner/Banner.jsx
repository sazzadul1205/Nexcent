import GButton from '../../Components/GButton';
import first from '../../../assets/banner/first.png';

const Banner = () => {
    return (
        <div>
            <div className="hero py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-36 bg-[#F5F7FA]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-16">
                    <img src={first} className="max-w-full md:max-w-sm lg:max-w-md rounded-lg shadow-2xl mb-8 md:mb-0" />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-semibold text-[#4D4D4D] mb-4 md:mb-6">
                            Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
                        </h1>
                        <p className="text-sm md:text-base text-[#717171] mb-4 md:mb-8">
                            Where to grow your business as a photographer: site or social media?
                        </p>
                        <GButton content={'Register'}></GButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
