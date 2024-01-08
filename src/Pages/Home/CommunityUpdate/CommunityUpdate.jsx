import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Right from '../../../assets/Customer/Right.svg';
import Loader from '../../Components/Loader';

const CommunityUpdate = () => {
    const axiosPublic = useAxiosPublic();

    const { data: CU = [], isLoading } = useQuery({
        queryKey: ["CU"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/CommunityUpdate`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="bg-white my-10 max-w-[1440px] mx-auto">
            <div className="text-center mb-4">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#4D4D4D] mx-auto">
                    Caring is the new marketing
                </h1>
                <p className="text-[#4D4D4D] lg:w-[628px] mx-auto">
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who joining the community, read about how our community are increasing their membership income and lot more.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-32  gap-10">
                {CU.map((card, index) => (
                    <div key={index} className="card lg:w-96 shadow-xl my-4 text-[#4D4D4D] mx-auto mb-32 gap-5">
                        <div className="justify-center items-center w-full lg:w-[368px]">
                            <div className="bg-[#F5F7FA] p-4 text-center lg:w-80 mx-auto absolute z-20 top-48 left-8 rounded-lg ">
                                <h1 className="text-xl font-semibold text-[#717171]">{card.title}</h1>
                                <div className="flex justify-center gap-2 p-2">
                                    <p className="text-xl font-semibold text-[#4CAF4F] text-center">Readmore </p>
                                    <img src={Right} alt="" />
                                </div>
                            </div>
                            <img src={card.imgSrc} alt={`Image ${index + 1}`} className="rounded-xl w-full lg:w-[368px] relative" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityUpdate;
