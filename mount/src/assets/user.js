import React from "react";


export default class Users extends React.Component {

  render() {
    const users = this.props.users;
    return (
      <div>
        <h1 className="center" >USERS</h1>
        <table border={3}>
          <tr>
            <th onClick={()=>this.props.sorting("id")}>Id</th>
            <th onClick={()=>this.props.sorting("name")}>Name</th>
            <th onClick={()=>this.props.sorting("username")}>UserName</th>
            <th onClick={()=>this.props.sorting("email")}>Email</th>
            <th >Delete</th>
            
          </tr>

          <tbody>
            {users.map((item) => {
              // console.log(item);
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td><button className="delbtn" type="button" onClick={()=>this.props.handleDelete(item.id)}>Delete</button></td>
                  {/* <td><button  type="button" onClick={()=>this.sortBy(item.name)}>sort</button></td> */}
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
