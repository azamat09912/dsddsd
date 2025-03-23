import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Sregister'
import Projects from './pages/Projects'
import Projects from './pages/About'
import Main from './pages/Main'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}>
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/main" element={<Main />} />
        </Route>

        <Route path="*" element={<Navigate to={isAuth ? "/main" : "/login"} replace />} />
      </Routes>
    </Router>
  )
}
