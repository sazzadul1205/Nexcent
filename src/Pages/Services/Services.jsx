import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import GButton from '../Components/GButton';
import Loader from '../Components/Loader';
import PageTitle from '../Components/PageTitle';

const Services = () => {
    const axiosPublic = useAxiosPublic();

    const { data: servicesData = [], isLoading } = useQuery({
        queryKey: ['servicesData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/services`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto my-8 max-w-[1440px]">
            <PageTitle
                title={'Our Services'}
                subtitle={'Explore a wide range of services tailored to meet your business needs. Our team is dedicated to providing top-notch solutions that drive success and innovation.'}
            ></PageTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map(service => (
                    <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={service.imageUrl} alt={service.title} className="mb-4 rounded-md w-full h-auto" />
                        <h2 className="text-xl font-semibold mb-2 text-black">{service.title}</h2>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <GButton content={'Learn More'} />
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Services;
