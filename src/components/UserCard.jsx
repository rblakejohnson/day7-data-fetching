export default function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "6px", padding: "14px", backgroundColor: "#fafafa" }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{user.name}</h3>
      <p style={{ margin: "4px 0", color: "#555" }}><strong>Email:</strong> {user.email}</p>
      <p style={{ margin: "4px 0", color: "#555" }}><strong>Company:</strong> {user.company?.name || "N/A"}</p>
    </div>
  )
}