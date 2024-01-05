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
        <div className='lg:mx-36'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row lg:gap-10 w-auto">
                    <img src={Banner2.image} className="max-w-full lg:max-w-md rounded-lg shadow-2xl my-6 lg:my-0" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-[#4D4D4D]">{Banner2.title}</h1>
                        <p className="py-6">{Banner2.content}</p>
                        <GButton content={'Learn More'}></GButton>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;