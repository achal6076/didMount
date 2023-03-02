import React from "react";
import SortIcon from "@mui/icons-material/Sort";

export default function Posts(props) {
  return (
    <>
      <div>
        <h1 className="center">POSTS</h1>
        <table border={3}>
          <thead>
            <tr>
              <th>
                {" "}
                <span>Id</span> <SortIcon onClick={() => props.sorting("id")} />
              </th>
              <th>
                {" "}
                <span>Title</span>{" "}
                <SortIcon onClick={() => props.sorting("title")} />
              </th>
              <th>
                <span>Body</span>{" "}
                <SortIcon onClick={() => props.sorting("body")} />
              </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.posts &&
              props.posts.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <button
                        className="delbtn"
                        type="button"
                        onClick={() => props.handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
