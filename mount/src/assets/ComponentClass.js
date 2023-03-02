import React, { useState } from "react";
import axios from "axios";
import Posts from "./Post";
import Comments from "./Comment";
import Users from "./user";


// import Error from "./Error";
// const Mount = () => {
//   const
// }

export default function ComponentClass() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     renderType: "posts",
  //     items: [],
  //   };
  // }
  const [resourceType, setResourceType] = useState();
  const [items, setItems] = useState();

  const handleDelete = (id) => {
    setItems({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };

  const compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  const sortBy = (key) => {
    let arrayCopy = [...items];
    arrayCopy.sort(compareBy(key));
    setItems({ items: arrayCopy });
  };

  // componentDidMount() {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/${this.state.renderType}`)
  //     .then((res) =>
  //       this.setState({
  //         items: res.data,
  //       })
  //     );
  // }

  const changeState = (renderValue) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${renderValue}`)
      .then((res) => setItems(res.data));
    setResourceType(renderValue);
    // );
  };

  // render() {
  return (
    <main>
      <div className="card">
        <br />
        <center>
          <button onClick={() => changeState("posts")}>Posts</button>
          <button onClick={() => changeState("comments")}>Comments</button>
          <button onClick={() => changeState("users")}>Users</button>
        </center>

        {resourceType === "users" && (
          <Users handleDelete={handleDelete} sorting={sortBy} users={items} />
        )}

        {resourceType === "posts" && (
          <Posts handleDelete={handleDelete} sorting={sortBy} posts={items} />
        )}
        {resourceType === "comments" && (
          <Comments
            handleDelete={handleDelete}
            sorting={sortBy}
            comments={items}
          />
        )}
        {/* {this.state.renderType=== "posts" ? <Posts/> : (this.state.renderType === "comments" ? <Comments/> : <Users/>)}  */}
      </div>
    </main>
  );
}

// }
