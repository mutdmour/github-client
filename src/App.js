import React from "react";
import GithubRepos from "./components/GithubRepos";
import ErrorBoundary from "./components/ErrorBoundary";

// import "./styles.scss";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <GithubRepos />
      </div>
    </ErrorBoundary>
  );
}
