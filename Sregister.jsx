import React from "react"

export default function Sregister() {
    return (
      <div>
        <h2>Register Page</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
  