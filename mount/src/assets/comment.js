import React from "react";
import SortIcon from '@mui/icons-material/Sort';


export default function Comment (props)  {
  // render() {
    // const comments = this.props.comments;
    return <>
      <div className="card">
        <h1 className="center" >COMMENTS</h1>
        <table border={3}>
          <thead>

          <tr>
           
            <th>Id <SortIcon onClick={()=>props.sorting("id")} /></th>
            <th>Name <SortIcon onClick={()=>props.sorting("name")} /></th>
            <th>Email <SortIcon onClick={()=>props.sorting("email")} /></th>
            <th>Body <SortIcon onClick={()=>props.sorting("body")} /></th>
            
            <th >Delete</th>
          </tr>

          </thead>
          <tbody>
            {props.comments&& props.comments.map((item, index) => {
              return (
                <tr key={index}>
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
              </>
  }

