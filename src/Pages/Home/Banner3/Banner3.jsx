import GButton from "../../Components/GButton";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";

const Banner3 = () => {
    const axiosPublic = useAxiosPublic();

    const { data: Banner3 = [], isLoading } = useQuery({
        queryKey: ["Banner3"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Banners?bannerNo=3`);
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
                    <img src={Banner3.image} className="max-w-full lg:w-[442px] lg:h-[329px] rounded-lg shadow-2xl my-6 lg:my-0 " />
                    <div className='ml-10'>
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#4D4D4D] lg:w-[601px]">{Banner3.title}</h1>
                        <p className=" mb-8 text-[#717171]">{Banner3.content}</p>
                        <GButton content={'Learn More'}></GButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner3;