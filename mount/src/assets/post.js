import React,{Component} from "react";
import SortIcon from '@mui/icons-material/Sort';
export default class Posts extends Component {

  render() {
    return (
      <div>
        <h1 className="center" >POSTS</h1>
        <table  border={3}>
          <thead>

          <tr>
            <th> <span>Id</span> <SortIcon onClick={()=>this.props.sorting("id")} /></th>
            <th> <span>Title</span> <SortIcon onClick={()=>this.props.sorting("title")} /></th>
            <th><span>Body</span>  <SortIcon onClick={()=>this.props.sorting("body")} /></th>
            <th>Delete</th>
          </tr>

          </thead>
          <tbody>
            {this.props.posts.map((item, index) => {
              return (
                <tr key={index}>
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
