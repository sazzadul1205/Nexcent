
const PageTitle = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-8 text-[#404040] mt-2">{title}</h1>
            <p className='w-1/2 mx-auto text-center text-black mb-10'>
                {subtitle}
            </p>
        </div>
    );
};

export default PageTitle;