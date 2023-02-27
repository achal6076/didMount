import React from "react";
import axios from "axios";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderType: "comments",
      items: [],
    };
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
      <div className="card">
        <table border={3}>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>

          <tbody>
            {this.state.items.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
