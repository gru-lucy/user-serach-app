import { Route, Routes } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages"
import Users from "./pages/users"
import UserProfile from "./pages/users/UserProfile"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
