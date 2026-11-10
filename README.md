# Day 7: Data Fetching in React

Welcome to Day 7! Today we transition from static local state to consuming data from external APIs using `useEffect`, `fetch`, and `async/await`.

## Quick Start

```bash
# 1. Clone or extract repo
cd day7-data-fetching

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

## Learning Objectives
- Explain why data fetching is a side effect.
- Construct React components with `loading`, `error`, and `data` states.
- Perform safe `async/await` data fetching inside `useEffect`.
- Filter API results during render using derived state (avoiding unnecessary effects).

## Mini-Project Instructions
Build a searchable **API Directory App** fetching users from `https://jsonplaceholder.typicode.com/users`.

### Requirements
1. Render loading message while request is pending.
2. Render error message if request fails (`!response.ok` or network error).
3. Display list of users (Name, Email, Company).
4. Provide a search bar filtering users by name in real time without extra effects.

### README Reflection Questions
Include answers to the following in your final repository submission:
1. Why is data fetching considered a side effect in React?
2. Why do we need explicit loading and error states?
3. Why should search filtering be done during render rather than inside a `useEffect`?
4. What causes a component to re-render after data is fetched from an API?
