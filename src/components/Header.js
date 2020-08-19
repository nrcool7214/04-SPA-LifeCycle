import React from "react";

export default function Header(props) {
  return (
    <div>
      <header style={{ border: "1px solid","display":"flex","justifyContent":"space-between" }}>
        <h1>Search User</h1>
        <div><span onClick={()=>props.switchPage("search")}>Search</span>|| <span onClick={()=>props.switchPage("about")}>About</span></div>
      </header>
    </div>
  );
}
