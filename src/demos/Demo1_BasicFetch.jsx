import { useState, useEffect } from "react"

export default function Demo1_BasicFetch() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h3>Demo 1: Basic Fetch (No Status States)</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}