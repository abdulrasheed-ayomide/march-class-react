import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';
import { publicInstance } from '../api/api';

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, seterrorMessage] = useState("");

    const productSchema = z.object({
        name: z.string().nonempty("Name is required").min(3, "Name must be at least 3 characters long"),
        email: z.string().email("Invalid email").nonempty("Email is required"),
        password: z.string().nonempty("Password is required").min(6, "Password must be at least 6 characters long"),
        age: z.string().nonempty("Age is required").refine((val) => {
            const age = parseInt(val, 10);
            return !isNaN(age) && age > 0;
        }, "Age must be a positive number")
    });

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(productSchema)
        }
    )

    const onSubmit = async (data) => {
        console.log('registering user...');
        setLoading(true);

        try {
            const response = await publicInstance.post("/api/routes/register", data)
            console.log(response);
            if (response && response.data && response.data.token) {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("verifyEmail", data.email);
                navigate("/verify-email", {
                    state: {
                        email: data.email
                    }
                });
            }
        } catch (error) {
            console.log(error.response);
            const message = error?.response?.data?.message || "Registration failed. Please try again.";
            seterrorMessage(message);
        } finally {
            setLoading(false);
        }
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        gap: '10px',
    };

    const inputStyle = {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <h2 style={{ textAlign: "center" }}>Register</h2>
                {/* name input (string) */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        style={inputStyle}
                        {...register("name")}
                        required
                    />
                </div>

                {/* email Input (string) */}
                <div>
                    <label htmlFor="email">email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={inputStyle}
                        {...register("email")}
                        required
                    />
                    {errors.email && <p style={{ color: "red", fontSize: "10px" }}>{errors.email.message}</p>}
                </div>



                {/* Price Input (number/float) */}
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="password" // Use type="number" for numeric input
                        step="0.01"    // Allows for float input (e.g., two decimal places)
                        id="password"
                        name="password"
                        {...register("password")}
                        style={inputStyle}
                        required
                    />
                    {errors.password && <p style={{ color: "red", fontSize: "10px" }}>{errors.password.message}</p>}

                </div>

                {/* Age */}

                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        {...register("age")}
                        style={inputStyle}
                        required
                    />
                    {errors.age && <p style={{ color: "red", fontSize: "10px" }}>{errors.age.message}</p>}
                </div>


                <button disabled={disabled} type="submit" style={buttonStyle}>
                    {loading ? "loading" : "submit"}
                </button>
                <p>{errorMessage}</p>
            </form>



        </div>
    )
}