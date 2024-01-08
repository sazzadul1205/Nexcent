import { useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Components/Loader';
import PageTitle from '../Components/PageTitle';

const Product = () => {
    const axiosPublic = useAxiosPublic();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const { data: productsData = [], isLoading } = useQuery({
        queryKey: ['productsData', selectedCategory, searchTerm],
        queryFn: async () => {
            let endpoint = '/Products';
            if (selectedCategory !== 'All') {
                endpoint += `?category=${selectedCategory}`;
            }
            if (searchTerm) {
                endpoint += `&name=${searchTerm}`;
            }
            const res = await axiosPublic.get(endpoint);
            return res.data;
        },
    });

    if (isLoading) {
        return <Loader />;
    }

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [
        'All',
        'Electronics',
        'Clothing',
        'Books',
        'Food & Beverages',
        'Fitness',
        'Fashion',
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto my-8 max-w-[1440px]">
            <PageTitle
                title={'Products'}
                subtitle={'Explore a wide range of products, from electronics to fashion and beyond.'}
            ></PageTitle>
            <form className="flex items-center justify-between mb-6 bg-slate-500 p-5">
                <div className='flex'>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border border-gray-300"
                    />
                    <button type="submit" className='text-center my-auto bg-[#4CAF4F] p-2 text-white hover:bg-green-500'>Search</button>
                </div>

                <div className="flex space-x-4">
                    <span className="text-white">Filter by Category:</span>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`text-green-500 ${selectedCategory === category ? 'font-bold' : ''
                                } focus:outline-none`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </form>

            <div className="flex mb-4">
                {categories.map((category) => (
                    <div
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`cursor-pointer p-2 border text-black min-w-20 text-center ${selectedCategory === category
                            ? ' bg-green-100 text-black'
                            : ' hover:bg-green-300'
                            } rounded-md mr-4`}
                    >
                        {category}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="mb-4 rounded-md w-full h-48 object-cover"
                        />
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600">{product.category}</p>
                        <p className="text-gray-800 font-bold py-2">{product.price}</p>
                        <p className="text-gray-700 mb-5">{product.description}</p>
                        <button className="w-32 h-10 bg-[#4CAF4F] text-sm text-white p-2 rounded-md">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
