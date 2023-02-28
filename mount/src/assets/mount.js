
import React from "react";
import axios from "axios";
import Posts from "./post";
import Comments from "./comment";
import Users from "./user"


export default class ComponentClass extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      renderType: "posts",
      items: [],
    };
  }

  handleDelete = (id) => {
    const newList = this.state.items.filter(item => item.id !== id);
    this.setState ({
      items : newList,
    })
  }


  compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };
   
  sortBy = (key) => {
    let arrayCopy = [...this.state.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({items: arrayCopy});
  };

  componentDidMount() {
    console.log("componentDidMountCalled", this.state.renderType);
    axios
      .get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then((res) =>
        this.setState({
          items: res.data,
        })
      );
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componnent did update", this.state.renderType);
  //   console.log(this.state.items);
  //   if(prevState.renderType !== this.state.renderType){
  //     // axios
  //     // .get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //     // .then((res) =>
  //     //   this.setState({
  //     //     items: res.data,
  //     //   })
  //     // );
  //   }
    
  // }

  changeState = (renderValue) =>{
    // this.setState({renderType : renderValue});
    axios
      .get(`https://jsonplaceholder.typicode.com/${renderValue}`)
      .then((res) =>
        this.setState({
          renderType : renderValue,
          items: res.data,
        })
      );
  }
  
  render() {
    return (
      <div class = "card">
        <br />
        <center>
          <button onClick={() => this.changeState("posts")}>Posts</button>
          <button onClick={() => this.changeState( "comments" )}>Comments</button>
          <button onClick={() => this.changeState("users" )}>Users</button>
        </center>
        {this.state.renderType==="users" && <Users handleDelete = {this.handleDelete} sorting ={this.sortBy} users ={this.state.items}/>}
        {this.state.renderType==="posts" && <Posts handleDelete={this.handleDelete} sorting ={this.sortBy} posts ={this.state.items}/>}
        {this.state.renderType==="comments" && <Comments handleDelete={this.handleDelete} sorting ={this.sortBy} comments ={this.state.items}/>}
        {/* {this.state.renderType=== "posts" ? <Posts/> : (this.state.renderType === "comments" ? <Comments/> : <Users/>)}  */}

      </div>
    );
  }
}
