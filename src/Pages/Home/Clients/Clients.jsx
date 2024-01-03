import { useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Clients = () => {
    const axiosPublic = useAxiosPublic();

    const { data: clients = [], isLoading } = useQuery({
        queryKey: ['clients'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/clients`);
            return res.data;
        },
    });

    const [selectedClient, setSelectedClient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (client) => {
        setSelectedClient(client);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedClient(null);
        setIsModalOpen(false);
    };

    if (isLoading) {
        return <Loader />;
    }

    const swiperParams = {
        slidesPerView: 7,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 7,
            },
        },
    };

    return (
        <div className="bg-white lg:mx-36 my-10">
            <div className="text-center">
                <h1 className="text-4xl font-semibold mb-2 text-[#4D4D4D]">Our Clients</h1>
                <p className="text-[#4D4D4D]">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='my-4'>
                <Swiper {...swiperParams} className="mySwiper">
                    {clients.map((client) => (
                        <SwiperSlide key={client._id} onClick={() => openModal(client)}>
                            <img src={client.logo} alt={client.name} className="w-full h-full object-contain cursor-pointer" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white p-8 rounded-md flex">
                        <img src={selectedClient.logo} alt={selectedClient.name} className="w-1/2 h-auto object-contain mb-4" />
                        <div className="divider divider-horizontal"></div>
                        <div className='my-auto text-black'>
                            <h2 className="text-2xl font-semibold">{selectedClient.name}</h2>
                            <p>{selectedClient.description}</p>
                            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Clients;
