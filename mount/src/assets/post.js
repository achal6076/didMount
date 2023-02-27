import React from "react";
import axios from "axios";

export default class Posts extends React.Component {
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

  render() {
    return (
      <div>
        <h1 className="center" >POSTS</h1>
        <table border={3}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
          </tr>

          <tbody>
            {this.state.items.map((item) => {
              return (
                <tr>
                  {/* <td>{item.userId}</td> */}
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td><button className="delbtn" type="button" onClick={()=>this.handleDelete(item.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
