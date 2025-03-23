import { useNavigate, Outlet } from 'react-router-dom'

export default function Login({ setIsAuth }) {
  const navigate = useNavigate()

  function handleLogin() {
    setIsAuth(true)
    navigate('/main')
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/login/register">Register</a></p>
      <Outlet />
    </div>
  )
}
