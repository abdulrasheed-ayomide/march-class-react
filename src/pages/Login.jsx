import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import z from 'zod';
import { publicInstance } from '../api/api';
import authContext from '../context/authContext';


export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate()
    const [errorMessage, seterrorMessage] = useState("");
    const { login } = useContext(authContext)
    const [unverifiedEmail, setUnverifiedEmail] = useState("");



    const productSchema = z.object({
        email: z.string().email().nonempty(),
        password: z.string()
            .nonempty()
            .min(6, "password must be atleast 6 characters long")
    })


    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(productSchema)
        }
    )



    const onSubmit = async (data) => {

        try {

            setLoading(true);
            setDisabled(true);
            const response = await publicInstance.post("api/routes/login", data);

            console.log(response.data);

            if (response && response.data) {

                const user = response.data.user;
                const token = response.data.token;

                login({ user, token });

                navigate("/");
            }

        } catch (error) {

            console.log(error?.response?.data?.message || error.message);

            seterrorMessage(error?.response?.data?.message || "Login failed");
            if (error?.response?.data?.verified === false) {

                setUnverifiedEmail(
                    error.response.data.email
                );
            }
            console.log(error);

        } finally {
            setLoading(false);
            setDisabled(false);
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
                <h2>Product Details</h2>

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


                <button disabled={disabled} type="submit" style={buttonStyle}>
                    {loading ? "loading" : "submit"}
                </button>

                <p style={{ color: "red" }}>
                    {errorMessage}
                </p>

                {
                    unverifiedEmail && (
                        <p>
                            Your email is not verified.
                            <span
                                onClick={() =>
                                    navigate("/verify-email", {
                                        state: {
                                            email: unverifiedEmail
                                        }
                                    })
                                }
                                style={{
                                    color: "blue",
                                    cursor: "pointer",
                                    marginLeft: "5px"
                                }}
                            >
                                Verify now
                            </span>
                        </p>
                    )
                }
            </form>



        </div>
    )
}