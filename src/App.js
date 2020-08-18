import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

export default function App() {
  return (
    <div>
      <h1>React App</h1>
      <Header/>
      <form>
        <input type="text"/>
        {/*    <input type="submit" value="seach"/> */}
        <button type="submit">search</button>
      </form>
      <SearchResults/>
    </div>
  );
}
