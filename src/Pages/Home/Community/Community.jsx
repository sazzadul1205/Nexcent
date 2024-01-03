import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../Components/Loader";

const Community = () => {
    const axiosPublic = useAxiosPublic();

    const { data: community = [], isLoading } = useQuery({
        queryKey: ["community"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Community`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="bg-white my-10">
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#4D4D4D] lg:w-1/3 mx-auto">
                    Manage your entire community in a single system
                </h1>
                <p className="text-[#4D4D4D]">Who is Nextcent suitable for?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-36 justify-center items-center ">
                {community.map((com) => (
                    <div className="card lg:w-96 shadow-xl my-4 text-[#4D4D4D] mx-auto" key={com._id}>
                        <figure className="px-10 pt-10 relative">
                            <div className="flex justify-center items-center">
                                <h1 className="bg-[#E8F5E9] rounded-br-[18px] rounded-tl-[18px] rounded-tr-[5px] rounded-bl-[10px] p-5 absolute top-14 right-40 z-10"></h1>
                                <img src={com.logo} alt="Shoes" className="rounded-xl relative z-20" />
                            </div>
                        </figure>
                        <div className="card-body items-center text-center relative">
                            <h2 className="card-title text-3xl font-bold w-64">{com.title}</h2>
                            <p className="text-sm font-normal">{com.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
