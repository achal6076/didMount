import React,{Component} from "react";
import axios from "axios";
import Posts from "./Post";
import Comments from "./Comment";
import Users from "./user";
// import Error from "./Error";


export default class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderType: "posts",
      items: [],
    };
  }

  handleDelete = (id) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });
  };

  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortBy = (key) => {
    let arrayCopy = [...this.state.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ items: arrayCopy });
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
      .then((res) =>
        this.setState({
          items: res.data,
        })
      );
  }



  changeState = (renderValue) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${renderValue}`)
      .then((res) =>
        this.setState({
          renderType: renderValue,
          items: res.data,
        })
      );
  };

  render() {
    return (
      <main>
          

          
          <div className="card">
            <br />
            <center>
              <button onClick={() => this.changeState("posts")}>Posts</button>
              <button onClick={() => this.changeState("comments")}>
                Comments
              </button>
              <button onClick={() => this.changeState("users")}>Users</button>
            </center>
            {this.state.renderType === "users" && (
              <Users
                handleDelete={this.handleDelete}
                sorting={this.sortBy}
                users={this.state.items}
              />
            )}
            {this.state.renderType === "posts" && (
              <Posts
                handleDelete={this.handleDelete}
                sorting={this.sortBy}
                posts={this.state.items}
              />
            )}
            {this.state.renderType === "comments" && (
              <Comments
                handleDelete={this.handleDelete}
                sorting={this.sortBy}
                comments={this.state.items}
              />
            )}
            {/* {this.state.renderType=== "posts" ? <Posts/> : (this.state.renderType === "comments" ? <Comments/> : <Users/>)}  */}
          </div>
        </main>
    );
  }
}
