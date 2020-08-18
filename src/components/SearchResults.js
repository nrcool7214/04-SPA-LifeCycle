import React, { Component } from "react";

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

  render() {
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
          <tr>
            <td>user id</td>
            <td>user name</td>
            <td>user email</td>
          </tr>
          <tr>
            <td>user id</td>
            <td>user name</td>
            <td>user email</td>
          </tr>
          <tr>
            <td>user id</td>
            <td>user name</td>
            <td>user email</td>
          </tr>
          <tr>
            <td>user id</td>
            <td>user name</td>
            <td>user email</td>
          </tr>
          <tr>
            <td>user id</td>
            <td>user name</td>
            <td>user email</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
