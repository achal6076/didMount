import React from "react";
// import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';
export default class Posts extends React.Component {

  render() {
    const posts = this.props.posts;
    return (
      <div>
        <h1 className="center" >POSTS</h1>
        <table  border={3}>
          <tr>
            <th> <span>Id</span> <SortIcon onClick={()=>this.props.sorting("id")} /></th>
            <th> <span>Title</span> <SortIcon onClick={()=>this.props.sorting("title")} /></th>
            <th><span>Body</span>  <SortIcon onClick={()=>this.props.sorting("body")} /></th>
            <th>Delete</th>
          </tr>

          <tbody>
            {posts.map((item) => {
              return (
                <tr>
                  {/* <td>{item.userId}</td> */}
                  <td>{item.id}</td>
                  <td>{item.title}</td>
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
