import ApplicationLogo from 'front/components/old/ApplicationLogo'
import AuthCard from 'front/components/old/AuthCard'
import AuthSessionStatus from 'front/components/old/AuthSessionStatus'
import AuthValidationErrors from 'front/components/old/AuthValidationErrors'
import Button from 'front/components/old/Button'
import GuestLayout from 'front/components/Layouts/GuestLayout'
import Input from 'front/components/old/Input'
import Label from 'front/components/old/Label'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import {NavLink} from 'react-router-dom';

const ForgotPassword = () => {
  const { forgotPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    forgotPassword({ email, setErrors, setStatus })
  }

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <NavLink to="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </NavLink>
        }>
        <div className="mb-4 text-sm text-gray-600">
          Forgot your password? No problem. Just let us know your
          email address and we will email you a password reset link
          that will allow you to choose a new one.
        </div>
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
              name="email"
              value={email}
              className="block mt-1 w-full"
              onChange={event => setEmail(event.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="flex items-center justify-end mt-4">
            <Button>Email Password Reset Link</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}

export default ForgotPassword
