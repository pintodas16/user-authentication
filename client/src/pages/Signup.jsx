
// import Img from '../assets/img/authentication/auth.png';
// import GoogleIcon from "../assets/img/authentication/google.png";
// import { Link } from "react-router-dom";

// import InputText from '../Components/InputText';
// import InputError from '../Components/InputError';
// import InputPassword from '../Components/InputPassword';
// import Title from '../Components/Title';
// import Logo from '../Components/Logo';


// import { useState ,useEffect} from "react";

// import {useDispatch, useSelector} from 'react-redux';
// import { regiserUserthunk } from '../features/authentication/authenticationSlice';  
// import { useNavigate } from 'react-router-dom';




// function Register() {

//     const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, successMessage } = useSelector((state) => state.auth);
    
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         password_confirmation: "",
//     });
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);
    

//     // Handle Input Change
//     const handleChange = (e) => {
//         const { name, value, type } = e.target;

//         setFormData({
//         ...formData,
//         [name]: value,
//         });
//     };

//      // Handle submit form
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         console.log(formData);
//         setErrors({});

//         try {
//         } catch (error) {}
//     };
//     useEffect(() => {
//         return () => {
//                 setFormData(prev=>({
//                     ...prev,
//                     password: '',
//                     password_confirmation: ''
//                 }))
//         };
//     }, []);

    
//     return (
//         <div className="bg-[#FAFAFA] px-10 lg:px-16 xl:px-[4.7rem]">
//             <div className="max-w-7xl mx-auto py-10">
//                 <div className="grid grid-cols-2 gap-19">
//                     <div className=" max-w-[35.625rem] self-center  sm:justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1">
//                         <div className="flex flex-col gap-10">
//                             <Logo />
//                             <div className="bg-white rounded-6.5xl p-7.5 shadow-shadow-one flex flex-col gap-7.5">
//                                 <Title
//                                     title="Create Account"
//                                     content="Create an account to continue with ShopHub!"
//                                 />
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="flex flex-col gap-4.25">
//                                         <InputText
//                                             type="text"
//                                             label="Full Name"
//                                             placeholder="Full Name"
//                                             value={formData.name}
//                                             name='name'
//                                             isFocused={true}
//                                             onChange={handleChange}
//                                         />
//                                         <InputError message={errors.name} />
//                                         <InputText
//                                             type="email"
//                                             label="Email Address"
//                                             placeholder="Email address"
//                                             isFocused={true}
//                                             value={formData.email}
//                                             name='email'
//                                             onChange={handleChange}
                                        
//                                         />
//                                         <InputError message={errors.email} />
                                        
//                                         <InputPassword
//                                             label="Password"
//                                             placeholder="Password"
//                                             name='password'
//                                             value={formData.password}
//                                             onChange={handleChange}
//                                         />
//                                         <InputError message={errors.password} />

//                                         <InputPassword
//                                             label="Password"
//                                             placeholder="Confirm Password"
//                                             name='password_confirmation'
//                                             value={formData.password_confirmation}
//                                             onChange={handleChange}
//                                         />
//                                         <InputError
//                                             message={
//                                                 errors.password_confirmation
//                                             }
//                                         />

//                                         <button className="black-btn mt-3 text-center rounded-xl px-5 py-2.5 font-Manrope font-semibold text-small ">
//                                             Continue
//                                         </button>
//                                     </div>
//                                 </form>
//                                 <div>
//                                     <span className="flex items-center gap-2 ">
//                                         <span className="block h-px bg-gray w-1/2"></span>
//                                         <span className="font-Manrope font-normal text-small text-light-dark">
//                                             OR
//                                         </span>
//                                         <span className="block h-px bg-gray w-1/2"></span>
//                                     </span>
//                                 </div>

//                                 <div className="flex-auto flex gap-4.25 items-center justify-center">
//                                     <Link
//                                         to="/login/google"
//                                         className="w-full  py-2.5 px-4 rounded-xl border border-gray font-Manrope font-semibold text-small  text-dark flex justify-center items-center gap-2.5"
//                                     >
//                                         <img
//                                             className=""
//                                             src={GoogleIcon}
//                                             alt=""
//                                         />
//                                         Continue With Google
//                                     </Link>

//                                     {/* this button is for apple login  */}
//                                     {/* <button className=" py-2.5 px-4 rounded-xl border border-gray font-Manrope font-semibold text-small  text-dark flex items-center gap-2.5">
//                                         <img
//                                             className=""
//                                             src={AppleIcon}
//                                             alt=""
//                                         />
//                                         Continue With Apple
//                                     </button> */}
//                                 </div>
//                                 <p
//                                     to=""
//                                     className="text-center font-Manrope font-normal text-small"
//                                 >
//                                     Already have an account?
//                                     <Link
//                                         to="/login"
//                                         className="font-semibold"
//                                     >
//                                         &nbsp;Sign In
//                                     </Link>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* image contianer  */}
//                     <div className="hidden lg:block">
//                         <div className="h-[65.625rem] w-full">
//                             <img className="h-full w-full" src={Img} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Register;



// new code 


import Img from '../assets/img/authentication/auth.png';
import GoogleIcon from "../assets/img/authentication/google.png";
import { Link, useNavigate } from "react-router-dom";

import InputText from '../Components/InputText';
import InputError from '../Components/InputError';
import InputPassword from '../Components/InputPassword';
import Title from '../Components/Title';
import Logo from '../Components/Logo';

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk, clearMessages } from '../features/authentication/authenticationSlice';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, successMessage } = useSelector((state) => state.authentication);
    console.log(error)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState({});

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Client-side validation
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (formData.password !== formData.password_confirmation)
            newErrors.password_confirmation = "Passwords do not match.";
        return newErrors;
    };

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        dispatch(registerUserThunk(formData));
    };

    // Redirect on success
    useEffect(() => {
        if (successMessage) {
            navigate("/login");
            dispatch(clearMessages());
        }
    }, [successMessage]);

    // Clear passwords on unmount
    useEffect(() => {
        return () => {
            setFormData((prev) => ({
                ...prev,
                password: '',
                password_confirmation: '',
            }));
        };
    }, []);

    return (
        
        <div className="bg-[#FAFAFA] px-10 lg:px-16 xl:px-[4.7rem]">
            <div className="max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-2 gap-19">
                    <div className="max-w-[35.625rem] self-center sm:justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1">
                        <div className="flex flex-col gap-10">
                            <Logo />
                            <div className="bg-white rounded-6.5xl p-7.5 shadow-shadow-one flex flex-col gap-7.5">
                                <Title
                                    title="Create Account"
                                    content="Create an account to continue with ShopHub!"
                                />

                                {/* Redux error message */}
                                {error && (
                                    <p className="text-red-500 text-sm font-Manrope text-center">{error}</p>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-4.25">
                                        <InputText
                                            type="text"
                                            label="Full Name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            name='name'
                                            isFocused={true}
                                            onChange={handleChange}
                                        />
                                        <InputError message={errors.name} />

                                        <InputText
                                            type="email"
                                            label="Email Address"
                                            placeholder="Email address"
                                            value={formData.email}
                                            name='email'
                                            onChange={handleChange}
                                        />
                                        <InputError message={errors.email} />

                                        <InputPassword
                                            label="Password"
                                            placeholder="Password"
                                            name='password'
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <InputError message={errors.password} />

                                        <InputPassword
                                            label="Confirm Password"
                                            placeholder="Confirm Password"
                                            name='password_confirmation'
                                            value={formData.password_confirmation}
                                            onChange={handleChange}
                                        />
                                        <InputError message={errors.password_confirmation} />

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="black-btn mt-3 text-center rounded-xl px-5 py-2.5 font-Manrope font-semibold text-small disabled:opacity-60"
                                        >
                                            {loading ? "Creating Account..." : "Continue"}
                                        </button>
                                    </div>
                                </form>

                                

                                <p className="text-center font-Manrope font-normal text-small">
                                    Already have an account?
                                    <Link to="/login" className="font-semibold">&nbsp;Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image container */}
                    <div className="hidden lg:block">
                        <div className="h-[65.625rem] w-full">
                            <img className="h-full w-full" src={Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
