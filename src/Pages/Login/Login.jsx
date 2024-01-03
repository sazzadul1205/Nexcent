import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { singIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        console.log(data);
        singIn(data.email, data.password)
            .then(res => {
                const user = res.user
                console.log(user);
                showSuccessLogInAlert();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                showFailedLogInAlert(error.message);
            });
    }

    const showSuccessLogInAlert = () => {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You are now logged in.',
        });
    };

    const showFailedLogInAlert = (errorMessage) => {
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
                    <h1 className='text-3xl font-bold text-center p-5'>Login</h1>
                    <h1 className='bg-red-500 text-xl text-center'> Admin Only login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
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
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                })}
                                name="password"
                                placeholder="Your Password"
                                className="input input-bordered"
                                required
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

export default Login;
