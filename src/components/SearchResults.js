import React, { Component } from "react";
import User from "./User";

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }  
    }

   /*  fetchdata=async()=>{
        let response= await fetch("https://jsonplaceholder.typicode.com/users")
        let finalData= await response.json()
        this.setState({
            users:finalData
        })
    } */

    
    componentDidMount(){
        //best place to fetch data from server
      /*   this.fetchdata() */

       fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=> this.setState({
            users:data
        }) ) 

    }

    shouldComponentUpdate(nextProps,nextState){
      console.log(nextState, ".....next state we are receiving")
      console.log(this.state, "......old state we have")

      if(nextProps.searchFor===this.props.searchFor && nextState.users===this.state.users){
        return false
      }else{
        return true
      }
    }


  render() {
    console.log("render Search Result Component")
    let newFilterArray = this.state.users.filter(user=> user.name.toLowerCase().includes(this.props.searchFor) || user.email.toLowerCase().includes(this.props.searchFor) )
    return (
      <table>
        <thead>
            <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
         {newFilterArray.map(filterUser=>{
           return(
              <User key={filterUser.id} id={filterUser.id} name={filterUser.name} email={filterUser.email} />
           )
         })}
         
        </tbody>
      </table>
    );
  }
}
