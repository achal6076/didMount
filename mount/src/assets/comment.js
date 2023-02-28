import React from "react";

export default class Posts extends React.Component {
  render() {
    const comments = this.props.comments;
    return (
      <div className="card">
        <h1 className="center" >COMMENTS</h1>
        <table border={3}>
          <tr>
            <th onClick={()=>this.props.sorting("id")}>Id</th>
            <th onClick={()=>this.props.sorting("name")}>Name</th>
            <th onClick={()=>this.props.sorting("email")}>Email</th>
            <th onClick={()=>this.props.sorting("body")}>Body</th>
            <th >Delete</th>
          </tr>

          <tbody>
            {comments.map((item) => {
              console.log(item);
              return (
                
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                  <td><button className="delbtn" type="button" onClick={()=>this.props.handleDelete(item.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
