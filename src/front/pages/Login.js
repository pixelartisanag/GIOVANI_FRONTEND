import AuthSessionStatus from 'front/components/old/AuthSessionStatus'
import AuthValidationErrors from 'front/components/old/AuthValidationErrors'
import Layout from 'front/components/Layouts/front/AppLayout'
import Input from 'front/components/old/Input'
import {useAuth} from 'hooks/auth'
import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom';

const Login = () => {

    const {login} = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/'
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = async event => {
        event.preventDefault()
        login({email, password, setErrors, setStatus})
    }

    return (
        <Layout>
            <section className="mt-60 mb-60">
                <div className="container">
                    <div className="sign widget ">
                        <div className="section-title">
                            <h5>Login</h5>
                        </div>
                        {/* Session Status */}
                        <AuthSessionStatus className="mb-4" status={status}/>
                        {/* Validation Errors */}
                        <AuthValidationErrors className="mb-4" errors={errors}/>
                        <form
                            onSubmit={submitForm}
                            className="sign-form widget-form "
                        >
                            <div className="form-group">
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    placeholder="Email*"
                                    className="form-control"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>
                            <div className="form-group">
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="form-control"
                                    placeholder="Password*"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className="sign-controls form-group">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        className="custom-control-input"
                                        id="remember_me"
                                        type="checkbox"
                                        name="remember"
                                    />
                                    <label className="custom-control-label" htmlFor="rememberMe">
                                        Remember Me
                                    </label>
                                </div>
                                <NavLink to="/forgot-password" className="btn-link  ml-auto">
                                    Forgot Password?
                                </NavLink>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn-custom">
                                    Login now
                                </button>
                            </div>
                            <p className="form-group text-center">
                                Don't have an account?{" "}
                                <NavLink to={'/register'} className="btn-link">
                                    Create One
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login
