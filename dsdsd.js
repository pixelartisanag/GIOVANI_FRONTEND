import AuthCard from "./src/components/AuthCard";
import {Link, NavLink} from "react-router-dom";
import ApplicationLogo from "./src/components/ApplicationLogo";
import AuthSessionStatus from "./src/components/AuthSessionStatus";
import AuthValidationErrors from "./src/components/AuthValidationErrors";
import Label from "./src/components/Label";
import Input from "./src/components/Input";
import Button from "./src/components/Button";

<AuthCard
    logo={
        <Link to="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        </Link>
    }>
    {/* Session Status */}
    <AuthSessionStatus className="mb-4" status={status} />
    {/* Validation Errors */}
    <AuthValidationErrors className="mb-4" errors={errors} />
    <form onSubmit={submitForm}>
        {/* Email Address */}
        <div>
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                type="email"
                value={email}
                className="block mt-1 w-full"
                onChange={event => setEmail(event.target.value)}
                required
                autoFocus
            />
        </div>
        {/* Password */}
        <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
                id="password"
                type="password"
                value={password}
                className="block mt-1 w-full"
                onChange={event => setPassword(event.target.value)}
                required
                autoComplete="current-password"
            />
        </div>
        {/* Remember Me */}
        <div className="block mt-4">
            <label
                htmlFor="remember_me"
                className="inline-flex items-center">
                <input
                    id="remember_me"
                    type="checkbox"
                    name="remember"
                    className="rounded border-gray-300 text-indigo-600
                shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Remember me
              </span>
            </label>
        </div>
        <div className="flex items-center justify-end mt-4">
            <NavLink
                to="/forgot-password"
                className="underline text-sm text-gray-600 hover:text-gray-900"
            >
                Forgot your password?
            </NavLink>
            <Button className="ml-3">
                Login
            </Button>
        </div>
    </form>
</AuthCard>