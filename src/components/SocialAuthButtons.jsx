import { useState } from 'react'
import { AppIcon } from './Icons'

const SocialAuthButtons = ({ mode = 'signin' }) => {
  const [message, setMessage] = useState('')
  const isSignup = mode === 'signup'
  const action = isSignup ? 'Sign up' : 'Sign in'
  const actionName = isSignup ? 'sign-up' : 'sign-in'

  return (
    <section className="auth-social" aria-label={`Other ${actionName} options`}>
      <div className="auth-divider"><span>Or</span></div>
      {[
        { name: 'Google', icon: 'google' },
        { name: 'GitHub', icon: 'github' },
      ].map((provider) => (
        <button
          key={provider.icon}
          className={`auth-social-button auth-social-button--${provider.icon}`}
          type="button"
          onClick={() => setMessage(`${provider.name} ${actionName} is not available yet. Please try again later.`)}
        >
          <span className="auth-social-icon" aria-hidden="true"><AppIcon name={provider.icon} size={22} /></span>
          <span>{action} with {provider.name}</span>
        </button>
      ))}
      {message && <p className="auth-social-message" role="status">{message}</p>}
    </section>
  )
}

export default SocialAuthButtons
