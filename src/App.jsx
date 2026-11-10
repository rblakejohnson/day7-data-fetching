import { useState } from "react"
import UserDirectory from "./components/UserDirectory"
import Demo1_BasicFetch from "./demos/Demo1_BasicFetch"
import Demo2_LoadingAndError from "./demos/Demo2_LoadingAndError"
import Demo3_DerivedSearch from "./demos/Demo3_DerivedSearch"

export default function App() {
  const [tab, setTab] = useState("project")

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "20px", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        <h1>Day 7 — Data Fetching in React</h1>
        <nav style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setTab("project")}>Mini-Project</button>
          <button onClick={() => setTab("demo1")}>Demo 1: Basic Fetch</button>
          <button onClick={() => setTab("demo2")}>Demo 2: Loading & Error</button>
          <button onClick={() => setTab("demo3")}>Demo 3: Derived Search</button>
        </nav>
      </header>

      <main>
        {tab === "project" && <UserDirectory />}
        {tab === "demo1" && <Demo1_BasicFetch />}
        {tab === "demo2" && <Demo2_LoadingAndError />}
        {tab === "demo3" && <Demo3_DerivedSearch />}
      </main>
    </div>
  )
}