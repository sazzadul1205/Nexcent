import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import image from "../../../assets/Customer/image.png";
import Loader from "../../Components/Loader";
import Right from "../../../assets/Customer/Right.svg";

const Customer = () => {
    const axiosPublic = useAxiosPublic();

    const { data: clients = [], isLoading } = useQuery({
        queryKey: ['clients'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/clients`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    const visibleClients = clients.slice(0, 6);

    return (
        <div className='lg:px-36 my-10 bg-[#F5F7FA]'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row lg:gap-10">
                    <img src={image} className="max-w-full lg:max-w-md rounded-lg shadow-2xl my-6 lg:my-0" alt="Banner" />
                    <div>
                        <p className="text-[#4D4D4D]">
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h1 className="text-xl font-semibold text-[#4CAF4F] mt-4">Tim Smith</h1>
                        <p className="text-[#89939E] mt-2">British Dragon Boat Racing Association</p>
                        <div className="flex flex-col md:flex-row items-center gap-2 mt-8">
                            {visibleClients.map((client) => (
                                <div key={client._id} className="w-16 mx-auto">
                                    <img src={client.logo} alt={client.name} className="w-full h-full object-contain cursor-pointer rounded-lg shadow-md" />
                                </div>
                            ))}
                            <div className="flex items-center cursor-pointer gap-2">
                                <h1 className="text-[#4CAF4F] text-lg font-semibold">Meet all customers</h1>
                                <img className="" src={Right} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
