import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import "./app.css";
import About from "./components/About";
export default class App extends React.Component {
  state = {
    searchTerm: "",
    lastSearchTerm: "",
    currentPage: "about",
  };

  storeUserInput = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        lastSearchTerm: this.state.searchTerm,
      },
      () => {
        console.log(this.state.lastSearchTerm, "...lastsearchterm");
      }
    );
  };


SwitchPageSearch=()=>{
  this.setState({
    currentPage:"search"
  })
}
SwitchPageAbout=()=>{
  this.setState({
    currentPage:"about"
  })
}

switchPage=(page)=>{
this.setState({
  currentPage:page
})
}


  render() {

    return (
      <div>
        <Header switchPage={this.switchPage}/* about= {this.SwitchPageAbout} search= {this.SwitchPageSearch} *//>
        { this.state.currentPage === "search" ? (
          <>
            <form onSubmit={this.formSubmit}>
              {/*  e=>this.setState({searchTerm: e.target.value}) */}
              <input type="text" onChange={this.storeUserInput} />
              {/*    <input type="submit" value="seach"/> */}
              <button type="submit">search</button>
            </form>
            <SearchResults searchFor={this.state.lastSearchTerm} />{" "}
          </>
        ) : (
          <About />
        )}
      </div>
    );
  }
}
