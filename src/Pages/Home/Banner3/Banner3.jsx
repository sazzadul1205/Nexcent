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
        <div className='lg:mx-36 my-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={Banner3.image} className="max-w-full lg:max-w-md rounded-lg shadow-2xl my-6 lg:my-0" />
                    <div>
                        <h1 className="text-5xl font-bold text-[#4D4D4D]">{Banner3.title}</h1>
                        <p className="py-6">{Banner3.content}</p>
                        <GButton content={'Learn More'}></GButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner3;