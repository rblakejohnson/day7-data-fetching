export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc"
      }}
    />
  )
}