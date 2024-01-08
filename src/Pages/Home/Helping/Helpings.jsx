import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader";

const Helpings = () => {
    const axiosPublic = useAxiosPublic();

    const { data: Helping = [], isLoading } = useQuery({
        queryKey: ["Helping"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Helping`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className=" bg-[#F5F7FA] my-12 ">
            <div className="flex flex-col lg:flex-row text-[#4D4D4D] py-16 md:mx-36 justify-around max-w-[1440px]">
                <div className='my-auto '>
                    <h1 className="text-3xl lg:text-4xl font-semibold lg:w-[408px]">Helping a local <span className="text-[#4CAF4F]">business reinvent itself</span></h1>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {
                        Helping.map(({ imgSrc, label, count }) => (
                            <div className="flex" key={label}>
                                <img className="w-12 mr-4" src={imgSrc} alt="" />
                                <div>
                                    <h1 className="text-2xl font-bold">{count}</h1>
                                    <p>{label}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Helpings;