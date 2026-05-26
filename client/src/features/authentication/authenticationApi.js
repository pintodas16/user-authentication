
import API from "../../api/axios";


export const registerUser = async (formData) => {
    const response = await API.post("signup", formData);
    console.log("Registration response:", response); // Debug log
    return response.data;
}

export const loginUser = async (formData) => {
    const response = await API.post("signin", formData);
    localStorage.setItem("token", response.data.token);
    return response.data;
}

export const forgotPassword = async (email) => {
    const response = await API.post("forgot-password", { email });
    return response.data;
}

export const resetPassword = async ({ token, password }) => {
    const response = await API.post(`reset-password/${token}`, { password });
    return response.data;
}

// authenticationApi.js
export const getMe = async () => {
  const response = await API.get("/auth/me");
  return response.data;
};



