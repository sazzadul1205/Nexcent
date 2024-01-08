import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import GButton from '../../Components/GButton';
import Loader from '../../Components/Loader';


const Banner2 = () => {
    const axiosPublic = useAxiosPublic();

    const { data: Banner2 = [], isLoading } = useQuery({
        queryKey: ["Banner2"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Banners?bannerNo=2`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='lg:mx-36 pt-12 '>
            <div className="hero max-w-[1440px] mx-auto px-9">
                <div className="hero-content flex-col lg:flex-row lg:gap-10 w-auto">
                    <img src={Banner2.image} className="max-w-full lg:w-[442px] lg:h-[329px] rounded-lg shadow-2xl my-6 lg:my-0 " />
                    <div className='ml-10'>
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] lg:w-[601px]">{Banner2.title}</h1>
                        <p className="py-6 text-[#717171]">{Banner2.content}</p>
                        <GButton content={'Learn More'}></GButton>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;