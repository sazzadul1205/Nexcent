import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import GButton from '../Components/GButton';
import Loader from '../Components/Loader';
import PageTitle from '../Components/PageTitle';

const Feature = () => {
    const axiosPublic = useAxiosPublic();

    const { data: featuresData = [], isLoading } = useQuery({
        queryKey: ['featuresData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Features`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }


    return (
        <div className="container mx-auto my-8 max-w-[1440px]">
            <PageTitle
                title={'Product Features'}
                subtitle={'Discover the amazing features that make our product stand out from the rest.'}
            ></PageTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuresData.map(feature => (
                    <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                        <img src={feature.imageUrl} alt={feature.title} className="mb-4 rounded-md w-full h-auto" />
                        <h2 className="text-xl font-semibold mb-2 text-black">{feature.title}</h2>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <div className="flex justify-center">
                            <GButton content={'Learn More'} onClick={() => handleLearnMore(feature.title)} />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

const handleLearnMore = (featureName) => {
    console.log(`Clicked Learn More for ${featureName}`);
};

export default Feature;
