import { useState, useEffect } from "react"

export default function Demo3_DerivedSearch() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h3>Demo 3: Derived State Search</h3>
      <input
        placeholder="Filter list..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filtered.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}