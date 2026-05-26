import Img from "../assets/img/authentication/auth.png";
import GoogleIcon from "../assets/img/authentication/google.png";
import AppleIcon from "../assets/img/authentication/apple.png";
import { Link } from "react-router-dom";
import InputText from "../Components/InputText";
import InputPassword from "../Components/InputPassword";
import Checkbox from "../Components/UI/Checkbox";
import Title from "../Components/Title";
import Logo from "../Components/Logo";
import InputError from "../Components/InputError";
import HideIcon from "../Components/UI/HideIcon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk,clearMessages } from "../features/authentication/authenticationSlice";
import { useNavigate } from "react-router-dom";

function Login() {


    const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.authentication); // ✅ matches your slice name

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch(clearMessages()); // ✅ clears error/successMessage on input
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUserThunk(formData));

    if (loginUserThunk.fulfilled.match(result)) {
      navigate("/"); // ✅ redirect to home on success
    }
  };


  return (
    

    <div className="bg-[#FAFAFA] min-h-screen px-6 lg:px-16 xl:px-[4.7rem]">
      <div className="max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="max-w-[35.625rem] w-full mx-auto lg:mx-0">
            <div className="flex flex-col gap-10">
              <Logo />

              {/* LOGIN CARD */}
              <div className="bg-white rounded-[2rem] p-8 shadow-shadow-one flex flex-col gap-8">
                <Title
                  title="Sign In"
                  content="Welcome back! Please enter your details"
                />

                    {/* ERROR BANNER */}
                {error && (
                  <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">
                    {error}
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-5">
                    {/* EMAIL */}
                    <div>
                      <InputText
                        type="email"
                        name="email"
                        label="Email Address"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      <InputError message={error} />
                    </div>

                    {/* PASSWORD */}
                    <div>
                      <InputPassword
                        name="password"
                        label="Password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      <InputError message={error} />
                    </div>

                    {/* REMEMBER + FORGOT */}
                    <div className="flex items-center justify-between">
                      <Checkbox
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                        label="Remember me"
                      />

                      <Link
                        to="/forgot-password"
                        className="text-sm text-dark hover:text-sky-600 hover:underline transition"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="black-btn mt-2 rounded-xl px-5 py-3 font-semibold text-small disabled:opacity-50"
                    >
                      {loading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                </form>

                
                {/* REGISTER */}
                <div className="text-center text-small">
                  Don’t have an account?
                  <Link
                    to="/register"
                    className="font-semibold ml-1 hover:underline"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:block">
            <div className="h-[50rem] w-full">
              <img
                src={Img}
                alt="Authentication"
                className="h-full w-full object-cover rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
