import GButton from '../../Components/GButton';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';

const Banner = () => {
    const axiosPublic = useAxiosPublic();

    const { data: Banner = [], isLoading } = useQuery({
        queryKey: ["Banner"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Banners?bannerNo=1`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader/>;
    }
    return (
        <div className=' bg-[#F5F7FA] '>
            <div className="hero py-12 md:py-16 lg:py-24 md:px-8 lg:px-36 max-w-[1440px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-16">
                    <img src={Banner.image} className="max-w-full md:max-w-sm lg:max-w-md rounded-lg shadow-2xl mb-8 md:mb-0" />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-semibold text-[#4D4D4D] mb-4 md:mb-6">
                            Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
                        </h1>
                        <p className="text-sm md:text-base text-[#717171] mb-4 md:mb-8">
                            {Banner.content}
                        </p>
                        <GButton content={'Register'} url={'/Register'}></GButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
