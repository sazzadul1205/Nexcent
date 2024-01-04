import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    


    const onSubmit = (data) => {
        console.log(data);

        axiosPublic.post('/RegisteredUser', data)
            .then(res => {
                if (res.data.insertedId) {
                    showSuccessAlert()
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                showFailedAlert();
            });

            const mail = `Dear ${data.FName},

            Thank you for signing up on our platform. We are excited to have you on board!
            
            Best regards,
            Sazzadul Islam`;

        const templateParams = {
            from_name: `Sazzadul Islam`,
            to_name: `${data.FName}`,
            message: `${mail}`,
            to_email: `${data.email}`,
            from_email: `Psazzadul@gmail.com`,
        };

        emailjs.send('service_p51igae', 'template_zxjvjc9', templateParams, '2E4m6SmAxA_qFfFN9');

    }

    const showSuccessAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You are now logged in.',
        });
    };

    const showFailedAlert = (errorMessage) => {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: errorMessage,
        });
    };


    return (
        <div className="hero min-h-screen bg-[#4CAF4F]">
            <div className="hero-content mt-32 md:mt-44 text-white ">
                <div className="card w-72 md:w-96 max-w-sm shadow-2xl bg-base-100 opacity-90">
                    <h1 className='text-3xl font-bold text-center p-5'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">First Name</span>
                            </label>
                            <input
                                type="text"
                                {...register('FName', { required: true })}
                                name="FName"
                                placeholder="First Name"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email Address</span>
                            </label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Date of birth</span>
                            </label>
                            <input
                                type="date"
                                {...register('Birth', { required: true })}
                                name="Birth"
                                placeholder="Your Date opf Birth"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Mobile Number</span>
                            </label>
                            <input
                                type="number"
                                {...register('mobile', { required: true })}
                                name="mobile"
                                placeholder="Your Mobile Number"
                                className="input input-bordered"
                            />
                        </div>

                        <h1 className='text-xl font-semibold bg-[#4CAF4F] text-center my-4'>Give any one of them </h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">IELTS Score</span>
                            </label>
                            <input
                                type="float"
                                {...register('IELTS')}
                                name="IELTS"
                                placeholder="Your IELTS score"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">PTE Score</span>
                            </label>
                            <input
                                type="float"
                                {...register('PTE')}
                                name="PTE"
                                placeholder="Your PTE Score"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">TOFLEL Score</span>
                            </label>
                            <input
                                type="float"
                                {...register('TOFEL')}
                                name="TOFEL"
                                placeholder="Your TOFEL Score"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control mt-6 text-white">
                            <input
                                className={`w-full p-3 bg-[#4CAF4F] hover:bg-green-500  rounded-xl`}
                                type="submit"
                                value="Log In"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;