import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Components/Loader';
import PageTitle from '../Components/PageTitle';

const Testimonial = () => {
    const axiosPublic = useAxiosPublic();

    const { data: testimonialsData = [], isLoading } = useQuery({
        queryKey: ['testimonialsData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/Testimonials`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="bg-gray-100 min-h-screen relative ">
            <div className="bg-white py-8">
                <PageTitle
                    title={'Client Testimonials'}
                    subtitle={'What our clients say about us'}
                ></PageTitle>
            </div>
            <div className='max-w-[1440px] mx-auto'>
                <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="bg-slate-200 p-8 rounded-lg shadow-lg text-center relative">
                            <FaQuoteLeft size={30} color="#4CAF4F" className="mb-4" />
                            <p className="text-gray-800 text-lg mb-4">{testimonial.message}</p>
                            <FaQuoteRight size={30} color="#4CAF4F" className="mb-4 absolute right-4 bottom-4" />
                            <div className="flex flex-col items-center">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{testimonial.name}</h4>
                                <p className="text-gray-600">{testimonial.position}</p>
                                <p>{testimonial.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Testimonial;
