import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../Components/Loader";
import PageTitle from "../Components/PageTitle";

const FAQ = () => {
    const axiosPublic = useAxiosPublic();

    const { data: faqData = [], isLoading } = useQuery({
        queryKey: ['faqData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/FAQ`);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto my-8 max-w-[800px]">
            <PageTitle
                title={'Frequently Asked Questions'}
            ></PageTitle>
            <div className="space-y-8">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b py-6">
                        <h2 className="text-xl font-semibold mb-2 text-[#555]">{faq.question}</h2>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
