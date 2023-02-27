
import React from "react";
// import axios from "axios";
import Posts from "./post";
import Comments from "./comment";
import Users from "./user";

export default class ComponentClass extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      hello: true,
      renderType: "posts",
      items: [],
    };
  }
  render() {
    return (
      <div class = "card">
        <br />
        <center>
          <button onClick={() => this.setState({ renderType: "posts" })}>Posts</button>
          <button onClick={() => this.setState({ renderType: "comments" })}>Comments</button>
          <button onClick={() => this.setState({ renderType: "users" })}>Users</button>
        </center>
        {this.state.renderType==="users" && <Users users ={this.state.items}/>}
        {this.state.renderType==="posts" && <Posts posts ={this.state.items}/>}
        {this.state.renderType==="comments" && <Comments comments ={this.state.items}/>}
        {/* {this.state.renderType=== "posts" ? <Posts/> : (this.state.renderType === "comments" ? <Comments/> : <Users/>)}  */}
      </div>
    );
  }
}
