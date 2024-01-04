import GButton from '../../Components/GButton';

const Demo = () => {
    return (
        <div className="bg-[#F5F7FA] py-8">
            <div className="mx-auto text-center">
                <h1 className="text-4xl lg:text-7xl font-semibold mx-auto md:w-1/2 lg:w-[887px] text-[#263238]">
                    Pellentesque suscipit fringilla libero eu.
                </h1>
                <div className="mt-8">
                    <GButton content={'Get a Demo ->'}></GButton>
                </div>
            </div>
        </div>
    );
};

export default Demo;
