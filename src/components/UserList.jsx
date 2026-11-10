import UserCard from "./UserCard"

export default function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found matching your search.</p>
  }

  return (
    <div style={{ display: "grid", gap: "12px" }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}