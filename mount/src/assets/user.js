import React from "react";
import axios from "axios";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderType: "users",
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
        <h1 className="center" >USERS</h1>
        <table border={3}>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
          </tr>

          <tbody>
            {this.state.items.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
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
