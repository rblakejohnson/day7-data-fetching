import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import UserList from "./UserList"

export default function UserDirectory() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message || "Failed to fetch users")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <p>Loading users from API...</p>
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>

  return (
    <div>
      <h2>User Directory</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserList users={filteredUsers} />
    </div>
  )
}