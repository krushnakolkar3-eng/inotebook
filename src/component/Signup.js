import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const history = useHistory();

    // Deployed Render backend URL
    const host = "https://inotebook-backend-3194.onrender.com";

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.password !== credentials.cpassword) {
            props.showAlert("Passwords do not match", "danger");
            return;
        }

        try {
            const response = await fetch(
                `${host}/api/auth/createuser`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: credentials.name,
                        email: credentials.email,
                        password: credentials.password,
                    }),
                }
            );

            const json = await response.json();

            if (response.ok && json.authtoken) {
                localStorage.setItem('token', json.authtoken);
                props.showAlert(
                    "Account created successfully",
                    "success"
                );
                history.push("/");
            } else {
                props.showAlert(
                    json.error || json.errors?.[0]?.msg ||
                    "Failed to create account",
                    "danger"
                );
            }
        } catch (error) {
            console.error("Signup error:", error);
            props.showAlert(
                "Unable to connect to the server. Please try again.",
                "danger"
            );
        }
    };

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <h2 className="my-3">
                Create an account to use iNotebook
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={credentials.name}
                        onChange={onChange}
                        minLength={3}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                        minLength={5}
                        autoComplete="new-password"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        name="cpassword"
                        value={credentials.cpassword}
                        onChange={onChange}
                        minLength={5}
                        autoComplete="new-password"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Signup;