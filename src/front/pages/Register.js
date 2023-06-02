import Layout from 'front/components/Layouts/front/AppLayout'
import AuthCard from 'front/components/old/AuthCard'
import AuthValidationErrors from 'front/components/old/AuthValidationErrors'
import Button from 'front/components/old/Button'
import Input from 'front/components/old/Input'
import Label from 'front/components/old/Label'
import { useAuth } from 'hooks/auth'
import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom';

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/'
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()
    register({ name, email, password, password_confirmation, setErrors })
  }

  return (
    <Layout>
      <section className="mt-60 mb-60">
        <div className="container">
          <div className="sign widget">
            <div className="section-title">
              <h5>Sign up</h5>
            </div>
            <form className="sign-form widget-form contact_form " onSubmit={submitForm}>
              <div className="form-group">
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Your name"
                    required
                    autoFocus
                />
              </div>
              <div className="form-group">
                <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
              </div>
              <div className="form-group">
                <input
                    id="password"
                    type="password"
                    value={password}
                    className="form-control"
                    placeholder="Your password"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />
              </div>
              <div className="form-group">
                <input
                    id="password_confirmation"
                    type="password"
                    value={password_confirmation}
                    placeholder="Confirm password"
                    className="form-control"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />
              </div>
              <div className="sign-controls form-group">
                <div className="custom-control custom-checkbox">
                  <input
                      type="checkbox"
                      className="custom-control-input"
                      id="rememberMe"
                  />
                  <label className="custom-control-label" htmlFor="rememberMe">

                    <a href="signup.html#" className="btn-link">
                      Agree to our terms & conditions
                    </a>{" "}
                  </label>
                </div>
              </div>
              <div className="form-group">
                <Button className="btn-custom">Register</Button>
              </div>
              <p className="form-group text-center">
                Already have an account?
                <NavLink to={'/login'} className="btn-link">
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Register
