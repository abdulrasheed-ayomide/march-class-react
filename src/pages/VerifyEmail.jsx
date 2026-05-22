import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicInstance } from "../api/api";

const VerifyEmail = () => {

    const [otp, setOtp] = useState("");

    const location = useLocation();

    const navigate = useNavigate();

    const email = location.state?.email || localStorage.getItem("verifyEmail");

    const handleVerify = async () => {
        alert("Verifying email...");

        try {

            const response = await publicInstance.post(
                "/api/routes/verify-email",
                {
                    email,
                    otp
                }
            );

            alert(response.data.message);
            localStorage.removeItem("verifyEmail");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message
            );
        }
    };

    const handleResendOtp = async () => {
        alert("Resending OTP...");

        try {

            const response =
                await publicInstance.post(
                    "/api/routes/resend-otp",
                    { email }
                );

            alert(response.data.message);

        } catch (error) {

            console.log(error);

            alert(
                error?.response?.data?.message
            );
        }
    }

    return (
        <div>

            <h1>Verify Email</h1>

            <p>{email}</p>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />

            <button onClick={handleVerify}>
                Verify
            </button>
            <button onClick={handleResendOtp}>
                Resend OTP
            </button>

        </div>
    );
};

export default VerifyEmail;