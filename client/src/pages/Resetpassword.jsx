import Img from "../assets/img/authentication/auth.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Title from "../Components/Title";
import Logo from "../Components/Logo";
import InputError from "../Components/InputError";
import InputPassword from "../Components/InputPassword";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordThunk, clearMessages } from "../features/authentication/authenticationSlice";

function ResetPassword() {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, successMessage } = useSelector((state) => state.authentication);

    const [formData, setFormData] = useState({
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Client-side validation
    const validate = () => {
        const newErrors = {};
        if (!formData.password) newErrors.password = "Password is required.";
        else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        if (formData.password !== formData.password_confirmation)
            newErrors.password_confirmation = "Passwords do not match.";
        return newErrors;
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        dispatch(resetPasswordThunk({ token, password: formData.password }));
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
            setFormData({ password: "", password_confirmation: "" });
        };
    }, []);

    return (
        <div className="bg-[#FAFAFA] h-screen px-10 lg:px-16 xl:px-[4.7rem]">
            <div className="max-w-7xl mx-auto py-10">
                <div className="grid grid-cols-2 gap-19">
                    {/* Form container */}
                    <div className="max-w-[35.625rem] self-center sm:justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1">
                        <div className="flex flex-col gap-10">
                            <Logo />
                            <div className="bg-white rounded-6.5xl p-7.5 shadow-shadow-one flex flex-col gap-7.5">
                                <Title
                                    title="Change Password"
                                    content="Please fill out the form below to change your password and set a new one!"
                                />

                                {/* Redux error */}
                                {error && (
                                    <p className="text-red-500 text-sm font-Manrope text-center">{error}</p>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-4.25">
                                        <InputPassword
                                            placeholder="New password"
                                            label="New Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <InputError message={errors.password} />

                                        <InputPassword
                                            placeholder="Re-enter new password"
                                            label="Re-enter New Password"
                                            name="password_confirmation"
                                            value={formData.password_confirmation}
                                            onChange={handleChange}
                                        />
                                        <InputError message={errors.password_confirmation} />

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="black-btn mt-3 text-center rounded-xl px-5 py-2.5 font-Manrope font-semibold text-small disabled:opacity-60"
                                        >
                                            {loading ? "Resetting..." : "Reset Password"}
                                        </button>
                                    </div>
                                </form>

                                <span className="text-center font-Manrope font-normal text-small">
                                    Have your password?
                                    <Link to="/login" className="font-semibold">
                                        &nbsp;Sign In
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image container */}
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

export default ResetPassword;