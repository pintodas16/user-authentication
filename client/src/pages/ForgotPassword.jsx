// import Img from '../assets/img/authentication/auth.png';
// import { Link } from "react-router-dom";
// import InputText from '../Components/InputText';
// import Title from '../Components/Title';
// import Logo from '../Components/Logo';
// import InputError from '../Components/InputError';
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { forgotPasswordThunk, clearMessages } from '../features/authentication/authenticationSlice';
// import { useNavigate } from 'react-router-dom';



// function ForgotPassword() {

//     const [formData, setFormData] = useState({
//     email: "",
    
//   });

//    const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       email: value,
//     });
//   };

//   // Handle submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors({});

//     try {
//     } catch (error) {}
//   };

//     return (
//         <div className="bg-[#FAFAFA] h-screen px-10 lg:px-16 xl:px-[4.7rem]">
//             <div className="max-w-7xl mx-auto py-10">
//                 <div className="grid grid-cols-2 gap-19">
//                     {/* form conatiner  */}
//                     <div className=" max-w-[35.625rem] self-center  sm:justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1">
//                         <div className="flex flex-col gap-10">
//                             {/* logo  */}
//                             <Logo />
//                             {/* form  */}
//                             <div className="bg-white rounded-6.5xl p-7.5 shadow-shadow-one flex flex-col gap-7.5">
//                                 <Title
//                                     title="Reset Your Password"
//                                     content="Please enter your email address below to get an email to reset your password."
//                                 />
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="flex flex-col gap-4.25">
//                                         <InputText
//                                             type="email"
//                                             placeholder="Email address"
//                                             name="email"
//                                             label="Email address"
//                                             isFocused={true}
//                                             value={formData.email}
//                                             onChange={handleChange}
                                        
//                                         />

//                                         <InputError message={errors.email} />
//                                         <button className="black-btn mt-3 text-center rounded-xl px-5 py-2.5 font-Manrope font-semibold text-small">
//                                             Reset Password
//                                         </button>
//                                     </div>
//                                 </form>

//                                 <Link
//                                     href=""
//                                     className="text-center font-Manrope font-normal text-small"
//                                 >
//                                     Have your password?
//                                     <Link
//                                         to="/login"
//                                         className="font-semibold"
//                                     >
//                                         &nbsp;Sign In
//                                     </Link>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     {/* image contianer  */}
//                     <div className="hidden lg:block ">
//                         <div className="h-[50rem] w-full">
//                             <img className="h-full w-full" src={Img} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ForgotPassword;





import Img from '../assets/img/authentication/auth.png';
import { Link } from "react-router-dom";
import InputText from '../Components/InputText';
import Title from '../Components/Title';
import Logo from '../Components/Logo';
import InputError from '../Components/InputError';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordThunk, clearMessages } from '../features/authentication/authenticationSlice';

function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.authentication);

  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    dispatch(clearMessages());
    setFormData({ email: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(forgotPasswordThunk(formData.email));
  };

  return (
    <div className="bg-[#FAFAFA] h-screen px-10 lg:px-16 xl:px-[4.7rem]">
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 gap-19">

          {/* FORM CONTAINER */}
          <div className="max-w-[35.625rem] self-center sm:justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-10">
              <Logo />

              <div className="bg-white rounded-6.5xl p-7.5 shadow-shadow-one flex flex-col gap-7.5">
                <Title
                  title="Reset Your Password"
                  content="Please enter your email address below to get an email to reset your password."
                />

                {/* ERROR BANNER */}
                {error && (
                  <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">
                    {error}
                  </div>
                )}

                {/* SUCCESS BANNER */}
                {successMessage && (
                  <div className="bg-green-50 text-green-600 text-sm px-4 py-3 rounded-xl">
                    {successMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4.25">
                    <InputText
                      type="email"
                      placeholder="Email address"
                      name="email"
                      label="Email address"
                      isFocused={true}
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <InputError message={error} />

                    <button
                      type="submit"
                      disabled={loading || !!successMessage}
                      className="black-btn mt-3 text-center rounded-xl px-5 py-2.5 font-Manrope font-semibold text-small disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Reset Password"}
                    </button>
                  </div>
                </form>

                <div className="text-center font-Manrope font-normal text-small">
                  Have your password?
                  <Link to="/login" className="font-semibold">
                    &nbsp;Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="hidden lg:block">
            <div className="h-[50rem] w-full">
              <img className="h-full w-full" src={Img} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;