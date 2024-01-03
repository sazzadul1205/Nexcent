import second from '../../../assets/banner/second.png'
import GButton from '../../Components/GButton';


const Banner2 = () => {
    return (
        <div className='lg:mx-36'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row lg:gap-10 w-auto">
                    <img src={second} className="max-w-full lg:max-w-md rounded-lg shadow-2xl my-6 lg:my-0" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <GButton content={'Learn More'}></GButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;