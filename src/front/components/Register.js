import React from "react";

class Register extends React.Component {
  render() {
    return (
      <div className="sign widget">
        <div className="section-title">
          <h5>Sign up</h5>
        </div>
        <form className="sign-form widget-form contact_form " method="post">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username*"
              name="username"
              defaultValue
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address*"
              name="email"
              defaultValue
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password*"
              name="password"
              defaultValue
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
                Agree to our{" "}
                <a href="signup.html#" className="btn-link">
                  terms & conditions
                </a>{" "}
              </label>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn-custom">
              Sign Up
            </button>
          </div>
          <p className="form-group text-center">
            Already have an account?{" "}
            <a href="login.html" className="btn-link">
              Login
            </a>{" "}
          </p>
        </form>
      </div>
    );
  }
}

export default Register;
