import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const host = "http://localhost:5000";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            });
            const json = await response.json();

            if (json.authtoken) {
                localStorage.setItem('token', json.authtoken);
                props.showAlert("Logged in successfully", "success");
                navigate("/");
            } else {
                props.showAlert(json.error || "Invalid credentials", "danger");
            }
        } catch (err) {
            props.showAlert("Could not reach the server. Please try again.", "danger");
        } finally {
            setLoading(false);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="nb-auth-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600&display=swap');

                .nb-auth-page {
                    min-height: 100vh;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    font-family: 'Inter', sans-serif;
                    background: #FDFCF8;
                }

                .nb-cover {
                    position: relative;
                    background: #1B1F3B;
                    background-image:
                        linear-gradient(#2A2F55 1px, transparent 1px);
                    background-size: 100% 42px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 56px;
                    overflow: hidden;
                }

                .nb-cover::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 88px;
                    width: 2px;
                    height: 100%;
                    background: #C0392B;
                    opacity: 0.75;
                }

                .nb-cover::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 36px;
                    width: 14px;
                    height: 100%;
                    background-image: radial-gradient(circle, #FDFCF8 6px, transparent 6.5px);
                    background-size: 14px 84px;
                    background-repeat: repeat-y;
                    opacity: 0.9;
                }

                .nb-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #FDFCF8;
                    font-weight: 600;
                    font-size: 18px;
                    z-index: 2;
                    margin-left: 40px;
                }

                .nb-brand-mark {
                    width: 30px;
                    height: 30px;
                    flex-shrink: 0;
                }

                .nb-cover-quote {
                    z-index: 2;
                    margin-left: 40px;
                    max-width: 420px;
                }

                .nb-cover-quote h1 {
                    font-family: 'Caveat', cursive;
                    font-size: 56px;
                    line-height: 1.05;
                    color: #FDFCF8;
                    margin: 0 0 16px 0;
                }

                .nb-cover-quote p {
                    color: #9BA3D1;
                    font-size: 15px;
                    line-height: 1.6;
                    margin: 0;
                }

                .nb-cover-footer {
                    z-index: 2;
                    margin-left: 40px;
                    color: #6B72A6;
                    font-size: 13px;
                }

                .nb-form-side {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                }

                .nb-form-wrap {
                    width: 100%;
                    max-width: 360px;
                }

                .nb-form-wrap h2 {
                    font-family: 'Caveat', cursive;
                    font-size: 42px;
                    color: #1B1F3B;
                    margin: 0 0 6px 0;
                }

                .nb-form-sub {
                    color: #6B7280;
                    font-size: 14px;
                    margin: 0 0 32px 0;
                }

                .nb-field {
                    margin-bottom: 26px;
                }

                .nb-field label {
                    display: block;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: #9CA3AF;
                    margin-bottom: 8px;
                }

                .nb-field input {
                    width: 100%;
                    border: none;
                    border-bottom: 2px solid #E5E2D8;
                    background: transparent;
                    padding: 8px 2px;
                    font-size: 16px;
                    font-family: 'Inter', sans-serif;
                    color: #1B1F3B;
                    outline: none;
                    transition: border-color 0.2s ease;
                }

                .nb-field input:focus {
                    border-bottom-color: #C0392B;
                }

                .nb-submit {
                    width: 100%;
                    background: #1B1F3B;
                    color: #FDFCF8;
                    border: none;
                    border-radius: 6px;
                    padding: 13px;
                    font-size: 15px;
                    font-weight: 600;
                    font-family: 'Inter', sans-serif;
                    cursor: pointer;
                    transition: background 0.2s ease, transform 0.1s ease;
                    margin-top: 8px;
                }

                .nb-submit:hover:not(:disabled) {
                    background: #C0392B;
                }

                .nb-submit:active:not(:disabled) {
                    transform: scale(0.98);
                }

                .nb-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .nb-switch {
                    margin-top: 28px;
                    font-size: 14px;
                    color: #6B7280;
                    text-align: center;
                }

                .nb-switch a {
                    color: #C0392B;
                    font-weight: 600;
                    text-decoration: none;
                }

                .nb-switch a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 860px) {
                    .nb-auth-page {
                        grid-template-columns: 1fr;
                    }
                    .nb-cover {
                        display: none;
                    }
                    .nb-form-side {
                        padding: 24px;
                    }
                }
            `}</style>

            <div className="nb-cover">
                <div className="nb-brand">
                    <svg className="nb-brand-mark" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="2" width="15" height="20" rx="2" stroke="#FDFCF8" strokeWidth="1.6" />
                        <line x1="7" y1="7" x2="15" y2="7" stroke="#C0392B" strokeWidth="1.4" />
                        <line x1="7" y1="11" x2="15" y2="11" stroke="#9BA3D1" strokeWidth="1.2" />
                        <line x1="7" y1="15" x2="12" y2="15" stroke="#9BA3D1" strokeWidth="1.2" />
                    </svg>
                    iNotebook
                </div>
                <div className="nb-cover-quote">
                    <h1>Every idea deserves a page.</h1>
                    <p>Keep your notes organized, tagged, and always within reach — synced to your account, private to you.</p>
                </div>
                <div className="nb-cover-footer">
                    © {new Date().getFullYear()} iNotebook
                </div>
            </div>

            <div className="nb-form-side">
                <div className="nb-form-wrap">
                    <h2>Welcome back</h2>
                    <p className="nb-form-sub">Log in to pick up where you left off.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="nb-field">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={credentials.email}
                                onChange={onChange}
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="nb-field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={onChange}
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button type="submit" className="nb-submit" disabled={loading}>
                            {loading ? "Logging in..." : "Log in"}
                        </button>
                    </form>

                    <p className="nb-switch">
                        Don't have an account? <Link to="/signup">Create one</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;