import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

export default class App extends React.Component {

state={
  searchTerm:"",
  lastSearchTerm:""
}

storeUserInput = (e) => {
this.setState({
  searchTerm:e.target.value
})
}


formSubmit=(e)=>{
  e.preventDefault()
  this.setState({
    lastSearchTerm: this.state.searchTerm
  },()=>{
    console.log(this.state.lastSearchTerm, "...lastsearchterm")
  })
  


}
  render(){

    return (
    <div>
      <h1>React App</h1>
      <Header/>

      <form onSubmit={this.formSubmit}>
     {/*  e=>this.setState({searchTerm: e.target.value}) */}
        <input type="text" onChange={this.storeUserInput}/>
        {/*    <input type="submit" value="seach"/> */}
        <button type="submit">search</button>
      </form>
      <SearchResults searchFor={this.state.lastSearchTerm}/>
    </div>
  );
  }
  
}
