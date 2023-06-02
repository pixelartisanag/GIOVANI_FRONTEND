import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="sign widget ">
        <div className="section-title">
          <h5>Login</h5>
        </div>
        <form
          action="login.html#"
          className="sign-form widget-form "
          method="post"
        >
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
                Remember Me
              </label>
            </div>
            <a href="login.html#" className="btn-link  ml-auto">
              Forgot Password?
            </a>
          </div>
          <div className="form-group">
            <button type="submit" className="btn-custom">
              Login now
            </button>
          </div>
          <p className="form-group text-center">
            Don't have an account?{" "}
            <a href="signup.html" className="btn-link">
              Create One
            </a>{" "}
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
